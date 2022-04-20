import styled, { keyframes } from 'styled-components';
import { Navbar, Row } from 'react-bootstrap';

export const HeaderTop = styled.div`
  background-image: url("/bike.jpeg");
  min-height: 600px;
  height: 600px;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`
export const ImageText = styled.div`
  text-align: center;
  position: flex;
  margin: 0 auto;
  color: white;  
`

export const h1 = styled.h1`
  font-size: 64px;
`


export const Title = styled.h1`
    font-size: 72px;
    font-family: 'Sacramento', cursive;
    text-center: center;
  `
  
  export const SubTitle = styled.h2`
    font-size: 22px;
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
      background-color: #ffba29;
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

  export const PortfolioRow = styled(Row)`
    justify-content: center;
    text-align: center;
    border: solid;
    width: 400px;
    margin: 0 auto;
    padding: 5px;
    `

  export const ProjectRow = styled(Row)`
    margin: 20px 10px 55px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  export const CarouselContainer = styled.div`
      margin-top: 20px;
  `

  export const PortfolioH1 = styled.h1`
      font-family: "Montserrat", san-serif;
  `
