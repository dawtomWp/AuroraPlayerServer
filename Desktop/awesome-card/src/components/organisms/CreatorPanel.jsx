import React,{useState} from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import CarOptionBox from '../atoms/CarOptionBox';

const StyledWrapper = styled.div`
    height:700px;
    background: ${({theme})=> theme.glass};
    padding:5px 45px;

`
const StyledOptionWrapper = styled.div`
   display:flex;

   justify-content:flex-start;
   & > p {
    margin-right:25px;
   }
 
`

 

const CreatorPanel = ({allModels,changeCurrent,currentModelProvider}) => {

    const [currentModelSpec, setCurrentModelSpec] = useState(currentModelProvider)
    console.log(currentModelSpec)
    return ( 
    <StyledWrapper>
        <Heading mainHeader children="CKONFIG 5.1"/>
        <StyledOptionWrapper>

        </StyledOptionWrapper>
        <Heading children="Model"/>
        <StyledOptionWrapper>
             {Object.keys(allModels).map((model,id) => 
                 <CarOptionBox
                    onClick={changeCurrent}          
                    key={id}
                    value={model}
                    >
                       {model}
                 </CarOptionBox>)}
            
            </StyledOptionWrapper>
        <Heading children="Engine"/>
        <StyledOptionWrapper>
             {Object.keys(currentModelSpec).map((engine,id) => 
                 <CarOptionBox
                    onClick={changeCurrent}
                    key={id}
            
                    >
                        {engine}
                 </CarOptionBox>)}
            </StyledOptionWrapper>
        <Heading children="Gearbox"/>
        <StyledOptionWrapper>
            
            </StyledOptionWrapper>
        <Heading children="Color"/>
        <StyledOptionWrapper>
            
            </StyledOptionWrapper>
    </StyledWrapper>
     );
}
 
export default CreatorPanel;
