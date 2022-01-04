import { useState, useEffect } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact ] = useState({ f_name: '', l_name: '', email: '', phone: '', body: ''})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addContact(contact)
    setContact({ f_name: '', l_name: '', email: '', phone: '', body: ''})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          name='f_name'
          value={contact.f_name}
          onChange={(e) => setContact({...ContactForm, f_name: e.target.value})}
          required
          placeholder='First Name'
        />
        <label>Last Name:</label>
        <input
          name='l_name'
          value={contact.l_name}
          onChange={(e) => setContact({...ContactForm, l_name: e.target.value})}
          required
          placeholder='Last Name'
        />
        <label>Email:</label>
        <input
          name='email'
          value={contact.email}
          onChange={(e) => setContact({...ContactForm, email: e.target.value})}
          required
          placeholder='Email'
        />
        <label>Phone Number:</label>
        <input
          name='number'
          value={contact.phone}
          onChange={(e) => setContact({...ContactForm, phone: e.target.value})}
          required
          placeholder='Phone Number'
        />
        <label>Reason for Contacting:</label>
        <textarea
          name='body'
          value={contact.body}
          onChange={(e) => setContact({...ContactForm, body: e.target.value})}
          required
          placeholder='Tell Me How I Can Help!'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ContactForm;