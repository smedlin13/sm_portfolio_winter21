import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ContactShow = ({deleteContact, updateContact, f_name, l_name, email, phone, body, id}) => {
  const [editing, setEdit] = useState()
  const [contact, setContact] = useState({f_name: '', l_name: '', email: '', phone: 0, body: '' })
  const params = useParams();


  useEffect( () => {
    axios.get(`/api/contacts/${params.contactId}`)
    .then( res => setContact(res.data))
    .catch( err => console.log(err))
  }, [])

  return (
    <>
      { editing ? 
      <>
        <ContactForm
          {...contact}
          updateContact={updateContact}
        />
        <br />
        <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
        <br />
      </>
      :
      <>
     
    <h2>{contact.f_name} {contact.l_name}</h2>
    <h3>Phone: {contact.phone} Email: {contact.email}</h3>
    <p>Comments: {contact.body}</p>
    
    <Button variant="success" onClick={() => setEdit(true)}>Edit</Button>
    <Button variant="danger" onClick={() => deleteContact(id)}>Delete</Button>
    </>
      }
    </>
  )
}


export default ContactShow;
