import styled, { keyframes } from 'styled-components';
import { Navbar, Row, Tabs, Image, Card} from 'react-bootstrap';

//applies to all
export const HeaderTop = styled.div`
  background-image: url("/bike.jpeg");
  min-height: 600px;
  height: 600px;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
`
export const PageStyle = styled.body`
  background-color: #2D0363;
  margin: 0px;
  padding: 0px;
`
export const ImageText = styled.div`
  text-align: center;
  position: flex;
  margin: 0 auto;
  color: white;  
`
export const MainRow = styled(Row)`
  margin-left: 50px;
`

export const h1 = styled.h1`
  font-size: 64px;
`


export const Title = styled.h1`
    font-size: 72px;
    font-family: 'Sacramento', cursive;
    color: white;
  `

  
  export const SubTitle = styled.h2`
    font-size: 22px;
    color: white;
    font-family: 'Playfair Display', serif;
    position: flex;
  `
  
  export const ThirdTitle = styled.h3`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    position: flex;
  `
  
  export const ParaHome = styled.p`
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
  `
  
  //applies to home components
  export const ContainerBox = styled.div`
    display: grid;
    grid-template-columns: minmax(500px, 668px) minmax(500px, 668px);
    grid-template-rows: 400px 400px;
    justify-content: center;
  `
  
  export const Experience = styled.div`
    backgroundcolor: grey,
    width: 100%,
    text-align: center;
  `
  
  
  export const Button = styled.button`
      background-color: #C9a2ff;
      color: black;
      display: block;
      margin: 0 auto;
      font-weight: 20px;
      font-family: 'Work Sans', sans-serif;
      padding: 9px 25px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease 0s;
      &:hover {
        background-color: #e0a130;
      }
    `

    //applies to Portfolio 
  export const PortfolioRow = styled(Row)`
    justify-content: center;
    text-align: center;
    `

  export const ProjectRow = styled(Row)`
    margin: 0px 10px 55px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  export const ProjImage = styled(Image)`
    background-color: invert(72%) sepia(68%) saturate(2512%) hue-rotate(208deg) brightness(105%) contrast(101%);
    width: 550px;
    max-width: 550px;
    margin-left: 100px;
    margin-top: 50px;
  `
  export const CarouselContainer = styled.div`
    margin-top: 20px;
  `

  export const PortfolioH1 = styled.h1`
    font-family: "Montserrat", san-serif;
    color: white;
  `
  export const PortfolioH2 = styled.h2`
    font-family: "Sacramento", san-serif;
    color: white;
    font-size: 52px;
    margin-bottom: 30px;
    margin-right: 100px;
    text-align: right;
      
  `
  export const PortfolioH3 = styled.h3`
      background-color: #C9a2ff; 
      color: black;
      padding: 30px;
      margin-right: 100px;
      box-shadow: 5px 10px 10px #000;
      border-radius: 5px;
      font-size: 18px;
      
  `

  export const PortfolioH4 = styled.h4`
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    color: white;
    margin-top: 20px;
    margin-right: 100px;
    text-align: right;
  `

  export const PortfolioTabs = styled(Tabs)`
      color: #04D4C3 !important;
  `

  export const PCard = styled(Card)`
      max-width: 100%;
      position: relative;
      width: 400px;
  `