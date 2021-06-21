import styled from "styled-components";

const Heading = styled.h1`
   color:${({theme})=> theme.textColor};
   font-size: ${({theme, mainHeader}) => mainHeader ? theme.fontSize.xl : theme.fontSize.l};
   font-weight: ${({theme, mainHeader}) => mainHeader ? theme.fontWeight.bold : theme.fontWeight.regular};

   @media (max-width:768px) {
      font-size: ${({theme, mainHeader}) => mainHeader ? theme.fontSize.l : theme.fontSize.m};
   }
`

export default Heading