
import React, { useContext } from 'react';
import { 
    WorkContainer, 
    EducationContainer, 
    CertificationContainer, 
    PersonalContainer,
    SocialMediaContainer,
    SkillsContainer,
    OrganizationContainer,
    LanguageContainer
    } from './Containers';


import './Resume1.styles.scss'
import { EditorContext } from '../../components/EditorContext';


function Resume1({data, grid, height, width, showSections, hideLevel}) { 
    const CheckAvailabilty = (obj) => {
        if(typeof obj != "undefined"){
            return true
        } else return false
    }
    const {  Education, Certification, PersonalInfo, Skills, Organization, Language, workExperience} = data
    const { round }= useContext(EditorContext)
    return (
        <div 
            className='Resume1_Container' 
            style={{gridTemplateColumns: grid,  width: width, height: height}} 
            >
            <div className='c1'>
               <img alt='' src={PersonalInfo.profile} className='profile' style={{borderRadius: round ? "50%" : "0"}} /> 
                { (showSections.workExperience || showSections.Education || showSections.Certification) ?
                    <div className='info'>
                        { showSections.workExperience  && <WorkContainer  workExperience={workExperience}  />} 
                        { showSections.Education && <EducationContainer  Education={Education} /> }
                        { showSections.Certification && <CertificationContainer Certification={Certification} /> }
                    </div>
                : ""
                }
            </div>
            <div className='c2' >
                    <div className='row1'>
                        <PersonalContainer PersonalInfo={PersonalInfo} />
                        <SocialMediaContainer PersonalInfo={PersonalInfo} />
                    </div>
                { showSections.Skills && <SkillsContainer Skills={Skills} hideLevel={hideLevel}/> }
                { showSections.Organization &&<OrganizationContainer organization={Organization}/> }
                { showSections.Language && <LanguageContainer language={Language}/> }
            </div>
        </div>
    )
}

export default Resume1