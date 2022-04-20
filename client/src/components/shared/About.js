import { Image } from 'react-bootstrap';
import { Container, Row, Col, Button} from 'react-bootstrap';


const About = () => {
  return (
    <>
    <Container>
      <Row md={2} className="container-fluid h-20">
        <Col>
        <div>
          <Image src='https://bikepackingwander.files.wordpress.com/2021/10/947aa2df-c2d8-4d1c-b2df-bbcef30489c0_1_105_c.jpeg' alt='steph pic 2' style={{width: "400px", height: "400px", objectFit: "cover"}} roundedCircle fluid/>
          </div>
        </Col>
        <Col>
          <ul style={{listStyle: "none"}}>
            <li>
              <p>Hi, I'm Stephanie! Raised as a Texas gal in the suburbs of Houston, I came to Salt Lake City with my husband Zach
                eager to get outside in a taller landscape. I have a masters degree in Sport Management with a background in 
                managing teams and events, marketing, fundraising, and planning. Thanks to DevPoint Labs, I have gained knowledge
                and skill around Web Development and hope to take my creativity, ability to work with others, and managing tasks to a new
                realm in developing responsive, user-centered websites.  </p>
            </li>
            <li>
              <Button variant="info" href="/contacts">Let's get in touch!</Button>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default About;