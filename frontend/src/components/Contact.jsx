import { useState } from 'react'
import { business } from '../data/site'

const empty = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setForm(empty)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const input =
    'w-full rounded-xl border border-nut-100 bg-white px-4 py-3 outline-none transition focus:border-leaf-500 focus:ring-2 focus:ring-leaf-100'

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 overflow-hidden rounded-[2rem] bg-leaf-700 p-8 text-nut-50 sm:p-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-nut-300">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Order or say hello</h2>
          <p className="mt-4 text-nut-100/80">
            Want to place an order, book us for an event, or become a distributor? Send us a message
            and we'll get back to you quickly.
          </p>
          <ul className="mt-8 space-y-3 text-nut-100">
            <li>📍 {business.city}</li>
            <li>
              ✉️ <a href={`mailto:${business.email}`} className="underline-offset-4 hover:underline">{business.email}</a>
            </li>
            <li>
              💬{' '}
              <a href={`https://wa.me/${business.whatsapp}`} className="underline-offset-4 hover:underline">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={submit} className="space-y-4 rounded-3xl bg-nut-50 p-6 text-leaf-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Your name" value={form.name} onChange={update} className={input} />
            <input name="phone" placeholder="Phone (optional)" value={form.phone} onChange={update} className={input} />
          </div>
          <input name="email" type="email" required placeholder="Email address" value={form.email} onChange={update} className={input} />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What would you like to order?"
            value={form.message}
            onChange={update}
            className={input}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-full bg-nut-500 py-3 font-semibold text-white transition hover:bg-nut-700 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' && <p className="text-center text-sm text-leaf-700">Thanks! We'll be in touch soon.</p>}
          {status === 'error' && (
            <p className="text-center text-sm text-red-700">
              Something went wrong. Please email us at {business.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
