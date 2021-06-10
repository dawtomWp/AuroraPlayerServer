import styled,{css} from 'styled-components';

const PortfolioCard = styled.div`
  width:700px;
  height:410px;
  background: url(${(props) =>props.projectImage});
  background-size:contain;
  background-repeat: no-repeat;
  box-shadow:0px 15px 30px 1px hsla(196deg, 100%, 25%,.4);
  border-radius: 10px;
  margin-right:20px;



  ${({miniCard})=> miniCard && css`
      width:80px;
      height:45px;
      border-radius: 0px;
      box-shadow:0px 5px 10px 1px hsla(196deg, 100%, 25%,.2);
      cursor:pointer;
  `}
  @media (max-width:768px) {
    margin-right:0px;
   }
    
`

export default PortfolioCard