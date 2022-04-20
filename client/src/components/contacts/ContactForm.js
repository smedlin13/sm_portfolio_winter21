import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "xcJOlFym";


const ContactForm = ({ addContact, setEdit, id, updateContact, f_name, l_name, email, phone, body }) => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ contact });
    alert("Form submitted")
  };

  const [contact, setContact ] = useState({ f_name: '', l_name: '', email: '', phone: '', body: ''})
  
  // useEffect( () => {
  //   if (id) {
  //     setContact({ f_name, l_name, email, phone, body })
  //   }
  // }, [])


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (id) {
  //     updateContact(id, contact)
  //     setEdit(false)
  //   } else {
  //     addContact(contact)
  //   }
  //   setContact({ f_name: '', l_name: '', email: '', phone: '', body: ''})
  // }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label for="f_name">First Name:</Form.Label>
            <Form.Control
              name='f_name'
              id='f_name'
              value={contact.f_name}
              onChange={(e) => setContact({...contact, f_name: e.target.value})}
              required
              placeholder='First Name'
            />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label for="l_name">Last Name:</Form.Label>
        <Form.Control
          name='l_name'
          id='l_name'
          value={contact.l_name}
          onChange={(e) => setContact({...contact, l_name: e.target.value})}
          required
          placeholder='Last Name'
        />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label for="email">Email:</Form.Label>
        <Form.Control
          name='email'
          id='email'
          value={contact.email}
          onChange={(e) => setContact({...contact, email: e.target.value})}
          required
          placeholder='Email'
        />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label for="number">Phone Number:</Form.Label>
        <Form.Control
          name='number'
          id='number'
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.target.value})}
          required
          placeholder='Phone Number'
        />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label for="body">Reason for Contacting:</Form.Label>
        <Form.Control
          name='body'
          id='body'
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

// ReactDOM.render(<ContactForm />, document.getElementById("root"));

export default ContactForm;