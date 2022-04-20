import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ContactContext = React.createContext();
export const ContactConsumer = ContactContext.Consumer;

const ContactProvider = ({ children }) => {
  const [ contacts, setContacts ] = useState([]);

  const navigate = useNavigate()

  const getAllContacts = () => {
    axios.get('/api/contacts')
      .then( res => setContacts(res.data) )
      .catch ( err => console.log(err))
  }

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
    <ContactContext.Provider value={{
      contacts,
      getAllContacts: getAllContacts,
      addContact: addContact,
      updateContact: updateContact,
      deleteContact: deleteContact,
    }}>
      { children }
    </ContactContext.Provider>
  )
}

export default ContactProvider;