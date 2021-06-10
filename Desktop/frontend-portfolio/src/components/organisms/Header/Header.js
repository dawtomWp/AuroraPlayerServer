import React,{useState} from 'react';
import styled from 'styled-components';
import LineSvg from '../../atoms/LineSvg/LineSvg';
import BannerText from '../../molecules/BannerText/BannerText';
import TopMenu from '../../molecules/TopMenu/TopMenu';
import SidebarMenu from '../../molecules/SidebarMenu/SidebarMenu';
import LeftLogoBar from '../../molecules/LeftLogoBar/LeftLogoBar';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import LeftPhotoBar from '../../molecules/LeftPhotoBar/LeftPhotoBar';


const StyledWrapper = styled.header`
   position: relative;
   overflow-x:hidden;
 
 
`
const StyledHeaderContent = styled.div`
    background-color: ${({theme})=> theme.primaryBgc};
    min-height:135vh;
`
const StyledPathWrapper = styled.div`
  position: absolute;
  top: 116px;
  height:719px;
  left:500px;
  width:931px;
  transform:rotate(-16deg);

`
const CornerQuoteParagraph = styled(Paragraph)`
  text-transform: uppercase;
  position: fixed;
  bottom: 5%;
  right: 2%;
  text-align: right;
  color: ${({theme}) => theme.grey100};
  border-left: 2px solid black;
  padding-left:10px;
`


const Header = () => {

  const [opacityLevel,setOpacityLevel] = useState(1)

  const opacityLevelChanger = () =>{
    setOpacityLevel( ( 1 -window.scrollY / 1000))
  }
  window.addEventListener('scroll',opacityLevelChanger)


    return (
        <StyledWrapper >
            <TopMenu />
            <LeftLogoBar/>
            <LeftPhotoBar/>
            <CornerQuoteParagraph>All significant battles <br/># happen inside us</CornerQuoteParagraph>
   
         <StyledHeaderContent style={{opacity:opacityLevel}}>
        <StyledPathWrapper>
             <LineSvg/>
        </StyledPathWrapper>
        <SidebarMenu/>
        <BannerText/>
      </StyledHeaderContent>
  </StyledWrapper>
      );
}
 
export default Header;