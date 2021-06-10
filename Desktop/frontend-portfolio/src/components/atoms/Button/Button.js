import React from 'react';
import styled,{css} from 'styled-components';


const StyledButton = styled.button`
 background-color:${({theme})=> theme.secondaryBgc};
 border:none;
 color: white;
 height:40px;
 font-size:22px;
 width:150px;
 text-transform: uppercase;
 border-radius:5px;
 cursor:pointer;
 transition: all .4s;

 ${({secondary})=> secondary && css`
     background-color:${({theme})=> theme.primaryBgc};
     color: ${({theme})=> theme.secondaryBgc};

 `}

 &:hover {
     background-color:${({theme})=> theme.primaryBgc};
     color: ${({theme})=> theme.secondaryBgc};
 }
 @media(max-width:768px) {
   width:120px;
   font-size:15px;
}
`

const Button = ({onClick, children,secondary}) => {
    return ( 
        <StyledButton secondary={secondary} onClick={onClick}>{children}</StyledButton>
     );
}
 
export default Button;