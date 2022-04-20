import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import { Button } from 'react-bootstrap';
import { ContactConsumer } from '../../providers/ContactProvider';


const ContactShow = ({deleteContact, updateContact}) => {
  const params = useParams();
  const [contact, setContact] = useState({f_name: '', l_name: '', email: '', phone: 0, body: '' })
  const [editing, setEdit] = useState(false)
  


  useEffect( () => {
    axios.get(`/api/contacts/${params.contactId}`)
    .then( res => setContact(res.data))
    .catch( err => console.log(err))
  }, [])

  const { f_name, l_name, email, phone, body, id } = contact

  return (
    <>
      { editing ?
      <>
        <ContactForm
          {...contact}
          updateContact={updateContact}
          // setEdit={setEdit}
        />
        <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
        <br />
      </>
      :
      <>
     
    <h2>{f_name} {l_name}</h2>
    <h3>Phone: {phone} Email: {email}</h3>
    <p>Comments: {body}</p>
    <p>ID: {params.contactId}</p>
    
    <Button variant="success" onClick={() => setEdit(true)}>Edit</Button>
    <Button variant="danger" onClick={() => deleteContact(id)}>Delete</Button>
    </>
      }
    </>
  )
}

const ConnectedContactShow = (props) => (
  <ContactConsumer>
    { value => <ContactShow {...props} {...value} /> }
  </ContactConsumer>
)


export default ConnectedContactShow;
