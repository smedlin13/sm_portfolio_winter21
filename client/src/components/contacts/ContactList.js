import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';



const ContactList = ({ contacts }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
    <ListGroup> 
      { contacts.map ( c => 
        <>
        <Link to={`/contacts/${c.id}`} key={c.id}>
          <ListGroup.Item>{c.f_name} {c.l_name}</ListGroup.Item>.
        </Link>
        </>
        )}
    </ListGroup>
    </>
  )
}

export default ContactList;