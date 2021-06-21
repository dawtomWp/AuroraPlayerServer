import styled from 'styled-components';

const CarOptionBox = styled.div`
   border-radius:30px;
   background:${({theme})=>theme.glassAlt};
   text-align:center;
   line-height: 30px;
   cursor:pointer;
   width:80px;
   height:30px;
   margin-right:15px;
   color:white;
   border:none;


`

export default CarOptionBox;