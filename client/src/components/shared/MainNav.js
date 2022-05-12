import { Link } from 'react-router-dom';
import { Navbar, Offcanvas, Container, Nav } from 'react-bootstrap';
import logo from '../..'

const MainNav = ({}) => {
  return (
    <>
          <Navbar style={{backgroundColor: "#2D0363"}} expand={false}>
            <Container style={{padding:"0px !important"}}>
              <Navbar.Brand href="/"><img src="https://i0.wp.com/bikepackingwander.files.wordpress.com/2022/05/logo.png?ssl=1" style={{height: "150px", width: "150px"}}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                style={{color: "#fff"}}
              >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    {/* <Nav.Link href="/skills">Skills</Nav.Link> */}
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contacts">Contact Me</Nav.Link>
                    {/* <Nav.Link href="/blogs">Blog</Nav.Link> */}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>

    </>
  )
}

export default MainNav;