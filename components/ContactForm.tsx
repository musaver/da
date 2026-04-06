'use client';

import { FormEvent, useState } from 'react';
import IconifyIcon from '@/components/IconifyIcon';

/** FormSubmit: free, no API key. First-time use requires activating via link sent to this inbox. */
const FORM_SUBMIT_URL =
  'https://formsubmit.co/ajax/musaverleo@gmail.com';

const INTEREST_OPTIONS = [
  { value: 'design-branding', label: 'Design & Branding' },
  { value: 'ecommerce', label: 'Ecommerce' },
  { value: 'seo', label: 'SEO Optimization' },
  { value: 'custom-development', label: 'Custom Development' },
  { value: 'other', label: 'Other' },
] as const;

const INTEREST_LABELS: Record<string, string> = {
  'design-branding': 'Design & Branding',
  ecommerce: 'Ecommerce',
  seo: 'SEO Optimization',
  'custom-development': 'Custom Development',
  other: 'Other',
};

const BUDGET_OPTIONS = [
  { value: '', label: 'Select your budget' },
  { value: '1000-5000', label: '$1,000 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-plus', label: '$10,000+' },
  { value: 'other', label: 'Other' },
] as const;

const BUDGET_LABELS: Record<string, string> = {
  '1000-5000': '$1,000 - $5,000',
  '5000-10000': '$5,000 - $10,000',
  '10000-plus': '$10,000+',
  other: 'Other',
};

function isFormSubmitSuccess(data: unknown): boolean {
  if (typeof data !== 'object' || data === null) return false;
  const s = (data as { success?: unknown }).success;
  return s === true || s === 'true';
}

function getFormSubmitMessage(data: unknown): string {
  if (typeof data !== 'object' || data === null) return '';
  const m = (data as { message?: unknown }).message;
  return typeof m === 'string' ? m : '';
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errorMessage, setErrorMessage] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const interested = String(fd.get('interested') ?? '').trim();
    const budget = String(fd.get('budget') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    const interestedLabel =
      (INTEREST_LABELS[interested] ?? interested) || '(not specified)';
    const budgetLabel = budget
      ? BUDGET_LABELS[budget] ?? budget
      : '(not specified)';

    const fullMessage = [
      `Interested in: ${interestedLabel}`,
      `Project budget: ${budgetLabel}`,
      '',
      message,
    ].join('\n');

    try {
      const res = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `Contact form: ${name}`,
          _captcha: false,
          message: fullMessage,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as unknown;

      if (!isFormSubmitSuccess(data)) {
        setStatus('error');
        const msg = getFormSubmitMessage(data);
        if (/activation|activate form/i.test(msg)) {
          setErrorMessage(
            'This form must be activated once: check musaverleo@gmail.com for an email from FormSubmit and click the activation link.'
          );
        } else if (/web server/i.test(msg)) {
          setErrorMessage(
            'Submit failed. Use the site over http(s), not as a local file.'
          );
        } else {
          setErrorMessage(msg || 'Could not send your message. Please try again.');
        }
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-4 mb-lg-10">
            <label htmlFor="Fname" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="Fname"
              placeholder="Enter your name"
              className="form-control"
              required
              autoComplete="name"
              disabled={status === 'loading'}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-4 mb-lg-10">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              placeholder="Enter your email"
              aria-describedby="emailHelp"
              required
              autoComplete="email"
              disabled={status === 'loading'}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-4 mb-lg-10">
            <label htmlFor="interested" className="form-label">
              What are you interested in?
            </label>
            <select
              className="form-select"
              id="interested"
              name="interested"
              defaultValue={INTEREST_OPTIONS[0].value}
              disabled={status === 'loading'}
            >
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-4 mb-lg-10">
            <label htmlFor="Projectbudget" className="form-label">
              Project Budget
            </label>
            <select
              className="form-select"
              id="Projectbudget"
              name="budget"
              defaultValue=""
              disabled={status === 'loading'}
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt.label} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-12">
          <div className="mb-4 mb-lg-10">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={4}
              required
              disabled={status === 'loading'}
            />
          </div>
        </div>
      </div>

      {status === 'success' && (
        <p className="text-success mb-4 mb-lg-6" role="status">
          Thank you — your message was sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && errorMessage && (
        <p className="text-danger mb-4 mb-lg-6" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-dark mx-auto"
        disabled={status === 'loading'}
      >
        <span className="btn-text">
          {status === 'loading' ? 'Sending…' : "Let's Collaborate"}
        </span>
        <IconifyIcon
          icon="solar:arrow-right-up-linear"
          className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"
        />
      </button>
    </form>
  );
}
