import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Bubble from '../../atoms/Bubble/Bubble';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import PortfolioCard from '../../atoms/PortfolioCard/PortfolioCard';
import {BestProjects} from '../../../assets/projects/BestProjects'

const StyledWrapper = styled.section`
    display:grid;
    background-color:${({theme})=> theme.alternativeBgc};
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    padding:200px 0;
    @media(max-width:1201px) {
        grid-template-columns: 1fr;
   
    }
    @media(max-width:768px) {
        padding: 50px 0;
    }
      
`
const StyledAnchor = styled.a `
    color:black;
    margin:20px 150px;
    font-weight: ${({theme})=> theme.fontWeight.bold};
    text-transform: uppercase;
    @media(max-width:1400px) {
      margin-left:20px;
  }
`

const StyledLeftSide = styled.div`
    display:flex;
    position:relative;
    flex-direction: column;
    padding:50px;
`

const StyledRightSide = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`

const StyledHeading = styled(Heading)`
   font-size: ${({theme})=> theme.fontSize.h};
   font-weight: ${({theme})=> theme.fontWeight.thin};
   margin: 50px 30px 100px;
   @media (max-width:768px) {
      font-size: ${({theme})=> theme.fontSize.l};
      margin: 10px 10px 20px;
   }
`
const StyledParagraph = styled(Paragraph)`
  text-transform: uppercase;
  align-self:flex-end;
  justify-self: flex-end;
  margin-left:150px;
  line-height:25px;
  @media(max-width:1400px) {
      margin-left:20px;
  }

`
const StyledPortfolioCard = styled(PortfolioCard)`
  @media(max-width:768px) {
    width: 310px;
    height: 182px;
  }
`
const StyledBubble = styled(Bubble)`
  @media(max-width:1024px) {
    display:none;
  }
`

const SwitchProjectWrapper = styled.div`
    margin:120px 0 40px;
    display: flex;
    width:50%;
    justify-content:space-around;

    @media(max-width:768px) {
    margin: 40px 0 20px;
    width:initial;
  }
`


const PortfolioBest = () => {

    const [offsetY, setOffsetY] = useState(0);
    const [currentProject, setCurrentProject] =useState(BestProjects[1])


    const handleScroll = () => setOffsetY(window.pageYOffset)

    const handleCurrentProject = (e) => setCurrentProject(BestProjects[e.target.id])

    useEffect(() => {
        if(window.innerWidth > 768) {
            window.addEventListener('scroll',handleScroll);
        }
        return () => window.removeEventListener('scroll',handleScroll)
     }, []);

     const SwitchProject = BestProjects.map(project => 
        <PortfolioCard 
            miniCard  
            key={project.id}
            id={project.id}
            projectImage={project.image}
            onClick={handleCurrentProject}
        />
        )
        


    return ( 



        <StyledWrapper>

            <StyledLeftSide>
                <Paragraph>Personal Projects</Paragraph>
                <StyledHeading>{currentProject.title}</StyledHeading>

                <StyledParagraph>{currentProject.desc}</StyledParagraph>
                <StyledAnchor target="_blank"href={currentProject.link}>Live Preview</StyledAnchor>

                <StyledBubble bubbleTop="-65%" bubbleLeft="40%" style={{transform: `translateY(${offsetY * .1}px)`}}/>
                
                <StyledBubble bubbleLeft="12%" bubbleTop="-2%" style={{transform: `translateY(${offsetY * .1}px)`}}/>
                <StyledBubble bubbleLeft="75%" bubbleTop="90%"/>
                <StyledBubble bubbleLeft="45%" bubbleTop="116%"/>
            </StyledLeftSide>

            <StyledRightSide>

                <StyledPortfolioCard projectImage={currentProject.image}/>
               

                 <SwitchProjectWrapper>
                     {SwitchProject}
                </SwitchProjectWrapper>
          

            </StyledRightSide>


        </StyledWrapper>

     );
}
 
export default PortfolioBest;