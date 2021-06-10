import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
   display:flex;
   position: relative;
   flex-direction: column;
   justify-content: space-between;
   padding:40px 60px;
   height:600px;
   cursor:pointer;
   transition: all .6s;
   background: rgba(241, 255, 86, 1);
   &:hover {
    transform:scale(0.8);
    background:${({theme})=> theme.alternativeBgc};
  }
   @media (max-width:768px) {
        padding:20px 5px;
        height:300px;
    }
   &:nth-child(3) {
     margin-left:120px;
     @media (max-width:1276px) {
       margin-left:0;
     } 
   }
   &:nth-child(2) {
     margin-right:120px;
     @media (max-width:1276px) {
       margin-right:0;
     } 
   }
   
`

const StyledInnerWrapper = styled.div`
   display: flex;

`

const ProjectCard = ({title,desc,year,onClick}) => {
    return ( 
       <StyledWrapper onClick={onClick}>
            <Paragraph smallParagraph>{desc}</Paragraph>
           <StyledInnerWrapper>
             <Heading regularBigger>{title}</Heading>
             <Paragraph smallParagraph >{year}</Paragraph>
            </StyledInnerWrapper>


       </StyledWrapper>

     );
}
 
export default ProjectCard;