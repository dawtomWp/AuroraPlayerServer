import styled from 'styled-components'

const ImageFrame = styled.div`
  background: url(${(props) =>props.imgUrl});
  width:${(props) =>props.imgWidth};
  height:${(props) =>props.imgHeight};
  background-position: center;
  background-size:contain;
  background-repeat: no-repeat;
`

export default ImageFrame ;