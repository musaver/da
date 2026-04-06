'use client';

import { FormEvent, useState } from 'react';
import IconifyIcon from '@/components/IconifyIcon';

const INTEREST_OPTIONS = [
  { value: 'design-branding', label: 'Design & Branding' },
  { value: 'ecommerce', label: 'Ecommerce' },
  { value: 'seo', label: 'SEO Optimization' },
  { value: 'custom-development', label: 'Custom Development' },
  { value: 'other', label: 'Other' },
] as const;

const BUDGET_OPTIONS = [
  { value: '', label: 'Select your budget' },
  { value: '1000-5000', label: '$1,000 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-plus', label: '$10,000+' },
] as const;

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

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          interested,
          budget,
          message,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong.');
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
