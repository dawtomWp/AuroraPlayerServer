import React, {useState} from 'react';
import styled from 'styled-components';
import Hamburger from '../../atoms/Hamburger/Hamburger';
import LineSvg from '../../atoms/LineSvg/LineSvg';
import BannerText from '../../molecules/BannerText/BannerText';
import TopMenu from '../../molecules/TopMenu/TopMenu';
import SidebarMenu from '../../molecules/SidebarMenu/SidebarMenu';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import LeftPhotoBar from '../../molecules/LeftPhotoBar/LeftPhotoBar';
import { NavLink } from 'react-router-dom';
import Heading from '../../atoms/Heading/Heading';
import {routes} from '../../../routes/index';




const StyledWrapper = styled.header`
   display:flex;
   flex-direction:column;
   position: relative;
   overflow:hidden;
   min-height:100vh;
   background-color: ${({theme})=> theme.primaryBgc};
`
const StyledPathWrapper = styled.div`
  position: absolute;
  top: 116px;
  height:719px;
  left:-185px;
  width:931px;
  transform:rotate(-16deg);
  z-index:0;

`
const CornerQuoteParagraph = styled(Paragraph)`
  text-transform: uppercase;
  position: fixed;
  top: 6%;
  left: 2%;
  text-align: left;
  color: ${({theme}) => theme.grey100};
  border-left: 2px solid black;
  padding-left:10px;
  font-size: ${({theme})=> theme.fontSize.s};
`
const StyledHeading = styled(Heading)`
    position: fixed;
    top:2%;
    left:2%;
    color:black;
    text-decoration:none;
`
const WrapperMenu = styled.div `
   position:fixed;
   display:flex;
   flex-direction:column;
   justify-content: center;
   align-items:center;
   width:100%;
   min-height:102vh;
   background-color: black;
   z-index:110;

   @media (orientation:landscape) {
     flex-direction: row;
   }


`
const StyledLeftPhotoBar = styled(LeftPhotoBar)`
   position:initial;
`


const MobileHeader = () => {

    const [menuIsVisible, setMenuVisbility] = useState(false)

    return (
        <StyledWrapper >
        {menuIsVisible ? 
            <WrapperMenu
            >
              <TopMenu mobileView
              
             
             
             />
              <SidebarMenu mobileView
              
          />
            </WrapperMenu>
            :
            null
        }
             <BannerText>

             <StyledLeftPhotoBar mobileView />
             </BannerText>
        <StyledHeading as={NavLink} to={routes.home} regular children="Home"/>
    
        <CornerQuoteParagraph>All significant battles <br/># happen inside us</CornerQuoteParagraph>
         <Hamburger menuActive={menuIsVisible} onClick={()=> setMenuVisbility(prevState => !prevState)}/> 
        <StyledPathWrapper >
             <LineSvg/>
        </StyledPathWrapper>

   

  </StyledWrapper>
      );
}
 
export default MobileHeader;