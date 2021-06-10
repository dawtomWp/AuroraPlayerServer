import styled from 'styled-components'

const Bubble = styled.div`
  background-color: ${({theme})=> theme.thirdBgc};
  position: absolute;
  top:${(props) =>props.bubbleTop};
  left:${(props) =>props.bubbleLeft};
  border-radius:50px;
  width:40px;
  height:40px;
  
`

export default Bubble ;