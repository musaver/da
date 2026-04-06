import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const CONTACT_TO = 'musaverleo@gmail.com';

const INTEREST_LABELS: Record<string, string> = {
  'design-branding': 'Design & Branding',
  ecommerce: 'Ecommerce',
  seo: 'SEO Optimization',
  'custom-development': 'Custom Development',
  other: 'Other',
};

const BUDGET_LABELS: Record<string, string> = {
  '1000-5000': '$1,000 - $5,000',
  '5000-10000': '$5,000 - $10,000',
  '10000-plus': '$10,000+',
};

function getFromAddress(): string {
  return (
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    'Dev Aspire <onboarding@resend.dev>'
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          'Email is not configured. Set RESEND_API_KEY in your environment.',
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, email, interested, budget, message } = body as Record<
    string,
    unknown
  >;

  const nameStr = typeof name === 'string' ? name.trim() : '';
  const emailStr = typeof email === 'string' ? email.trim() : '';
  const interestedRaw =
    typeof interested === 'string' ? interested.trim() : '';
  const budgetRaw = typeof budget === 'string' ? budget.trim() : '';
  const interestedStr =
    (INTEREST_LABELS[interestedRaw] ?? interestedRaw) || '(not specified)';
  const budgetStr = budgetRaw
    ? BUDGET_LABELS[budgetRaw] ?? budgetRaw
    : '';
  const messageStr = typeof message === 'string' ? message.trim() : '';

  if (!nameStr || !emailStr || !messageStr) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  if (!emailOk) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const text = [
    `Name: ${nameStr}`,
    `Email: ${emailStr}`,
    `Interested in: ${interestedStr}`,
    `Project budget: ${budgetStr || '(not specified)'}`,
    '',
    'Message:',
    messageStr,
  ].join('\n');

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(nameStr)}</p>
    <p><strong>Email:</strong> ${escapeHtml(emailStr)}</p>
    <p><strong>Interested in:</strong> ${escapeHtml(interestedStr)}</p>
    <p><strong>Project budget:</strong> ${escapeHtml(budgetStr || '(not specified)')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(messageStr).replace(/\n/g, '<br/>')}</p>
  `;

  const { error } = await resend.emails.send({
    from: getFromAddress(),
    to: [CONTACT_TO],
    replyTo: emailStr,
    subject: `Contact form: ${nameStr}`,
    text,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Could not send your message. Please try again later.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
