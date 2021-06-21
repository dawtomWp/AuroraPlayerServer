import styled,{css} from 'styled-components';

const Paragraph = styled.p `
  font-size: ${({theme}) => theme.fontSize.m};
   font-weight: ${({theme}) => theme.fontWeight.regular};
   margin: ${({theme, marginDefault}) => marginDefault ? theme.margin.default : theme.margin.basic};

   ${({errorMsg})=> errorMsg && css`
      color:red;
      font-weight: ${({theme}) => theme.fontWeight.bold};
   `}

`

export default Paragraph;