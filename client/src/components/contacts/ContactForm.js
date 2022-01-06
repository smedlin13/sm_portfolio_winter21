import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = ({ addContact }) => {
  const [contact, setContact ] = useState({ f_name: '', l_name: '', email: '', phone: '', body: ''})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addContact(contact)
    setContact({ f_name: '', l_name: '', email: '', phone: '', body: ''})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name:</Form.Label>
            <Form.Control
              name='f_name'
              value={contact.f_name}
              onChange={(e) => setContact({...contact, f_name: e.target.value})}
              required
              placeholder='First Name'
            />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          name='l_name'
          value={contact.l_name}
          onChange={(e) => setContact({...contact, l_name: e.target.value})}
          required
          placeholder='Last Name'
        />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          name='email'
          value={contact.email}
          onChange={(e) => setContact({...contact, email: e.target.value})}
          required
          placeholder='Email'
        />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control
          name='number'
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.target.value})}
          required
          placeholder='Phone Number'
        />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Reason for Contacting:</Form.Label>
        <Form.Control
          name='body'
          value={contact.body}
          onChange={(e) => setContact({...contact, body: e.target.value})}
          required
          placeholder='Tell Me How I Can Help!'
        ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default ContactForm;