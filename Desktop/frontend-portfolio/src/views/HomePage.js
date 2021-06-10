import React, {useState, useEffect} from 'react';
import  { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme';
import {GlobalStyle} from '../theme/GlobalStyle';
import Header from '../components/organisms/Header/Header';
import MobileHeader from '../components/organisms/Header/MobileHeader'
import VectorSection from '../components/organisms/VectorSection/VectorSection';
import ContactSection from '../components/organisms/ContactSection/ContactSection';
import SelectWork from '../components/organisms/SelectWork/SelectWork';
import PortfolioBest from '../components/organisms/PortfolioBest/PortfolioBest';



const HomePage = () => {

  const [pageWidth, setPageWidth] = useState(window.innerWidth)
  const mobileBreakpoint = 768

  const HeaderComponent = pageWidth > mobileBreakpoint ? <Header style={{opacity:1 }}/>: <MobileHeader/>
   
   useEffect(() => {
       window.addEventListener("resize", () => setPageWidth(window.innerWidth));
  }, []);

  
    return ( 
     
      <>
       <GlobalStyle/>
       <ThemeProvider theme={theme}>
    
     
          {HeaderComponent} 

          <SelectWork/> 

          <VectorSection/>

          <PortfolioBest/>

          <ContactSection/>

      </ThemeProvider>
     </>
   
     );
}

export default HomePage;


//     const handleWindowResize = () => setPageWidth(window.innerWidth)
//window.addEventListener("resize", () => handleWindowResize);

//return () => window.removeEventListener("resize", handleWindowResize);