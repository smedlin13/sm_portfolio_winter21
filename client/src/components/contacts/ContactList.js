import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';



const ContactList = ({ contacts }) => {
  return (
    <>
    <ListGroup> 
      { contacts.map ( c => 
        <>
        <Link to={`/contacts/${c.id}`}>
          <ListGroup.Item>{c.f_name} {c.l_name}</ListGroup.Item>.
        </Link>
        </>
        )}
    </ListGroup>
    </>
  )
}

export default ContactList;