import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';

const Contacts = ({}) => {
  const [contacts, setContacts ] =useState([])

  useEffect( () => {
    axios.get('/api/contacts')
      .then( res => {
        setContacts(res.data)
      })
      .catch( err => console.log(err))
  }, [])
  
  const addContact = (contact) => {
    axios.post('/api/contacts', { contact })
    .then( res => {
      setContacts([...contacts, res.data])
    })
    .catch( err => console.log(err))
}
  
  return (
    <>
      <h1>Contact Me</h1>
      <ContactForm addContact={addContact}/>
    </>
  )
}

export default Contacts;
