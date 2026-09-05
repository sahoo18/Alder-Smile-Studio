import { useState } from 'react'
import reception from '../assets/gallery/reception.png.png'

const initialForm = { name:'', email:'', phone:'', service:'Smile Consultation', date:'', time:'', guests:'1', request:'' }

export default function Booking({ navigate }) {
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  function submit(event) {
    event.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      setMessage('Please complete all required fields.')
      return
    }
    const existing = JSON.parse(localStorage.getItem('alderAppointments') || '[]')
    const appointment = { ...form, id: Date.now(), status: 'Pending', createdAt: new Date().toISOString() }
    localStorage.setItem('alderAppointments', JSON.stringify([appointment, ...existing]))
    setMessage('Your visit request has been received. We will contact you shortly to confirm it.')
    setForm(initialForm)
  }

  return (
    <main className="booking-page">
      <div className="booking-glow booking-glow-one" />
      <div className="booking-glow booking-glow-two" />

      <header className="booking-nav">
        <button className="booking-brand" onClick={() => navigate('/')}>alder<span>.</span>smile</button>
        <button className="booking-back" onClick={() => navigate('/')}>← Back to main page</button>
      </header>

      <section className="booking-hero">
        <div className="booking-copy reveal-up">
          <p className="booking-kicker">✦ YOUR VISIT STARTS HERE</p>
          <h1>Book a <span>Visit</span></h1>
          <p>Choose a convenient time and tell us how we can help. Your request goes directly to our appointment dashboard.</p>
          <div className="booking-image-card float-image">
            <img src={reception} alt="Alder Smile Studio reception" />
            <div><strong>A calmer experience</strong><span>Thoughtful care from the moment you arrive.</span></div>
          </div>
        </div>

        <form className="booking-form reveal-up" onSubmit={submit}>
          <div className="booking-form-head"><h2>Appointment details</h2><p>Fields marked * are required.</p></div>
          <div className="booking-grid two">
            <Field label="Full name *"><input name="name" value={form.name} onChange={update} placeholder="e.g. Emma Johnson" /></Field>
            <Field label="Email address *"><input type="email" name="email" value={form.email} onChange={update} placeholder="e.g. you@email.com" /></Field>
          </div>
          <div className="booking-grid two">
            <Field label="Phone number *"><input name="phone" value={form.phone} onChange={update} placeholder="e.g. +91 98765 43210" /></Field>
            <Field label="Visit type"><select name="service" value={form.service} onChange={update}><option>Smile Consultation</option><option>Dental Cleaning</option><option>Teeth Whitening</option><option>Invisalign Consultation</option><option>Dental Emergency</option></select></Field>
          </div>
          <div className="booking-grid three">
            <Field label="Preferred date *"><input type="date" name="date" value={form.date} min={new Date().toISOString().split('T')[0]} onChange={update} /></Field>
            <Field label="Preferred time *"><select name="time" value={form.time} onChange={update}><option value="">Select time</option><option>09:00 AM</option><option>10:30 AM</option><option>12:00 PM</option><option>02:00 PM</option><option>04:00 PM</option><option>06:00 PM</option></select></Field>
            <Field label="Guests"><select name="guests" value={form.guests} onChange={update}><option>1</option><option>2</option><option>3</option><option>4</option></select></Field>
          </div>
          <Field label="Additional requests"><textarea name="request" value={form.request} onChange={update} placeholder="Tell us about any concerns, accessibility needs, or preferred dentist..." /></Field>
          {message && <div className={`booking-message ${message.startsWith('Your') ? 'success' : 'error'}`}>{message}</div>}
          <button className="booking-submit" type="submit">Confirm visit request <span>→</span></button>
        </form>
      </section>
    </main>
  )
}

function Field({ label, children }) { return <label className="booking-field"><span>{label}</span>{children}</label> }
