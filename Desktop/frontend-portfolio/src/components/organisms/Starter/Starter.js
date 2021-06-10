import React from 'react';
import styled from 'styled-components';
import LineSvg from '../../atoms/LineSvg/LineSvg';
import BannerText from '../../molecules/BannerText/BannerText';

const StyledWrapper = styled.header`
   position: relative;
   overflow-x:hidden;
   min-height:135vh;
   background-color: ${({theme})=> theme.primaryBgc};
`
const StyledPathWrapper = styled.div`
  position: absolute;
  top: 116px;
  height:719px;
  left:500px;
  width:931px;
  transform:rotate(-16deg);

`

const Starter = () => {
    return ( 
        <StyledWrapper>
         <StyledPathWrapper>
             <LineSvg/>
          </StyledPathWrapper>

           <BannerText/>

        </StyledWrapper>
     );
}
 
export default Starter;