import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { ContactConsumer } from '../../providers/ContactProvider';
import { Button } from 'react-bootstrap';

const Contacts = ({ contacts, getAllContacts, addContact}) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllContacts()
  }, [])
  
  

  return (
    <>
      <h1>Contact Me</h1>
      { adding ?
          <>
            <ContactForm addContact={addContact} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>+</Button>
      }
      <ContactList contacts={contacts} />
    </>
  )
}

const ConnectedContact = (props) => (
  <ContactConsumer>
    { value => <Contacts {...props} {...value} />}
  </ContactConsumer>
)

export default ConnectedContact;
