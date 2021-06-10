import website4 from '../images/modalWebsite4.png';
import website3 from '../images/modalWebsite3.png';
import website2 from '../images/modalWebsite2.png';
import website1 from '../images/modalWebsite1.png';
import styled from 'styled-components';


import {SiPhp} from 'react-icons/si';
import {SiAffinity} from 'react-icons/si';
import {SiWordpress} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';
import {FaMagento} from 'react-icons/fa';
import {SiAdobephotoshop} from 'react-icons/si'

const StyledPhp = styled(SiPhp)`
  font-size:44px;
  margin-right:10px;
//color:purple;
  transition:.5s;

&:hover {
  transform: translateY(-15px);
}
`
const StyledAffinity = styled(SiAffinity)`
  font-size:44px;
  //color:lightskyblue;
  margin-right:10px;
  transition:.5s;

&:hover {
  transform: translateY(-15px);
}
`
const StyledWordpress = styled(SiWordpress)`
  font-size:44px;
  margin-right:10px;
  //color:cadetblue;
  transition:.5s;

&:hover {
  transform: translateY(-15px);
}
`
const StyledJS = styled(IoLogoJavascript)`
font-size:44px;
  margin-right:10px;
//  color:goldenrod;
  transition:.5s;

  &:hover {
    transform: translateY(-15px);
  }
`
const StyledMagento = styled(FaMagento)`
font-size:44px;
  margin-right:10px;
//  color:goldenrod;
  transition:.5s;

  &:hover {
    transform: translateY(-15px);
  }
`
const StyledAdobe = styled(SiAdobephotoshop)`
font-size:44px;
  margin-right:10px;
//  color:goldenrod;
  transition:.5s;

  &:hover {
    transform: translateY(-15px);
  }
`


export const CommercialProjects = [
    {
        desc: 'Local printing company shop',
        title: 'Strefa Nadruków',
        year: 2021,
        id:1,
        longDesc: "Online store based on wordpress and woocommerce for a client operating in the printing industry. ",
        tasks: "Page design and coding, woocommerce plugins edition",
        test: website1,
        tools: [<StyledPhp/>, <StyledAffinity/>, <StyledJS/>,  <StyledWordpress/>],
        live: 'https://strefanadrukow.pl/'
    },
    {
        desc: 'Store for a food wholesaler (IN PRODUCTION)',
        title: 'Delikont',
        year: 2021,
        id:2,
        longDesc: "Delikont is a food wholesaler with over 5,000 products. The online store that I was developing throughout the entire period of work. The project is based on magento 2 and PHP. ",
        tasks: "Layout coding and PHP plugin edition, processing of product photos, communication with, taking care of communication between the team and the client.",
        test: website2,
        tools: [<StyledPhp/>,<StyledJS/>, <StyledMagento/>, <StyledAdobe/> ],
        live: 'https://delikont.pl/'
    },
    {
        desc: 'Beauty salon website',
        title: 'BeautifulSkin Tychy',
        year: 2020,
        id:3,
        longDesc: "BeautifulSkin Tychy is a beauty salon from the Silesian Voivodeship. Page contains detailed descriptions of cosmetic procedures. Project is based on wordpress technology",
        tasks:`Template editing and coding, contact with the customer`,
        test: website3,
        tools: [<StyledPhp/>,<StyledJS/> , <StyledAffinity/>, <StyledWordpress/>],
        live: `https://beautifulskin.tychy.pl/`
    },
    {
        desc: 'Recruitment company website',
        title: 'rekrutacja-ecommerce',
        year: 2020,
        id:4,
        longDesc: "Rekrutacja ecommerce is a platform on the e-commerce and seo market created for employees and employers. A both parties can post an advertisement or job offert and choose the best. ",
        tasks:`Template editing and coding, contact with the customer, PHP plugins edition, creating some graphics `,
        test: website4,
        tools: [<StyledPhp/>,<StyledJS/> , <StyledAffinity/>, <StyledWordpress/>, <StyledAdobe/>],
        live:'https://rekrutacja-ecommerce.pl/'
    }


]