import React, { useRef, useLayoutEffect } from 'react';

import { Resume2_Data } from '../../assets/data';
import phone from '../../assets/images/phone2.png';
import message from '../../assets/images/email.png';
import home from '../../assets/images/location.png';
import './Resume2.styles.scss'


const PersonalContainer = ({PersonalInfo}) => {
    return(
      <div className='row1'>
          <div>
            <h1><span>{PersonalInfo.Name}</span>{" "}{PersonalInfo.Lastname}</h1>
            <p className='profession'>{PersonalInfo.profession}</p>
          </div>
        <div>
          <div className='social_container' >
            <p>{PersonalInfo.phone}</p>
            <img alt="" src={phone} className='social_image'/>
          </div>
          <div className='social_container' >
            <p>{PersonalInfo.email}</p>
            <img alt="" src={message} className='social_image'/>
          </div>
          <div className='social_container' >
            <p>{PersonalInfo.place}</p>
            <img alt="" src={home} className='social_image'/>
          </div>
        </div>
      </div>
    )
}

const ObjectiveContainer = ({title, PersonalInfo, summaryHtml}) => {
    return(
        <div className='container'>
            <div className='c1'>
                <h3>{title}</h3>
            </div>
            <div dangerouslySetInnerHTML={{__html: summaryHtml}} className="pc2" />
        </div>
    )
}
const ProfessionalContainer = ({title, workExperience}) => {
    return(
        <div className='container'>
            <div className='c1'>
                <h3>{title}</h3>
            </div>
            <div className='c2'>
                {workExperience && workExperience.map((work, i) => 
                    <div key={i}  style={{marginTop: i !== 0 ? "5px" : "0"}}> 
                        <div className='flex'>
                            <h4 className='work'>{work.title}</h4>
                            <p>{work.startDate}{work.endDate && "-"}{work.endDate}</p>
                        </div>
                        <p >{work.company}{work.location && ", "}{work.location} {work.type && " - "}{work.type}</p>
                        <ul>
                            {
                                work.tasks && work.tasks.map((item, j) => 
                                    <li key={j}>{item}</li>
                                )
                            }
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
const EducationContainer = ({title, Education}) => {
    return(
        <div className='container'>
            <div className='c1'>
                <h3>{title}</h3>
            </div>
            <div className='c2'>
                {
                    Education && Education.map((item, i) =>
                        <div key={i} style={{marginTop: i !== 0 ? "5px" : "0"}}>
                            <h4 className=' flex'>
                                <span>
                                    {item.title}{" "}
                                    {item.CGPA && "("}
                                    {item.CGPA}
                                    {item.CGPAMax && "/"}
                                    {item.CGPAMax}
                                    {item.CGPA && ")"}
                                </span>
                                <span className='span2'>
                                    {item.endDate}
                                </span>
                             
                            </h4>
                            <p>{item.university}{item.location && ","}{item.location}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
const CertificationContainer = ({title, Certification}) => {
    return(
        <div className='container'>
            <div className='c1'>
                <h3>{title}</h3>
            </div>
            <div className='c2'>
                {
                    Certification && Certification.map((item, i) =>
                        <div key={i} className="flex">
                            <p>{item.title}</p>
                            <p>{item.year}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
const SkillsContainer = ({title, Skills}) => {
    return(
        <div className='container'>
            <div className='c1'>
                <h3>{title}</h3>
            </div>
            <div className='c2 skills'>
                {
                    Skills && Skills.map((item, i) =>
                        <div key={i}>
                            <p>{item.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
const ReferencesContainer = ({title, References}) => {
    return(
        <div className='container'>
            <div className='c1'>
                <h3 className='referencesh3'>{title}</h3>
            </div>
            <div className='c2 ref'>
                {
                    References && References.map((item, i) =>
                        <div key={i} className="subref">
                            <p className='name'>{item.name}</p>
                            <p>{item.company}</p>
                            <p className="phone">{item.phone}</p>
                            <p>{item.email}</p>
                            <p>{item.position}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

function Resume2({data, grid, height, width, hideLevel, borderRadius, setWindowHeight, summaryHtml}) { 
  const {  
        Education, 
        Certification, 
        PersonalInfo, 
        Skills, 
        References, 
        workExperience,
        showSections 
    } = data

    console.log("data", data)
    const ref = useRef(null)
    useLayoutEffect(() => {
        if(height === "auto")
        setWindowHeight(ref.current.clientHeight - 38)
    }, [data])
  return (
    <div className='Resume2_Container' ref={ref} style={{height: `calc(${height} + -100px)`, width: width}}>
        <div className='row0'/>
        <div className='items'>
            { showSections.PersonalInfo && 
                <PersonalContainer PersonalInfo={PersonalInfo}/>
            }
            {   showSections.Summary && 
                <ObjectiveContainer PersonalInfo={PersonalInfo} title="Career Objective" summaryHtml={summaryHtml}/>
            }
            {   
                showSections.workExperience && 
                <ProfessionalContainer workExperience={workExperience} title="Professional Experience"/>
            }
            {
                showSections.Education && 
                <EducationContainer Education={Education} title="Education"/>
            }
            {
                showSections.Certification && 
                <CertificationContainer Certification={Certification} title="license & Certification"/>
            }
            {
                showSections.Skills && 
                <SkillsContainer Skills={Skills} title="Additional Skills"/>
            }
            {
                showSections.References && 
                <ReferencesContainer References={References} title="References"/>
            }
        </div>
  
    </div>
  )
}

export default Resume2