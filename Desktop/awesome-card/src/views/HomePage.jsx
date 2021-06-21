import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../components/molecules/Card';
import CreatorPanel from '../components/organisms/CreatorPanel';
import { loadData } from '../data/ActionCreators';



const StyledWrapper = styled.div`
   display:grid;
   width:100vw;
   min-height:100vh;
   grid-template-columns:2fr 1fr;
   grid-gap: 50px;
   justify-content: center;
   align-content: center;
`


const HomePage = () => {
    const cars = useSelector((state) => state.cars);
    const dispatch = useDispatch();


//I TUTAJ ZNALEZC SPOSOB JAK UMEISCIC OBIEKT W STACIE
    const [dataStatus, setDataStatus] = useState(false)
    const [currentModel,setCurrentModel] = useState([])

    const handleLoad = () => {
        dispatch(loadData())
   
        setDataStatus(true)
        console.log(cars)
    
    }
    useEffect(()=> {
        handleLoad();
    }, []);

 //IMO KLUCZOWA SPRAWA, JAK PRZEKAZAC OBIEKT A NIE STRINGA
    const changeCurrentModel = (e) => {
      
        setCurrentModel(cars.models[e.target.innerText])
        console.log(cars.models[e.target.innerText])
    }

  

    return (

      
        <StyledWrapper>
            {dataStatus ?
            <>
                <CreatorPanel 
                   currentModelProvider={currentModel}
                   changeCurrent={changeCurrentModel}
                   allModels={cars.models}/>
                <Card 
                   model={currentModel}/>
    

            </>
                        :
            null
            }

        </StyledWrapper>
     );
}
 
export default HomePage;