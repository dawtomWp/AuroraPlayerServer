import styled,{css} from 'styled-components'

const Heading = styled.h1`
     z-index:3;
     font-size: ${({theme, mainHeader}) => mainHeader ? theme.fontSize.xl : theme.fontSize.xxl};
     font-weight: ${({theme, mainHeader}) => mainHeader ? theme.fontWeight.bold : theme.fontWeight.regular};

       ${({leftbar})=> leftbar && css`
         font-size: ${({theme, mainHeader}) => mainHeader ? theme.fontSize.xl : theme.fontSize.l};
         font-weight: ${({theme, mainHeader}) => mainHeader ? theme.fontWeight.bold : theme.fontWeight.bold};
         transform: rotate(-90deg)
       `}
       ${({regular})=> regular && css`
         font-size: ${({theme, mainHeader}) => mainHeader ? theme.fontSize.xl : theme.fontSize.l};
         font-weight: ${({theme, mainHeader}) => mainHeader ? theme.fontWeight.bold : theme.fontWeight.bold};
       `}
       ${({regularBigger})=> regularBigger && css`
         font-size: ${({theme, mainHeader}) => mainHeader ? theme.fontSize.xl : theme.fontSize.xl};
         font-weight: ${({theme, mainHeader}) => mainHeader ? theme.fontWeight.bold : theme.fontWeight.bold};
       `}
`

export default Heading;