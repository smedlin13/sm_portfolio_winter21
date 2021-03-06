import { Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Title, ParaHome, ContainerBox, Experience, Button, ImageText, HeaderTop, SubTitle, MainRow, MainCol, MainContainer } from '../../styles/sharedStyles';
// import bike from '../../images/bike.jpeg';
const Home = () => {
  return (
    <>
    <Container fluid>
      <MainRow>
        <MainCol>
          <ul style={{listStyle: "none"}}>
            <li style={{marginBottom: "30px"}}>
              <Title>Hi, I'm Stephanie. </Title>
              <SubTitle >I'm an aspiring web developer with a background in marketing and fundraising. Let's get to know eachother!</SubTitle>
            </li>
          <li>
          <Button 
            style=
              {{display: "inline-block", 
                width: "130px", 
                marginRight: "18px"}}>
              <a href="/portfolio" 
                style={
                {textDecoration: "none", 
                color: "black"}}>
              Portfolio</a>
          </Button>  

          <Button style=
            {{display: "inline-block", 
              width: "160px"}}>
            <a href="/contacts" 
              style={{textDecoration: "none", color: "black"}}>
              Contact Me</a>
          </Button>
          </li>
          </ul>
        </MainCol> 
        <MainCol>
          <Image 
            src="Steph.JPG" 
            alt="steph_selfie" 
            roundedCircle 
            fluid style={{width: "500px", height: "500px", objectFit: "cover"}}/>
        </MainCol>
      </MainRow>
    </Container>
    </>


  )
}


export default Home;