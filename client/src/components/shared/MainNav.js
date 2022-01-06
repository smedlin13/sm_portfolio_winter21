import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNav = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <Navbar bg="light" variant="light">
            <Container>
              <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home">
                  Home
                </Link>  
              </Nav.Link>
              <Nav.Link>
                <Link to='/about'>About
                </Link>
              </Nav.Link>
              <Nav.Link> 
                <Link to='/skills'>
                  Skills
                </Link>    
              </Nav.Link>
              <Nav.Link> 
                <Link to='/portfolio'>
                  <li>Portfolio</li>
                </Link>
              </Nav.Link> 
              <Nav.Link> 
              <Link to='/contacts'>
            <li>Contact</li>
          </Link> 
              </Nav.Link>
              <Nav.Link> 
              <Link to='/blogs'>
            <li>Blog</li>
          </Link> 
              </Nav.Link>
              </Nav>
              </Container>
              </Navbar>
        </ul>
      </nav>
    </>
  )
}

export default MainNav;