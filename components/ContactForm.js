'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong.');

      setStatus({
        type: 'success',
        message: 'Example form submitted successfully. This demo route does not send a real email yet.'
      });

      setFormData({ name: '', email: '', subject: '', message: '', consent: false });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'There was a problem submitting the form.' });
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
      <p className="mb-6 text-sm leading-6 text-slate-600">
        This form uses an example API route only. It is provided as a development stub and should be connected to a secure backend or trusted form handling service before the site goes live.
      </p>

      {status.message ? (
        <div
          role="status"
          aria-live="polite"
          className={`mb-5 rounded-2xl px-4 py-3 text-sm font-medium ${
            status.type === 'success'
              ? 'bg-emerald-50 text-emerald-800'
              : status.type === 'error'
                ? 'bg-rose-50 text-rose-800'
                : 'bg-slate-100 text-slate-800'
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-900">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-brand-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-500" />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-900">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-500" />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-900">Subject</label>
          <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-500" />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-900">Message</label>
          <textarea id="message" name="message" rows="6" required value={formData.message} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-500" />
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
          <input id="consent" name="consent" type="checkbox" required checked={formData.consent} onChange={handleChange} className="mt-1 h-4 w-4" />
          <label htmlFor="consent" className="text-sm leading-6 text-slate-700">
            I consent to Victory House Chapel Assemblies of God, Edinburgh storing and processing my personal data in accordance with the{' '}
            <a href="/privacy-policy" className="font-semibold text-brand-700 underline underline-offset-2">Privacy Policy</a>.
          </label>
        </div>

        <button type="submit" className="rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-soft">
          Send message
        </button>
      </form>
    </div>
  );
}
