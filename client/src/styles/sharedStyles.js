import styled, { keyframes } from 'styled-components';
import { Navbar, Row, Col, Tabs, Image, Card, Container} from 'react-bootstrap';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

//applies to all
export const HeaderTop = styled.div`
  background-image: url("/bike.jpeg");
  min-height: 600px;
  height: 600px;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ADD8E6;
`
export const PageStyle = styled.body`
  background-color: #6F8FAF;
  margin: 0px;
  padding: 0px;
  @media ${device.laptop} { 
    max-width: 100%;

  }

  @media ${device.desktop} {
    max-width: 100%;
 
  }

  @media ${device.mobileL} {
    flex-basis: 33%;
    flex-wrap: nowrap;
  }

  @media ${device.mobileM} {
    flex-basis: 33%;
    flex-wrap: nowrap;
  }

  @media ${device.mobileS} {
    flex-basis: 33%;
    flex-wrap: nowrap;
  }
`
export const ImageText = styled.div`
  text-align: center;
  position: flex;
  margin: 0 auto;
  color: white;  
`

export const MainRow = styled(Row)`
  margin-left: 150px;
  flex-basis: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    flex-basis: 33%;
    margin-left: 0;
  }
`
export const MainCol = styled(Col)`
  align-items: center;
  margin-right: 20px;
  margin-bottom: 30px;

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
    font-family: 'Montserrat', serif;
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
      background-color: #F7DD72;
      color: black;
      display: block;
      margin: 5px auto;
      font-weight: 20px;
      font-family: 'Work Sans', sans-serif;
      padding: 9px 25px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease 0s;
      &:hover {
        background-color: #B8994B;
      }
    `

    //applies to Portfolio 
  export const PortfolioRow = styled(Row)`
    justify-content: center;
    text-align: center;
    display: flex;
    @media (max-width: 1520px) {
      flex-direction: column;
      flex-wrap: nowrap;
      flex-basis: 100%;
      justify-content: center;
      align-items: center;
    }
    `

  export const ProjectRow = styled(Row)`
    margin: 0px 10px 55px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    @media (max-width: 1520px) {
      flex-direction: column;
      flex-wrap: nowrap;
      flex-basis: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;


      .h1, .h2, .h3, .h4 {
        margin-right: 0px;
        padding-right: 0px;

      }
    }

  `

  export const ProjImage = styled(Image)`
    background-color: invert(72%) sepia(68%) saturate(2512%) hue-rotate(208deg) brightness(105%) contrast(101%);
    width: 550px;
    max-width: 550px;
    margin-left: 100px;
    margin-top: 50px;
    display: flex;
    @media (max-width: 1520px) {
      flex-direction: column;
      flex-wrap: wrap;
      flex-basis: 100%;
      max-width: 100%;
      align-items: left;
      justify-content: left;
    }
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
      background-color: #F7DD72; 
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

  // export const ProjectIcon = styled.img`
  //     color: #00000;
  //     height: 50px;
  //     font-size: 36px;
  //     float: right;
  //     margin-right: 100px;
  //     &:hover {
  //       background-color: #e0a130;
  //     }
  // `