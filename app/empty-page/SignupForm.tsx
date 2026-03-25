'use client';

import { useState, FormEvent } from 'react';

// ── helpers ──────────────────────────────────────────────────────────

async function api(action: string, body?: Record<string, unknown>) {
  const isGet = ['campaign-details', 'get-questions', 'security-questions'].includes(action);

  if (isGet) {
    const qs = new URLSearchParams(body as Record<string, string>).toString();
    const res = await fetch(`/api/signup/${action}?${qs}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Request failed');
    return data;
  }

  const res = await fetch(`/api/signup/${action}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

// ── types ────────────────────────────────────────────────────────────

interface Question {
  questionId: string;
  questionText: string;
  choices: { answerId: string; answerText: string }[];
}

type Step =
  | 'account'
  | 'identity'
  | 'questions'
  | 'payment'
  | 'confirmation';

const STEP_LABELS: Record<Step, string> = {
  account: 'Create Account',
  identity: 'Verify Identity',
  questions: 'Security Questions',
  payment: 'Payment',
  confirmation: 'Confirmation',
};

const STEPS: Step[] = ['account', 'identity', 'questions', 'payment', 'confirmation'];

// ── US States ────────────────────────────────────────────────────────

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN',
  'IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV',
  'NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN',
  'TX','UT','VT','VA','WA','WV','WI','WY','DC',
];

// ── component ────────────────────────────────────────────────────────

export default function SignupForm() {
  const [step, setStep] = useState<Step>('account');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // tokens persisted across steps
  const [trackingToken, setTrackingToken] = useState('');
  const [customerToken, setCustomerToken] = useState('');

  // Step 1 – account
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Step 2 – identity
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [ssn, setSsn] = useState('');

  // Step 3 – KBA questions
  const [questions, setQuestions] = useState<Question[]>([]);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Step 4 – payment
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [billingZip, setBillingZip] = useState('');
  const [creditCardToken, setCreditCardToken] = useState('');

  // Step 5 – confirmation
  const [confirmationData, setConfirmationData] = useState<any>(null);

  // ── step handlers ──────────────────────────────────────────────────

  async function handleAccount(e: FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // 1. Start enrollment
      const startRes = await api('start');
      const tt = startRes.trackingToken;
      setTrackingToken(tt);

      // 2. Validate email
      await api('validate-email', { trackingToken: tt, email });

      // 3. Create customer
      const custRes = await api('create-customer', {
        trackingToken: tt,
        email,
        password,
        firstName,
        lastName,
      });
      setCustomerToken(custRes.customerToken);

      setStep('identity');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleIdentity(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Validate SSN first
      await api('validate-ssn', { trackingToken, customerToken, ssn });

      // Set identity
      await api('set-identity', {
        trackingToken,
        customerToken,
        firstName,
        lastName,
        address,
        city,
        state,
        zip,
        phone,
        dateOfBirth: dob,
        ssn,
      });

      // Get KBA questions
      const qRes = await api('get-questions', {
        trackingToken,
        customerToken,
      });
      setQuestions(qRes.questions || []);
      setReferenceNumber(qRes.referenceNumber || '');

      setStep('questions');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleQuestions(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const answerList = Object.entries(answers).map(([questionId, answerId]) => ({
        questionId,
        answerId,
      }));
      await api('verify-identity', {
        trackingToken,
        customerToken,
        referenceNumber,
        answers: answerList,
      });

      setStep('payment');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handlePayment(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Validate credit card
      const ccRes = await api('validate-credit-card', {
        trackingToken,
        customerToken,
        cardNumber,
        expirationMonth: expMonth,
        expirationYear: expYear,
        cvv,
        nameOnCard,
        billingZip,
      });
      const ccToken = ccRes.creditCardToken;
      setCreditCardToken(ccToken);

      // Complete enrollment
      const completeRes = await api('complete', {
        trackingToken,
        customerToken,
        creditCardToken: ccToken,
      });
      setConfirmationData(completeRes);

      setStep('confirmation');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSkipPayment() {
    setLoading(true);
    setError('');
    try {
      const completeRes = await api('complete', {
        trackingToken,
        customerToken,
      });
      setConfirmationData(completeRes);
      setStep('confirmation');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // ── progress bar ───────────────────────────────────────────────────

  const currentIdx = STEPS.indexOf(step);

  function renderProgress() {
    return (
      <div className="d-flex justify-content-between mb-8 position-relative">
        {/* connector line */}
        <div
          className="position-absolute"
          style={{
            top: 16,
            left: '10%',
            right: '10%',
            height: 2,
            background: '#e0e0e0',
          }}
        />
        <div
          className="position-absolute"
          style={{
            top: 16,
            left: '10%',
            width: `${(currentIdx / (STEPS.length - 1)) * 80}%`,
            height: 2,
            background: '#6366f1',
            transition: 'width 0.3s',
          }}
        />
        {STEPS.map((s, i) => (
          <div key={s} className="text-center position-relative" style={{ zIndex: 1, flex: 1 }}>
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2"
              style={{
                width: 34,
                height: 34,
                fontSize: 14,
                fontWeight: 600,
                background: i <= currentIdx ? '#6366f1' : '#e0e0e0',
                color: i <= currentIdx ? '#fff' : '#888',
                transition: 'background 0.3s',
              }}
            >
              {i < currentIdx ? '✓' : i + 1}
            </div>
            <div
              className="d-none d-md-block"
              style={{
                fontSize: 12,
                color: i <= currentIdx ? '#6366f1' : '#999',
                fontWeight: i === currentIdx ? 600 : 400,
              }}
            >
              {STEP_LABELS[s]}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ── input helper ───────────────────────────────────────────────────

  function inputProps(
    label: string,
    value: string,
    setter: (v: string) => void,
    type = 'text',
    extra: Record<string, unknown> = {},
  ) {
    return (
      <div className="mb-4">
        <label className="form-label fw-medium">{label}</label>
        <input
          className="form-control form-control-lg"
          type={type}
          value={value}
          onChange={(e) => setter(e.target.value)}
          required
          {...extra}
        />
      </div>
    );
  }

  // ── render steps ───────────────────────────────────────────────────

  function renderAccount() {
    return (
      <form onSubmit={handleAccount}>
        <h4 className="mb-5 fw-bold">Create Your Account</h4>
        <div className="row">
          <div className="col-md-6">{inputProps('First Name', firstName, setFirstName)}</div>
          <div className="col-md-6">{inputProps('Last Name', lastName, setLastName)}</div>
        </div>
        {inputProps('Email Address', email, setEmail, 'email')}
        {inputProps('Password', password, setPassword, 'password', { minLength: 8 })}
        {inputProps('Confirm Password', confirmPassword, setConfirmPassword, 'password')}
        <button className="btn btn-lg btn-primary w-100 mt-2" type="submit" disabled={loading}>
          {loading ? 'Creating Account…' : 'Continue'}
        </button>
      </form>
    );
  }

  function renderIdentity() {
    return (
      <form onSubmit={handleIdentity}>
        <h4 className="mb-5 fw-bold">Verify Your Identity</h4>
        {inputProps('Street Address', address, setAddress)}
        <div className="row">
          <div className="col-md-5">{inputProps('City', city, setCity)}</div>
          <div className="col-md-3">
            <div className="mb-4">
              <label className="form-label fw-medium">State</label>
              <select
                className="form-select form-select-lg"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option value="">Select</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-4">{inputProps('ZIP Code', zip, setZip, 'text', { pattern: '\\d{5}', maxLength: 5 })}</div>
        </div>
        {inputProps('Phone Number', phone, setPhone, 'tel')}
        {inputProps('Date of Birth', dob, setDob, 'date')}
        {inputProps('Social Security Number', ssn, setSsn, 'password', {
          placeholder: 'XXX-XX-XXXX',
          maxLength: 11,
        })}
        <p className="text-muted small mb-4">
          Your SSN is required for identity verification and is transmitted securely.
        </p>
        <button className="btn btn-lg btn-primary w-100 mt-2" type="submit" disabled={loading}>
          {loading ? 'Verifying…' : 'Continue'}
        </button>
      </form>
    );
  }

  function renderQuestions() {
    return (
      <form onSubmit={handleQuestions}>
        <h4 className="mb-5 fw-bold">Security Verification</h4>
        <p className="text-muted mb-5">
          Please answer the following questions to confirm your identity.
        </p>
        {questions.map((q, idx) => (
          <div key={q.questionId} className="mb-5">
            <p className="fw-medium mb-3">
              {idx + 1}. {q.questionText}
            </p>
            {q.choices.map((c) => (
              <div className="form-check mb-2" key={c.answerId}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={`q-${q.questionId}`}
                  id={`q-${q.questionId}-${c.answerId}`}
                  value={c.answerId}
                  checked={answers[q.questionId] === c.answerId}
                  onChange={() =>
                    setAnswers((prev) => ({ ...prev, [q.questionId]: c.answerId }))
                  }
                  required
                />
                <label className="form-check-label" htmlFor={`q-${q.questionId}-${c.answerId}`}>
                  {c.answerText}
                </label>
              </div>
            ))}
          </div>
        ))}
        {questions.length === 0 && (
          <p className="text-center text-muted py-5">
            No verification questions required. You may continue.
          </p>
        )}
        <button className="btn btn-lg btn-primary w-100 mt-2" type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Continue'}
        </button>
      </form>
    );
  }

  function renderPayment() {
    return (
      <form onSubmit={handlePayment}>
        <h4 className="mb-5 fw-bold">Payment Information</h4>
        {inputProps('Name on Card', nameOnCard, setNameOnCard)}
        {inputProps('Card Number', cardNumber, setCardNumber, 'text', {
          maxLength: 19,
          pattern: '[\\d ]{13,19}',
          inputMode: 'numeric',
        })}
        <div className="row">
          <div className="col-4">
            <div className="mb-4">
              <label className="form-label fw-medium">Month</label>
              <select
                className="form-select form-select-lg"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
                required
              >
                <option value="">MM</option>
                {Array.from({ length: 12 }, (_, i) => {
                  const m = String(i + 1).padStart(2, '0');
                  return <option key={m} value={m}>{m}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="col-4">
            <div className="mb-4">
              <label className="form-label fw-medium">Year</label>
              <select
                className="form-select form-select-lg"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
                required
              >
                <option value="">YYYY</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const y = String(new Date().getFullYear() + i);
                  return <option key={y} value={y}>{y}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="col-4">{inputProps('CVV', cvv, setCvv, 'password', { maxLength: 4 })}</div>
        </div>
        {inputProps('Billing ZIP', billingZip, setBillingZip, 'text', { maxLength: 5 })}
        <button className="btn btn-lg btn-primary w-100 mt-2" type="submit" disabled={loading}>
          {loading ? 'Processing…' : 'Complete Enrollment'}
        </button>
        <button
          type="button"
          className="btn btn-lg btn-outline-secondary w-100 mt-3"
          onClick={handleSkipPayment}
          disabled={loading}
        >
          Skip Payment (Free Trial)
        </button>
      </form>
    );
  }

  function renderConfirmation() {
    return (
      <div className="text-center py-6">
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-5"
          style={{ width: 72, height: 72, background: '#d1fae5', color: '#059669', fontSize: 32 }}
        >
          &#10003;
        </div>
        <h3 className="fw-bold mb-4">You&apos;re All Set!</h3>
        <p className="text-muted mb-5">
          Your account has been created successfully.
          {confirmationData?.memberPlanType && (
            <> You are enrolled in the <strong>{confirmationData.memberPlanType}</strong> plan.</>
          )}
        </p>
        <a
          href="https://www.smartcredit.com"
          className="btn btn-lg btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In to Your Account
        </a>
      </div>
    );
  }

  // ── main render ────────────────────────────────────────────────────

  return (
    <div className="card border-0 shadow-lg rounded-4 p-4 p-md-6">
      {renderProgress()}

      {error && (
        <div className="alert alert-danger d-flex align-items-center mb-5" role="alert">
          <span className="me-2">&#9888;</span>
          <span>{error}</span>
          <button
            type="button"
            className="btn-close ms-auto"
            onClick={() => setError('')}
          />
        </div>
      )}

      {step === 'account' && renderAccount()}
      {step === 'identity' && renderIdentity()}
      {step === 'questions' && renderQuestions()}
      {step === 'payment' && renderPayment()}
      {step === 'confirmation' && renderConfirmation()}
    </div>
  );
}
