
import React, { useContext, useState, useRef, useLayoutEffect } from 'react';
import { 
    WorkContainer, 
    EducationContainer, 
    CertificationContainer, 
    SocialMediaContainer,
    SkillsContainer,
    OrganizationContainer,
    LanguageContainer
    } from './Containers';

import './Resume1.styles.scss'

const PersonalContainer = ({PersonalInfo, summaryHtml, showSections}) => {
    const onChange= () => {

    }
    
    return(
        <div className='PersonalContainer'>
            <h2>{PersonalInfo.Name} {" "} {PersonalInfo.Lastname }</h2>
            <p className='profession'>{PersonalInfo.profession}</p>
            { 
                showSections.Summary &&
                <div className='summary'>
                    {
                        summaryHtml ?
                        <div dangerouslySetInnerHTML={{__html: summaryHtml}} />
                        : <p>{PersonalInfo.summary}</p>

                    }
                </div>
            }

            <p className='place'>{PersonalInfo.place}</p>
            {
                PersonalInfo.additionalInfo.length > 0 && PersonalInfo.additionalInfo.map((item, i) => 
                    <div key={i}>
                        {item.name}
                        {item.value}
                    </div>
                )
            }
            <div className='flex wrap'>
                {Object.keys(PersonalInfo.additionalInfo).map((keyName, i) => (
                    <div key={i} className="additional flex">
                       {keyName !== "Custom Field" && <p className='place'>{keyName}:</p> }
                        <p className='place'>{PersonalInfo.additionalInfo[keyName]}</p>
                    </div>
                ))}
            </div>
         
        </div>
    )
}
function Resume1({data, height, width, hideLevel, borderRadius, setWindowHeight, summaryHtml}) { 
   
    const CheckAvailabilty = (obj) => {
        if(typeof obj != "undefined"){
            return true
        } else return false
    }
    const {  Education, Certification, PersonalInfo, Skills, Organization, Language, workExperience, showSections} = data
    const ref = useRef(null)
    useLayoutEffect(() => {
        setWindowHeight&& setWindowHeight(ref.current.clientHeight)
      }, [data])
    return (
        <div 
            ref={ref}
            className='Resume1_Container' 
            style={{  width: width, height: height}} 
        >
            <div className='c1'>
               <img alt='' src={PersonalInfo.profile} className='profile'  style={{borderRadius: borderRadius}}/> 
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
                        <PersonalContainer PersonalInfo={PersonalInfo} summaryHtml={summaryHtml} showSections={showSections}/>
                        {showSections.PersonalInfo && <SocialMediaContainer PersonalInfo={PersonalInfo} />}
                    </div>
                { showSections.Skills && <SkillsContainer Skills={Skills} hideLevel={hideLevel}/> }
                { showSections.Organization &&<OrganizationContainer organization={Organization}/> }
                { showSections.Language && <LanguageContainer language={Language}/> }
            </div>
        </div>
    )
}

export default Resume1