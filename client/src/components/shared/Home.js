import { Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col>
          <h1 class="text-center" style={{ color: "#260B01", fontSize: '80px'}}>Stephanie Medlin</h1>
        </Col> 
      </Row>
      <Row>
        <Col>
          <div class="text-center">
          <Image src='https://bikepackingwander.files.wordpress.com/2021/10/70afe285-714e-4577-8bf3-a08b1258e364.jpeg?w=768' alt='steph' roundedCircle width="400px" />
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}


export default Home;