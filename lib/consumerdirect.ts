/**
 * ConsumerDirect Signup API (SAPI) client.
 *
 * Docs: https://developer.consumerdirect.io/docs/credit-as-a-service-signup-api
 * RAML: https://www.smartcredit.com/documentation/signup-api/raml2html.htm
 *
 * Environment URLs:
 *   Stage:      https://stage-api.consumerdirect.io
 *   Production: https://api.consumerdirect.io
 */

const BASE_URL =
  process.env.CD_API_BASE_URL || 'https://stage-api.consumerdirect.io';
const CLIENT_KEY =
  process.env.CD_CLIENT_KEY || '45c3b9db-494d-4efa-af4a-d2437411a32b';
const DEFAULT_PID = process.env.CD_PID || '57365';

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT';
  body?: Record<string, unknown>;
  trackingToken?: string;
  customerToken?: string;
}

async function cdFetch(path: string, opts: ApiOptions = {}) {
  const { method = 'POST', body, trackingToken, customerToken } = opts;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // clientKey, trackingToken, customerToken are passed as parameters (body or query)
  const authParams: Record<string, string> = { clientKey: CLIENT_KEY };
  if (trackingToken) authParams.trackingToken = trackingToken;
  if (customerToken) authParams.customerToken = customerToken;

  let url = `${BASE_URL}${path}`;

  if (method === 'GET') {
    const qs = new URLSearchParams({ ...authParams } as Record<string, string>).toString();
    url = `${url}?${qs}`;
  }

  const res = await fetch(url, {
    method,
    headers,
    ...(method !== 'GET'
      ? { body: JSON.stringify({ ...authParams, ...body }) }
      : {}),
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const message =
      (data as any)?.message || (data as any)?.error || res.statusText;
    throw new Error(`CD API ${res.status}: ${message}`);
  }
  return data;
}

// ── Endpoints ────────────────────────────────────────────────────────

/** 1. Start Enrollment – returns trackingToken */
export async function startEnrollment(pid?: string) {
  return cdFetch('/start', {
    body: { pid: pid || DEFAULT_PID },
  });
}

/** 2. Campaign Details (optional) – returns plan/offer info */
export async function getCampaignDetails(trackingToken: string) {
  return cdFetch('/campaign-details', {
    method: 'GET',
    trackingToken,
  });
}

/** 3. Validate Email – check uniqueness */
export async function validateEmail(
  trackingToken: string,
  email: string,
) {
  return cdFetch('/validate/email', {
    trackingToken,
    body: { email },
  });
}

/** 4. Validate Sponsor Code (if applicable) */
export async function validateSponsorCode(
  trackingToken: string,
  sponsorCode: string,
) {
  return cdFetch('/validate/sponsor-code', {
    trackingToken,
    body: { sponsorCode },
  });
}

/** 5. Create Customer – returns customerToken */
export async function createCustomer(
  trackingToken: string,
  data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  },
) {
  return cdFetch('/customer', {
    trackingToken,
    body: data,
  });
}

/** 6. Validate SSN – check uniqueness */
export async function validateSSN(
  trackingToken: string,
  customerToken: string,
  ssn: string,
) {
  return cdFetch('/validate/ssn', {
    trackingToken,
    customerToken,
    body: { ssn },
  });
}

/** 7. Set Identity (with SSN) */
export async function setIdentity(
  trackingToken: string,
  customerToken: string,
  data: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    dateOfBirth: string;
    ssn: string;
  },
) {
  return cdFetch('/identity', {
    trackingToken,
    customerToken,
    body: data,
  });
}

/** 8. Get ID Verification Questions (KBA) */
export async function getQuestions(
  trackingToken: string,
  customerToken: string,
) {
  return cdFetch('/questions', {
    method: 'GET',
    trackingToken,
    customerToken,
  });
}

/** 9. Verify Identity – submit KBA answers */
export async function verifyIdentity(
  trackingToken: string,
  customerToken: string,
  data: {
    referenceNumber: string;
    answers: { questionId: string; answerId: string }[];
  },
) {
  return cdFetch('/id-verification', {
    trackingToken,
    customerToken,
    body: data,
  });
}

/** 10. Set Member Plan (optional – if multiple plans offered) */
export async function setMemberPlan(
  trackingToken: string,
  customerToken: string,
  planId: string,
) {
  return cdFetch('/member-plan', {
    trackingToken,
    customerToken,
    body: { planId },
  });
}

/** 11. Validate Credit Card */
export async function validateCreditCard(
  trackingToken: string,
  customerToken: string,
  data: {
    cardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    cvv: string;
    nameOnCard: string;
    billingZip: string;
  },
) {
  return cdFetch('/validate/credit-card', {
    trackingToken,
    customerToken,
    body: data,
  });
}

/** 12. Complete Enrollment */
export async function completeEnrollment(
  trackingToken: string,
  customerToken: string,
  creditCardToken?: string,
) {
  return cdFetch('/complete', {
    trackingToken,
    customerToken,
    body: { ...(creditCardToken ? { creditCardToken } : {}) },
  });
}

/** 13. Get Security Questions list (optional) */
export async function getSecurityQuestions(trackingToken: string) {
  return cdFetch('/security-questions', {
    method: 'GET',
    trackingToken,
  });
}

/** 14. Get Login Code – temporary password for member login */
export async function getLoginCode(
  trackingToken: string,
  customerToken: string,
) {
  return cdFetch('/login-code', {
    trackingToken,
    customerToken,
  });
}
