import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { useNavigate } from 'react-router';

const Contacts = ({}) => {
  const [contacts, setContacts] = useState([])
  const navigate = useNavigate()

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

  const updateContact = (id, contact) => {
    axios.put(`/api/contacts/${id}`, { contact })
      .then( res => {
        const newUpdatedContacts = contacts.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setContacts(newUpdatedContacts)
        navigate('/contacts')
      })
      .catch( err => console.log(err))
  }

  
  const deleteContact = (id) => {
    axios.delete(`/api/contacts/${id}`)
    .then(res => {
      setContacts(contacts.filter( c => c.id !== id))
      alert(res.data.message)
      navigate('/contacts')
    })
    .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Contact Me</h1>
      <ContactForm addContact={addContact}/>
      <ContactList 
      contacts={contacts}
      deleteContact={deleteContact}
      updateContact={updateContact}
       />
    </>
  )
}

export default Contacts;
