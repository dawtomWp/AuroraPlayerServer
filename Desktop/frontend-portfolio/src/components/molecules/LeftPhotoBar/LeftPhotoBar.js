import React,{useState} from 'react';
import styled,{css} from 'styled-components'
import {GiSoundOn, GiSoundOff} from 'react-icons/gi';
import Sound1 from '../../../assets/sounds/bensound-dreams.mp3';
import ReactHowler from 'react-howler'

const StyledGiSoundOff = styled(GiSoundOff)`
  color: ${({theme})=> theme.primaryBgc};
  font-size:54px;
  bottom:2%;
  left:25px;
  cursor:pointer;
  align-self: center;
  z-index:102;
  @media(max-width:768px) {
    align-self:flex-start;
  }
`
const StyledGiSoundOn = styled(GiSoundOn)`
  color: ${({theme})=> theme.primaryBgc};
  font-size:54px;
  align-self: center;
  bottom:2%;
  left:25px;
  cursor:pointer;
  z-index:102;
  @media(max-width:768px) {
    align-self:flex-start;
  }
`

const StyledWrapper = styled.div`
  position:absolute;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  width:110px;
  top:24%;
  background-color: ${({theme})=> theme.secondaryBgc};
  height:460px;
  z-index:105;

  ${({mobileView}) => mobileView && css`
    position: initial;
    width:87%;
    margin: 40px 0;
  `}


`
const StyledShape = styled.div`
  width:30px;
  height:30px;
  align-self: flex-end;
  float:right;
  margin:10px;
  background-color: ${({theme})=> theme.primaryBgc};
  border-radius:50px;
`


const LeftPhotoBar = ({mobileView}) => {

   const [musicPlay,setPlayStatus] = useState(true)

   const handleMusicToggle = () => {
     setPlayStatus(!musicPlay)
    }

   const musicStatus = musicPlay ? 
        <StyledGiSoundOn onClick={handleMusicToggle}/> 
        : 
        <StyledGiSoundOff onClick={handleMusicToggle}/>;

    return ( 
        <StyledWrapper mobileView={mobileView}>
            <StyledShape/>

            <ReactHowler
               src={Sound1}
               playing={musicPlay}
               loop={true}
            />

           {musicStatus}


        </StyledWrapper>
     );
}
 
export default LeftPhotoBar;