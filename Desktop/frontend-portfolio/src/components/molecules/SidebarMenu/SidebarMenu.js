import React from 'react';
import styled, {css} from 'styled-components';
import NavItem from '../../atoms/NavItem/NavItem'
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledUl = styled.ul`
   position:absolute;
   text-align:right;
   right:0;
   top:18%;

   ${({mobileView})=> mobileView && css`
       display:flex;
       justify-content:center;
       flex-wrap:wrap;
       position:initial;
       text-align: left;
       width:100%;
       & > li {
           width:45%;
           @media (max-width:420px) {
           padding:10px;
           }
           @media (orientation:landscape) {
           padding:10px;
           }
           & > a {
              color:white;
           }
       }
  
   `}

 
`
const StyledNavItem = styled(NavItem) `

`
const StyledParagraph = styled(Paragraph) `
      color: grey;
      text-transform:uppercase;
      margin-top: 3px;
      font-size:15px;
      transition: all .5s;

      `    
       
  


const SidebarMenu = ({mobileView}) => {

    return ( 
        <StyledUl mobileView={mobileView}>
        <StyledNavItem  link="https://github.com/dawtomWp">
            --GITHUB
            <StyledParagraph  secondaryStyle>
                A few things
            </StyledParagraph>
        </StyledNavItem>
        <StyledNavItem  link="https://www.instagram.com/tomczkie/" >
            --INSTAGRAM
            <StyledParagraph  secondaryStyle>
              social activities
            </StyledParagraph>
        </StyledNavItem>
        <StyledNavItem  link="https://www.facebook.com/dawid.tomczyk.146/" >
            --FACEBOOK
            <StyledParagraph  secondaryStyle>
              social activities
            </StyledParagraph>
        </StyledNavItem>
        <StyledNavItem  to="/note" link="/n" >
            --PLACEHOLDER
            <StyledParagraph  secondaryStyle>
              nothing special
            </StyledParagraph>
        </StyledNavItem>
        <StyledNavItem  link="https://www.instagram.com/davdev15/" >
            --ARTS
            <StyledParagraph  secondaryStyle>
              Design concepts
            </StyledParagraph>
        </StyledNavItem>
        <StyledNavItem  to="/note" link="/n" >
            --PLACEHOLDER
           <StyledParagraph  secondaryStyle>
              nothing special
            </StyledParagraph>
        </StyledNavItem>

  
       

    </StyledUl>
     );
}
 
export default SidebarMenu;