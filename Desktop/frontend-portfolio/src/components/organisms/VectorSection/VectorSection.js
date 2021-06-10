import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import PortfolioImage from '../../atoms/PortfolioImage/PortfolioImage';
import {GrInstagram} from 'react-icons/gr'
import {FaPaintBrush} from 'react-icons/fa'

import Image1 from '../../../assets/images/Portret1.png';
import Image2 from '../../../assets/images/Portret2.png';
import Image3 from '../../../assets/images/Portret3.png';
import Image4 from '../../../assets/images/Logo1.png';
import Image5 from '../../../assets/images/Portret4.png';
import Image6 from '../../../assets/images/Portret5.png';
import NavItem from '../../atoms/NavItem/NavItem';

const StyledWrapper = styled.div` 
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   padding:350px 0;
   text-align:center;
   position: relative;
   overflow:hidden;
   @media (max-width:768px) {
      padding:50px 0 150px;
   }
`
const StyledHeading = styled(Heading)`
   font-size: ${({theme})=> theme.fontSize.h};
   font-weight: ${({theme})=> theme.fontWeight.thin};
   @media (max-width:768px) {
      font-size: ${({theme})=> theme.fontSize.l};
   }
`
const StyledGrInstagram = styled(GrInstagram)`
   margin-right:5px;
   font-size:30px;
   color:white;
`
const StyledFaPaintBrush = styled(FaPaintBrush)`
   font-size:30px;
   animation: circle 5s linear infinite;

   @keyframes circle {
       0%{
           transform:rotate(0)
       }
       100% {
           transform:rotate(360deg);
       }
   }
`
const StyledPhotoWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-top:30px;
    justify-content: center;
    flex-wrap:wrap;
`
const StyledDiv = styled.div`
         position:absolute;
         display:flex;
         justify-content:center;
         font-weight: 600;
         color:white;
         align-items:center;
         text-align:center;
         width:220px;
         height:220px;
         left:72%;
         top:8%;
         background-color:black;
         border-radius:50%;
         z-index:2;
 

         &:first-child {
         top:19%;
         left:64%;
         z-index:1;
         width:320px;
         height:320px;
         background-color:#33a2a9;
         transition: background-color .4s;
            &:hover {
            background-color:#54d8e0;
            }
            @media (max-width:768px) {
            display:flex;
            width:300px;
            padding:15px;
            height:60px;
            border-radius:0;
          }
     
         }

         @media (max-width:768px) {
            position:initial;
            display:none;
         }
      
`
const StyledPortfolioImage = styled(PortfolioImage)`
   position: absolute;
   transition: transform .4s;

    &:nth-of-type(1) {
         top:10%;
         left:7%;
         @media (max-width:768px) {
           height:250px;
         }
      }
    &:nth-of-type(2) {
         top:13%;
         left:34%;
         @media (max-width:768px) {
           display:none;
         }
      }
    &:nth-of-type(3) {
         top:60%;
         left:60%;
         @media (max-width:768px) {
           height:200px;
         }
      }
    &:nth-of-type(4) {
         top:48%;
         left:81%;
         @media (max-width:768px) {
           display:none;
         }
      }
    &:nth-of-type(5) {
         top:68%;
         left:20%;
      }
    &:nth-of-type(6) {
         top:5%;
         left:50%;
      }

    @media(max-width: 768px) {
        position:initial;
        width:320px;
        margin:5px 20px;
    }
`

const VectorSection = () => {

   const [offsetY, setOffsetY] = useState(0);
   const handleScroll = () => setOffsetY(window.pageYOffset)

   const [opacityLevel,setOpacityLevel] = useState(1)

   const opacityLevelChanger = () =>{
     setOpacityLevel( ( window.scrollY / 3000) -.6)
   }
   window.addEventListener('scroll',opacityLevelChanger)

 

   useEffect(() => {
      if(window.innerWidth > 768) {
          window.addEventListener('scroll',handleScroll);
      }
      return () => window.removeEventListener('scroll',handleScroll)
   }, []);



    return  <StyledWrapper style={{ backgroundColor:`hsla(196,53%,67%,${opacityLevel})`}}> 
            <Paragraph children="Graphics" />
            <StyledHeading  >
               Vector Arts
            </StyledHeading>
            <Paragraph>Sometimes I create vector arts just for fun  I know that it may< br/>
            not be a work of art, but I've seen worse  :) </Paragraph>

           <StyledPhotoWrapper >
              <StyledPortfolioImage imgWidth="20vw" imgHeight="350px" imgUrl={Image1} style={{transform: `translateY(${offsetY * .09}px)`}}/>
              <StyledPortfolioImage imgWidth="7vw" imgHeight="250px" imgUrl={Image2} style={{transform: `translateY(${offsetY * .01}px)`}}/>
              <StyledPortfolioImage imgWidth="22vw" imgHeight="300px" imgUrl={Image3} />
              <StyledPortfolioImage imgWidth="11vw" imgHeight="200px" imgUrl={Image4} style={{transform: `translateY(${offsetY * .07}px)`}}/>
              <StyledPortfolioImage imgWidth="18vw" imgHeight="200px" imgUrl={Image5} style={{transform: `translateY(${offsetY * .02}px)`}}/>
              <StyledPortfolioImage imgWidth="10vw" imgHeight="300px" imgUrl={Image6} tyle={{transform: `translateY(${offsetY * .02}px)`}}/>
           </StyledPhotoWrapper>
            <StyledDiv><StyledFaPaintBrush/></StyledDiv>
            <NavItem link='https://www.youtube.com/'>
               <StyledDiv>
                   <StyledGrInstagram/>INSTAGRAM
                </StyledDiv>
            </NavItem>
        </StyledWrapper>
     ;
}
 
export default VectorSection;