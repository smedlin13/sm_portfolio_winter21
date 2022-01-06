import { Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <>
    <Container class="container-fluid d-flex flex-column">
      <Row>
    <h1>Check Out My Projects</h1>
      </Row>
      <Row md={4} >
        <Col>
        <a href="#" >
          <Image src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' alt='proj 1' thumbnail/>
        </a>
        </Col>

        <Col>
        <a href="#">
        <Image src='https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='proj 2' thumbnail/>
        </a>
        </Col>

        <Col>
        <a href="#">
        <Image src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80' alt='proj 3' thumbnail/>
        </a>
        </Col>

        <Col>
        <a href="#">
        <Image src='https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='proj 4' thumbnail/>
        </a>
        </Col>
      </Row>
      <Row md={4}>
        <Col>
        <a href="#">
        <Image src='https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='proj 2' thumbnail/>
        </a>
        </Col>

        <Col>
        <a href="#">
        <Image src='https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='proj 2' thumbnail/>
        </a>
        </Col>

        <Col>
        <a href="#">
        <Image src='https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='proj 2' thumbnail/>
        </a>
        </Col>

        <Col>
        <a href="#">
        <Image src='https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='proj 2' thumbnail/>
        </a>
        </Col>
      </Row>


    </Container>
    </>
  )
}

export default Portfolio;