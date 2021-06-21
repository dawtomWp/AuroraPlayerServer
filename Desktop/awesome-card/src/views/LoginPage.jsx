import React,{useState} from 'react';
import { Redirect } from 'react-router';
import {motion} from 'framer-motion';
import styled from 'styled-components'
import LoginForm from '../components/organisms/LoginForm';
import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';


const StyledWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  min-height:100vh;

`

const LoginPage = () => {

       const [authStatus,setAuthStatus] = useState(false);
       const [errorStatus,setErrorStatus] = useState(false);
       const [playerName, setPlayerName] = useState('');
       const [playerEmail, setPlayerEmail] = useState('');


       const handleSetName = (e) => setPlayerName(e.target.value)
       const handleSetEmail = (e) => setPlayerEmail(e.target.value)

       const handleSubmit = () => {
          if(playerName.length > 4 && playerEmail.length > 4 && playerEmail.includes('@')) {
            setAuthStatus(true)
            setErrorStatus(!errorStatus)
          } else {
            setErrorStatus(true)
          }
       }

    return ( 
       <StyledWrapper >
          

              <Heading 
             
                  mainHeader 
                  children="DavCars Revolution" 
                  as={motion.div} 
                  initial={{y:-500}}
                  animate={{y:-60}}
                  transition={{delay:.7}}
              />
              <LoginForm 
                    playerNameValue={playerName}
                    playerEmail={playerEmail}
                    setName={handleSetName}
                    setEmail={handleSetEmail}
                    submitForm={handleSubmit}
              />
             {authStatus ? <Redirect to="/home" /> :  null}
             {errorStatus ? <Paragraph errorMsg children="Incorrect or to short data"/>: null}
    
       </StyledWrapper>
     
       
     );
}
 
export default LoginPage;