import { Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Title, ParaHome, ContainerBox, Experience, Button, ImageText, HeaderTop } from '../../styles/sharedStyles';
// import bike from '../../images/bike.jpeg';
const Home = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col style={{display: "flex", alignItems: "center"}}>
          <ul style={{listStyle: "none"}}>
            <li>
          <h2 >Hi, I'm Stephanie. I'm an aspiring web developer with a background in marketing and fundraising. Let's get to know eachother!</h2>
          </li>
          <li>
          <Button style={{display: "inline-block", width: "130px", marginRight: "18px"}}><a href="/portfolio" style={{textDecoration: "none", color: "black"}}>Portfolio</a></Button>  
          <Button style={{display: "inline-block", width: "160px"}}><a href="/contacts" style={{textDecoration: "none", color: "black"}}>Contact Me</a></Button>
          </li>
          </ul>
        </Col> 
        <Col>
          <Image src="steph.jpeg" alt="steph_selfie" roundedCircle fluid style={{width: "500px", height: "500px", objectFit: "cover"}}/>
        </Col>
      </Row>
    </Container>
    </>


  )
}


export default Home;