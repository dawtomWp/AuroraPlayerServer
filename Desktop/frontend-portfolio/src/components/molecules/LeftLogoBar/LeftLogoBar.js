import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import {routes} from '../../../routes/index';


const StyledWrapper = styled.div`
    position:fixed;
    display:flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    padding: 70px 1px;
    z-index:101;
`
const StyledHeading = styled(Heading)`
    color:black;
    text-decoration:none;
`



const LeftLogoBar = () => {
    return ( 

        <StyledWrapper>
           <StyledHeading as={NavLink} to={routes.home} leftbar="true" children="Home"/>


           


           <Heading leftbar children="Ipsum"/>
       
        </StyledWrapper>
     );
}
 
export default LeftLogoBar;