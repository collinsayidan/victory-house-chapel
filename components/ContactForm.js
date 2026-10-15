'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { siteConfig } from '../content/siteContent';

const EMPTY = { name: '', email: '', subject: '', message: '', consent: false, website: '' };

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Enter your name';
  if (!data.email.trim()) errors.email = 'Enter your email address';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = 'Enter an email address in the correct format, like name@example.com';
  if (!data.subject.trim()) errors.subject = 'Enter a subject';
  if (!data.message.trim()) errors.message = 'Enter your message';
  if (!data.consent) errors.consent = 'Confirm that we can use your details to reply to you';
  return errors;
}

function Field({ id, label, hint, error, children }) {
  return (
    <div className={`mb-6 ${error ? 'border-l-4 border-error pl-4' : ''}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {hint ? (
        <span id={`${id}-hint`} className="form-hint">
          {hint}
        </span>
      ) : null}
      {error ? (
        <span id={`${id}-error`} className="form-error-message">
          <span className="sr-only">Error: </span>
          {error}
        </span>
      ) : null}
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [data, setData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const summaryRef = useRef(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ type: 'idle', message: '' });
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus({ type: 'loading', message: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Something went wrong.');

      setStatus({ type: result.delivered ? 'success' : 'not-sent', message: '' });
      if (result.delivered) setData(EMPTY);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  }

  const describedBy = (id) =>
    [errors[id] ? `${id}-error` : null].filter(Boolean).join(' ') || undefined;

  const errorList = Object.entries(errors);

  if (status.type === 'success') {
    return (
      <div className="rounded bg-success p-6 text-white" role="status">
        <h2 className="font-sans text-2xl text-white">Message sent</h2>
        <p className="mt-2">Thank you for getting in touch. We will reply as soon as we can.</p>
      </div>
    );
  }

  return (
    <div>
      {errorList.length ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-summary-title"
          className="mb-8 border-4 border-error p-5 focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-focus"
        >
          <h2 id="error-summary-title" className="font-sans text-xl">
            There is a problem
          </h2>
          <ul className="mt-3 space-y-1">
            {errorList.map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`} className="font-bold text-error">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {status.type === 'not-sent' ? (
        <div className="mb-8 border-l-8 border-navy-900 bg-navy-50 p-5" role="status">
          <h2 className="font-sans text-xl">Please email us instead</h2>
          <p className="mt-2">
            Our online form is not sending messages yet. Please email{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and we will reply as soon
            as we can.
          </p>
        </div>
      ) : null}

      {status.type === 'error' ? (
        <div className="mb-8 border-4 border-error p-5" role="alert">
          <p className="font-bold">Your message could not be sent. {status.message}</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate>
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            spellCheck={false}
            value={data.name}
            onChange={handleChange}
            aria-describedby={describedBy('name')}
            aria-invalid={Boolean(errors.name)}
            className={`form-input ${errors.name ? 'form-input-error' : ''}`}
          />
        </Field>

        <Field id="email" label="Email address" hint="We will only use this to reply to you." error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            value={data.email}
            onChange={handleChange}
            aria-describedby={['email-hint', describedBy('email')].filter(Boolean).join(' ')}
            aria-invalid={Boolean(errors.email)}
            className={`form-input ${errors.email ? 'form-input-error' : ''}`}
          />
        </Field>

        <Field id="subject" label="Subject" error={errors.subject}>
          <input
            id="subject"
            name="subject"
            type="text"
            value={data.subject}
            onChange={handleChange}
            aria-describedby={describedBy('subject')}
            aria-invalid={Boolean(errors.subject)}
            className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
          />
        </Field>

        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={data.message}
            onChange={handleChange}
            aria-describedby={describedBy('message')}
            aria-invalid={Boolean(errors.message)}
            className={`form-input ${errors.message ? 'form-input-error' : ''}`}
          />
        </Field>

        {/* Honeypot for spam bots — hidden from people and screen readers */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={handleChange} />
        </div>

        <div className={`mb-8 ${errors.consent ? 'border-l-4 border-error pl-4' : ''}`}>
          {errors.consent ? (
            <span id="consent-error" className="form-error-message">
              <span className="sr-only">Error: </span>
              {errors.consent}
            </span>
          ) : null}
          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={data.consent}
              onChange={handleChange}
              aria-describedby={describedBy('consent')}
              aria-invalid={Boolean(errors.consent)}
              className="mt-0.5 h-7 w-7 shrink-0 accent-navy-900"
            />
            <label htmlFor="consent">
              I agree that {siteConfig.shortName} can use my details to reply to this message, as
              explained in the <Link href="/privacy-policy">privacy policy</Link>.
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary text-lg" disabled={status.type === 'loading'}>
          {status.type === 'loading' ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  );
}
