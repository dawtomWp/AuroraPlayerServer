import React, {useState} from 'react';
import styled  from 'styled-components'
import Heading from '../../atoms/Heading/Heading';
import LineSvg from '../../atoms/LineSvg/LineSvg';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {FaArrowAltCircleRight} from 'react-icons/fa'


const StyledWrapper = styled.div`
   display:flex;
   flex-direction: column;
   background-color:${({theme})=> theme.primaryBgc};
   padding: 220px 140px 150px;
   overflow:hidden;
   position:relative;   


   @media(max-width:768px) {
       padding:120px 20px
   }
`
const StyledWrapperLineSvg = styled.div`
   position:absolute;
   transform:rotate(90deg);
   top: 216px;
  height:1319px;
  left:800px;
  width:1431px;
  @media(max-width:768px) {
       left:-210px;
       top:0;
   }
`
const StyledArrow = styled(FaArrowAltCircleRight)`
   transform:rotate(-45deg);
   transition: transform .4s;
        &:hover {
            transform:rotate(0deg) scale(.6);         
        }
`
const StyledHeading = styled(Heading)`
    font-size: 10vw;
     font-weight: ${({theme, mainHeader}) => mainHeader ? theme.fontWeight.bold : theme.fontWeight.thin};
     border-bottom: 5px solid transparent;
     transition: border-bottom .5s;
     

    &:last-of-type {
        cursor:pointer;
        font-size: 7vw;
        font-weight: ${({theme, mainHeader}) => mainHeader ? theme.fontWeight.bold : theme.fontWeight.regular};
        &:hover {
            border-bottom: 5px solid black;

            ${StyledArrow} {
                transform:rotate(0deg) scale(.6);  
             }
        }
    }
`
const StyledParagraph = styled(Paragraph)`
    font-size:2vw;
    font-weight: 100;
`


const ContactSection = () => {

    const [spellTextPosition,setSpellTextPosition] = useState('0px')

    const changeTextPosition = () =>{
      setSpellTextPosition( ( window.scrollY / 5))
    }
    window.addEventListener('scroll',changeTextPosition)

    // const opacityLevelChanger = () =>{
    //     setOpacityLevel( ( window.scrollY / 2000)-1.8)
    //   }
    //   window.addEventListener('scroll',opacityLevelChanger)






    return ( 
        <StyledWrapper >

            <StyledWrapperLineSvg>
              <LineSvg/>
            </StyledWrapperLineSvg>
             <StyledParagraph style={{transform: `translateX(${spellTextPosition}px) `}} >Prepare a spell</StyledParagraph>
            <StyledHeading>Contact with <br/> my world</StyledHeading>
            <StyledHeading>dawtom97@gmail.com <StyledArrow/></StyledHeading>
        </StyledWrapper>
     );
}
 
export default ContactSection;