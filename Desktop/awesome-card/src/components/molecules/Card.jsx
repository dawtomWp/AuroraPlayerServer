import React from 'react';
import styled from 'styled-components';
import ModelPhoto from '../atoms/ModelPhoto';
import Paragraph from '../atoms/Paragraph';

const StyledWrapper = styled.div`
    width:300px;
    height:500px;
    background: ${({theme})=> theme.glass};
`
const StyledTopWrap = styled.div`
   display:flex;
   padding:25px;
   flex-direction: column;
   align-items:center;

   & > p {
       color: ${({theme})=> theme.textColor};
       align-self:flex-end;
   }
`
const StyledBottomWrap = styled.div`
    color:white;
    & > p > span {
        color: ${({theme})=> theme.textColor};
        float:right;
    }
    & > p:nth-child(5) {
        margin-top:40px;
    }

`

const Card = ({model,engine,gearbox,color,price}) => {
    return ( 
        <StyledWrapper>

            <StyledTopWrap>
               <Paragraph children="Summary"/>
               <ModelPhoto/>
            </StyledTopWrap>

            <StyledBottomWrap>
             <Paragraph>Model <span>{model}</span></Paragraph>
             <Paragraph>Engine <span>{engine}</span></Paragraph>
             <Paragraph>Gearbox <span>{gearbox}</span></Paragraph>
             <Paragraph>Color <span>{color}</span></Paragraph>
             <Paragraph>Price <span>{price}</span></Paragraph>
            </StyledBottomWrap>
    
        </StyledWrapper>
     );
}
 
export default Card;