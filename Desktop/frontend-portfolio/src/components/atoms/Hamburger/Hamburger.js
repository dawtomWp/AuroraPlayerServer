import styled,{css} from 'styled-components';
import {AiOutlineMenu} from 'react-icons/ai'


const StyledWrapper = styled.div`
  display:flex;
   justify-content: center;
   align-items:center;
   width:50px;
   height:50px;
   background-color:black;
   position:fixed;
   right:35px;
   top:3%;
   z-index:999;
   transition: all 1s;

`

const StyledHamburger = styled(AiOutlineMenu)`
  font-size:30px;
  position: fixed;
  padding: 6px;
  background-color: ${({theme})=> theme.primaryBgc};
  border-radius:50px;
  transition: transform .4s;


  ${({menuActive})=> menuActive && css`
  transform:rotate(90deg);
  `}


`
const Hamburger = ({onClick,menuActive}) => (

    <StyledWrapper onClick={onClick} >
        <StyledHamburger menuActive={menuActive}/>
    </StyledWrapper>
)

 
export default Hamburger;




