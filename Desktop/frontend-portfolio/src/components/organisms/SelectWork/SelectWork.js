import React,{useState} from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import Paragraph from '../../atoms/Paragraph/Paragraph'
import {CommercialProjects} from '../../../assets/projects/CommercialProjects'
import ProjectModal from '../../molecules/ProjectModal/ProjectModal'


const StyledWrapper = styled.section`
  position:relative;

`
const StyledHeading = styled(Heading)`
   padding-top: 120px;
   font-size: ${({theme})=> theme.fontSize.h};
   margin-left:45px;
   font-weight: ${({theme, mainHeader}) => mainHeader ? theme.fontWeight.bold : theme.fontWeight.thin};
   
   @media (max-width:768px) {
      font-size: ${({theme})=> theme.fontSize.l};
      margin-left:15px;
   }
`
const StyledProjectsRow = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 60px;
    padding-top:30px;
    padding-bottom: 160px;

    @media (max-width:1024px) {
        grid-gap:20px;
    }
    @media (max-width:768px) {
        grid-template-columns: 1fr;
        padding:15px;
    }
 
`
const StyledParagraph = styled(Paragraph)`
    font-weight: 100;
    margin: 120px 0px 0px 45px;
    @media (max-width:768px) {
        margin: 20px 0px 0px 15px;
    }
`


const SelectWork = () => {

    const [projectModal,setCurrentModal] = useState()
    const [modalVisible,setModalVisibility] = useState(false)




    const closeModal = () => setModalVisibility(false)

    const MyCommercialProjects = CommercialProjects.map(project =>
        <ProjectCard 
             key={project.id}
             desc={project.desc} 
             title={project.title} 
             year={project.year} 
             onClick ={(e)=> {
                 setCurrentModal(project)
                 setModalVisibility(true)
                 console.log(project)
             }}
    />)


    return ( 
        <>
        <StyledWrapper>
           <StyledHeading>Commercial projects</StyledHeading>
           <StyledParagraph>Some e-commerce and websites projects</StyledParagraph>
           <StyledProjectsRow>
              {MyCommercialProjects}

     

           </StyledProjectsRow>
        </StyledWrapper>

        {modalVisible && <ProjectModal
                  title={projectModal.title}
                  desc={projectModal.desc}
                  longDesc={projectModal.longDesc}
                  tools = {projectModal.tools}
                  tasks = {projectModal.tasks}
                  test = {projectModal.test}
                  live={projectModal.live}
                  onClickBtn = {closeModal}
              />}
        </>
     );
}
 
export default SelectWork;