import React from 'react';
import styled from 'styled-components'
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top:140px;
  text-align:center;

`
const StyledParagraph = styled(Paragraph)`
  text-transform: uppercase;
  justify-self: flex-end;

  line-height: 25px;

  & > span {
      color: ${({theme})=> theme.grey100};
  }
`



const BannerText = ({children}) => {
    return ( 
        <StyledBanner>
           <Heading >_Dawid <br/> Tomczyk;</Heading>

           {children}


           <StyledParagraph>design <span>(website design and awesome vector<br/>
           graphic)</span> Apps <span>(created in JS and <br/>React)
           </span>
           and creativity
           
       
           
           </StyledParagraph>
        </StyledBanner>
     );
}
 
export default BannerText;