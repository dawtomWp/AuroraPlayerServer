import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';


const StyledWrapper = styled.div`
   display: flex;
   flex-direction:column;
   align-items:center;
   justify-content:space-around;
   min-height:380px;
   width:450px;
   background: ${({theme})=> theme.primaryBg};
   backdrop-filter: blur(5px);
   border-radius:30px;
   opacity: 0; //changed in motion div
   @media (max-width:768px) {
    width:320px;
   }
`
const StyledInputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   & > input {
       margin-top:20px;
   }
`

const LoginForm = ({playerNameValue,playerEmail,setName, setEmail, submitForm}) => {
    

    return ( 
        <StyledWrapper 
                 as={motion.div} 
                 animate={{opacity:1}} 
                 transition={{ 
                     delay: 1, 
                     duration:2
                }}            
        >
            <Heading children="Choose your name"/>
            <StyledInputWrapper>
                   <Input 
                      placeholder="Player Name"
                      type="text"
                      value={playerNameValue}
                      onChange={setName}
                   />
                    <Input 
                      placeholder="Email"
                      type="email"
                      value={playerEmail}
                      onChange={setEmail}
                   />

            </StyledInputWrapper>
            <Button children="Start" onClick={submitForm}/>
      
        </StyledWrapper>
     );
}
 
export default LoginForm;