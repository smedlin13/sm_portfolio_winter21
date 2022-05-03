import { Image } from 'react-bootstrap';
import { Container, Row, Col, Button, Card, CardGroup, Carousel, ListGroup, Tabs, Tab} from 'react-bootstrap';
import { PortfolioRow, PortfolioH1, PortfolioH2, PortfolioH4,  ProjectRow, CarouselContainer, PortfolioTabs, ProjImage, PortfolioH3, PCard} from '../../styles/sharedStyles.js';
import Hustle from '../../images/Hustle.png';
import SYSC from '../../images/SYSC.png';
import TIM from '../../images/TIM.png';
import Sweat from '../../images/Sweat.png';
import GameofLife from '../../images/GameofLife.png';

const Portfolio = () => {
  return (
    <>
    <PortfolioTabs defaultActiveKey="projects" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="projects" title="Projects">     
          <PortfolioRow style={{textAlign: "center", marginTop: "40px"}}> 
            <PortfolioH1>Projects</PortfolioH1>
          </PortfolioRow>
            <ProjectRow md={2} >
              <Col>
              <a href="https://game-of-life-winter21.herokuapp.com/" target="_blank" >
                <ProjImage src={GameofLife} alt='proj 1' thumbnail/>
              </a>
              </Col>

              <Col>
              <PortfolioH2>Game of Life App</PortfolioH2>
              <PortfolioH3>Project involved using React, Javascript, Ruby, CSS, HTML. I was on a team of 4 to 
                complete this site as part of our final project with DevPoint Labs.
              </PortfolioH3>
              <PortfolioH4>VS Code - ReactJS - Ruby - Styled Components - React Materialize </PortfolioH4>
              </Col>
            </ProjectRow>

            <ProjectRow md={2} >
              <Col>
              <a href="/" target="_blank" >
                <ProjImage src={Sweat} alt='proj 1' thumbnail/>
              </a>
              </Col>

              <Col>
              <PortfolioH2>Sweat App</PortfolioH2>
              <PortfolioH3>I built this app for gym rats to have a place to save their workouts so they could return back to them at any time. 
                I built this app using React.JS, react-materialize to style it, and FilePond to upload images.
              </PortfolioH3>
              <PortfolioH4>VS Code - ReactJS - Javascript - Styled Components - React Bootstrap </PortfolioH4>
              </Col>
          </ProjectRow>
      </Tab>
      
      <Tab eventKey="content" title="Content">
        <PortfolioRow style={{textAlign: "center", marginTop: "40px"}}> 
          <PortfolioH1>Content Creation</PortfolioH1>
        </PortfolioRow>
        <CardGroup style={{marginTop: "20px"}} class="container">
          <Row >
            <Col>
              <PCard>
                <PCard.Img variant="top" src={Hustle}  style={{height: "410px", width: "auto", display: "inline-flex", maxWidth: "100%"}}/>
                <Card.Body >
                  <Card.Title>WAS Hustle Event</Card.Title>
                  <Card.Text>
                    An activity-based challenge that I helped create in 
                    2020 during COVID-19. I designed the branding and created 
                    the marketing campaign while also building the website landing 
                    page via the platform Classy. 
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small><a 
                    href="https://give.wasatchadaptivesports.org/event/was-hustle/e339319" 
                    target="_blank" 
                    style={{textDecoration: "none", color: "#179bcc"}}>
                    Visit the event site.
                  </a></small>
                </Card.Footer>
              </PCard>
            </Col>
            <Col>
              <PCard>
                <Card.Img variant="top" src={SYSC}  style={{height: "410px", width: "auto", display: "flex", maxWidth: "100%"}}/>
                <Card.Body >
                  <Card.Title>The Virtual Steve Young Ski Classic</Card.Title>
                  <Card.Text>
                    I created the stills for the Steve Young Ski Classic social media and displays to market for our virtual 
                    fundraising event as well as built out the website with all of the information about the event and where donations were accepted.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small><a 
                    href="https://give.wasatchadaptivesports.org/campaign/2021-virtual-hggc-steve-young-ski-classic/c321677" 
                    target="_blank" 
                    style={{textDecoration: "none", color: "#179bcc"}}>
                    Visit the Virtual Event site.
                  </a></small>
                </Card.Footer>
              </PCard>
            </Col>
            <Col>
              <PCard>
                <Card.Img variant="top" src={TIM}style={{height: "410px", width: "auto", display: "flex", maxWidth: "100%"}}/>
                <Card.Body>
                  <Card.Title>New Website and Tagline</Card.Title>
                  <Card.Text>
                    Through a series of meetings with community members and staff members, I helped develop Wasatch Adaptive Sports' first tag line
                    and headed the first redesign of their website striving to make it accessible and image-heavy. 
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small><a 
                    href="https://wasatchadaptivesports.org" 
                    target="_blank" 
                    style={{textDecoration: "none", color: "#179bcc"}}>
                    Visit the new WAS site.
                  </a></small>
                </Card.Footer>
              </PCard>
            </Col>
          </Row>
        </CardGroup>
      </Tab>
  
      <Tab eventKey="video" title="Video">
        <PortfolioRow style={{textAlign: "center", marginTop: "40px"}}> 
          <PortfolioH1>Video Production</PortfolioH1>
        </PortfolioRow>

        <Carousel variant="dark" indicators={false} style={{marginTop: "20px"}}>
          <Carousel.Item style={{textAlign: "center"}}>
          <iframe width="1120" height="630" src="https://www.youtube.com/embed/Q3daFIT11gs" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          <CarouselContainer>
          <h3>Wasatch Adaptive Sports Intro Video</h3>
            <p>Worked with videographer Shane Hillyard on the ideation, production, and editting of this introductory video.</p>
          </CarouselContainer>
          </Carousel.Item>

          <Carousel.Item style={{textAlign: "center"}}>
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/Y9Vzt1FBN_4" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <CarouselContainer>
              <h3>iPhone Thank You Video</h3>
              <p>Created and editted this short thank you video in Adobe Premiere Pro adding captions and music.</p>
            </CarouselContainer>
          </Carousel.Item>

          <Carousel.Item style={{textAlign: "center"}}>
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/Xp450PEnvnI" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <CarouselContainer>
              <h3>Student Highlight: Wyatt Shipp</h3>
              <p>Worked with videographer Shane Hillyard to create, edit, and produce a short bio of one of the students at Wasatch Adaptive Sports.</p>
            </CarouselContainer>
          </Carousel.Item>
        </Carousel>
      </Tab>

      <Tab eventKey="publications" title="Publications">
        <PortfolioRow style={{textAlign: "center", marginTop: "40px"}}>
          <PortfolioH1>Publications</PortfolioH1>
        </PortfolioRow>
        <ListGroup variant="flush" style={{marginTop: "20px"}} >
          <ListGroup.Item style={{textAlign: "center"}}><a href="https://blog.gregorypacks.com/2022/03/17/expanding-possibilities-in-the-mountains-with-wasatch-adaptive-sports/" target="_blank">
            Gregory Packs: Expanding Possibiities in the Mountains with Wasatch Adaptive Sports</a></ListGroup.Item>
        </ListGroup>
      </Tab>
    
    </PortfolioTabs>

    
      

      

      
      
      
    
    <div style={{textAlign: "center", marginTop: "40px"}}>
        <Button variant="info" href="https://bikepackingwander.files.wordpress.com/2022/04/stephanie-medlin-resume-2022.pdf" >Check Out My Resume</Button>
    </div>


    </>
  )
}

export default Portfolio;