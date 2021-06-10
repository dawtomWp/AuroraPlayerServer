import React from 'react';
import styled from 'styled-components';


const StyledLi = styled.li `
      list-style:none;
      padding:25px;
      font-weight: ${({theme})=> theme.fontWeight.bold};
      cursor:pointer;
      transition: transform .5s;
      &:hover {
       font-weight: ${({theme})=> theme.fontWeight.bold};
       transform: scale(1.2);

   }
  & > a {
      color: black;
      text-decoration:none;
      
  }
`

const NavItem = ({link,children}) => (
    <StyledLi>
        <a href={link} rel="noreferrer" target="_blank">{children}</a>
    </StyledLi>
)

export default NavItem;