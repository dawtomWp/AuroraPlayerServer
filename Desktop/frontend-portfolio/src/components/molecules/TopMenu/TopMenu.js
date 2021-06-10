import React from 'react';
import styled,{css} from 'styled-components';
import {NavLink} from 'react-router-dom'

const StyledUl = styled.ul`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  justify-items: center;
  padding: 25px;
  z-index:100;

  ${({mobileView}) => mobileView && css`
         position:initial;
         justify-items:left;
         grid-template-columns: 1fr;
         grid-template-rows: repeat(4,1fr);
        
       
         & > a {
         color: ${({theme})=> theme.primaryBgc};
         font-size:30px;
         @media (max-width:420px) {
          padding:6px; 
        }
        @media (orientation:landscape) {
           padding:15px;
           }
         }
  `}

`
const StyledNavLink = styled(NavLink)`
      list-style:none;
      padding:25px;
      font-weight: ${({theme})=> theme.fontWeight.bold};
      color: black;
      text-decoration:none;
      cursor:pointer;
      &:hover {
          border-bottom: 2px solid black;
      }
      ${({mobileView}) => mobileView && css`
          
      `}
`


const TopMenu = ({mobileView}) => {
    return ( 
        <StyledUl mobileView={mobileView}>
            <StyledNavLink to="/design" children="Designography."/>
            <StyledNavLink to="/skills" children="Skills."/>
            <StyledNavLink to="/note" children="Special Projects."/>
            <StyledNavLink to="/note" children="Who is David."/>

        </StyledUl>
     );
}
 
export default TopMenu;