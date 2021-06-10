import styled,{css} from 'styled-components';

const Paragraph = styled.p`
   font-size: ${({theme}) => theme.fontSize.m};
   font-weight: ${({theme}) => theme.fontWeight};
   z-index:3;

   ${({secondaryStyle}) => secondaryStyle &&
      css`
        font-weight: ${({theme}) => theme.fontWeight.regular};
        color: ${({theme})=> theme.grey100};
    `}
    ${({mobileView}) => mobileView &&
      css`
        font-weight: ${({theme}) => theme.fontWeight.regular};
        color: 'red';
    `}
    ${({smallParagraph}) => smallParagraph &&
      css`
        font-size: ${({theme}) => theme.fontSize.m};
        font-weight: ${({theme}) => theme.fontWeight.thin};
    `}
    ${({strongParagraph}) => strongParagraph &&
      css`
        font-size: ${({theme}) => theme.fontSize.m};
        font-weight: ${({theme}) => theme.fontWeight.bold};
    `}

    @media(max-width:768px) {
      font-size:  ${({theme}) => theme.fontSize.s}
    }


`
export default Paragraph;