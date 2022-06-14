
import React from 'react';
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


function Resume1({data, filledPersonal, grid, height, width, showSections}) { 

    const CheckAvailabilty = (obj) => {
        if(typeof obj != "undefined"){
            return true
        } else return false
    }

    const {  Education, Certification, PersonalInfo, Skills, Organization, Language, workExperience} = data
    return (
        <div 
            className='Resume1_Container' 
            style={{gridTemplateColumns: grid, maxHeight: height ? height : "100%", maxWidth: width, height: height}} 
            >
            <div className='c1'>
                {CheckAvailabilty(PersonalInfo.profile) && <img alt='' src={PersonalInfo.profile} className='profile'/> }
                { (showSections.workExperience || showSections.Education || showSections.Certification) ?
                    <div className='info'>
                        { showSections.workExperience  && <WorkContainer  workExperience={workExperience}  />} 
                        { showSections.Education && <EducationContainer  Education={Education} /> }
                        { showSections.Certification && <CertificationContainer Certification={Certification} /> }
                    </div>
                : ""
                }
            </div>
            <div className='c2'>
                    <div className='row1'>
                        <PersonalContainer PersonalInfo={PersonalInfo} />
                        <SocialMediaContainer PersonalInfo={PersonalInfo} />
                    </div>
                { showSections.Skills && <SkillsContainer Skills={Skills}/> }
                { showSections.Organization &&<OrganizationContainer organization={Organization}/> }
                { showSections.Language && <LanguageContainer language={Language}/> }
            </div>
        </div>
    )
}

export default Resume1