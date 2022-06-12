
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


function Resume1({data, filledPersonal, grid, height, width}) { 
    const {  Education, Certification, PersonalInfo, Skills, Organization, Language, profile, workExperience} = data
    return (
        <div className='Resume1_Container' style={{gridTemplateColumns: grid, maxHeight: height ? height : "100%", width: width}} >
            { profile || Education && Education.length > 0 || Certification && Certification.length > 0 || workExperience.length>0 ?
                <div className='c1'>
                    {profile && <img alt='' src={profile} className='profile'/> }
                    { workExperience || Education || Certification ?
                        <div className='info'>
                            { workExperience  && <WorkContainer  workExperience={workExperience} />} 
                            { Education && <EducationContainer  Education={Education} /> }
                            { Certification.length > 0 && <CertificationContainer Certification={Certification} /> }
                        </div>
                    : ""
                    }
                </div>
                : ""
            }
            { filledPersonal || Skills &&  Skills.length > 0   || Organization && Organization.length > 0  || Language && Language.length > 0  ?
                <div className='c2'>
                        <div className='row1'>
                            <PersonalContainer PersonalInfo={PersonalInfo} />
                            <SocialMediaContainer PersonalInfo={PersonalInfo} />
                        </div>
                    { Skills && Skills.length > 0 && <SkillsContainer Skills={Skills}/> }
                    { Organization && Organization.length > 0 &&<OrganizationContainer organization={Organization}/> }
                    { Language&& Language.length > 0 && <LanguageContainer language={Language}/> }
                </div>
                :""
            }
        </div>
    )
}

export default Resume1