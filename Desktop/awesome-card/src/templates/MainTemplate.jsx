import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme';
import { GlobalStyle } from '../theme/GlobalStyle';
import background from '../assets/images/carGameBg.png';

const Stdiv = styled.div`

  background-image: url(${background});
  background-size:cover;
  background-repeat: no-repeat;
  min-height:100vh;
  width:100vw;

`


const MainTemplate = ({children}) => {
    return ( 
        <Stdiv>
          <GlobalStyle/>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </Stdiv>
     );
}
 
export default MainTemplate;