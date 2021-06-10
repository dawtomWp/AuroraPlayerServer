import React from 'react';
import styled from 'styled-components'
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {FaArrowAltCircleRight} from 'react-icons/fa'

const StyledWrapper = styled.div`
position:fixed;
display: grid;
grid-template-columns:2fr 2fr;
top:50%;
left:50%;
border-radius: 10px;
transform:translate(-50%,-50%);
min-height:78vh;
width:73%;
background-color:white;
box-shadow: 0px 0px 15px  1px black;
z-index: 999;

@media (max-width:1024px) and (orientation:portrait) {
   grid-template-columns:1fr;
   grid-template-rows: 2fr 2fr;

}
@media(max-width:768px) {
   width:100%;
   min-height:100vh;
   border-radius:0px;
}
`
const StyledParagraph = styled(Paragraph)`
   @media(max-width:1024px) {
      display:none;
   }
`
const StyledDescWrapper = styled.div`
   @media(max-width:1024px) {
      display:none;
   }
`
const StyledInnerWrapperLeft = styled.div`
  display:grid;
  padding:20px;
  grid-template-rows:1fr 2fr 3fr 1fr;
  @media(max-width:768px) {
   grid-template-rows:1fr 2fr 1fr 1fr;
   }

`
const ScreenShadow = styled.div`
  width:100vw;
  position: fixed;
  top:0;
  height:100vh;
  z-index:1000;
  background-color:rgba(0,0,0, .75);

`
const StyledInnerWrapperRight = styled.div`
   border-radius:0 10px 10px 0;
   @media(max-width:1024px) {
      border-radius:0;
   }
   `
const StyledButtons = styled.div`
   display:flex;
   justify-content: space-between;

`
const StyledHeading = styled(Heading)`
   @media(max-width:768px) {
   font-size:3rem;
}
`
const StyledArrow = styled(FaArrowAltCircleRight)`
  font-size:5rem;
  color: ${({theme})=> theme.secondaryBgc};
  transition: transform .5s;
  &:hover {
     transform:scale(0.8);
  }
`

const ProjectModal = ({title,desc,longDesc,tools,tasks, onClickBtn,test,live}) => {
    return ( 
       <ScreenShadow>
        <StyledWrapper>
           <StyledInnerWrapperLeft>
              <div>
              <StyledHeading regularBigger>{title}</StyledHeading>
               <StyledParagraph smallParagraph>{desc}</StyledParagraph>
              </div>
              <StyledDescWrapper>
               <Paragraph strongParagraph>{title}</Paragraph>
               <Paragraph>{longDesc}</Paragraph>
              </StyledDescWrapper>

               <div>
               <Paragraph strongParagraph>My tasks:</Paragraph>
               <Paragraph>{tasks}</Paragraph>
               </div>

          
               <Paragraph>{tools}</Paragraph>
          


    
              <StyledButtons>
               <Button onClick={onClickBtn}>Close</Button>
               
              <a rel="noreferrer"target="_blank"href={live}><StyledArrow/></a>
               </StyledButtons>
           </StyledInnerWrapperLeft>
            <StyledInnerWrapperRight style={{
                background:`url( ${test})`,
                backgroundSize:'cover',
                backgroundRepeat: "no-repeat"
              }}>

            </StyledInnerWrapperRight>
        </StyledWrapper>
        </ScreenShadow>
     );
}
 
export default ProjectModal;