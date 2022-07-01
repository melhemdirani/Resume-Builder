import React, { useLayoutEffect, useRef } from 'react';

import './Resume4.styles.scss';
import { Resume4_Data } from '../../assets/data';


const C1A = ({title, items}) => {
  return(
    <div>
      <h2>{title}</h2>
      {
        items.map((item,i) => 
          <p key={i}>{item}</p>
        )
      }
    </div>
  )
}

const C1B = ({title, items}) => {
  return(
    <div>
      <h2>{title}</h2>
      {
        items.map((item,i) => 
          <div key={i}  style={{marginTop: i !== 0 ? "12px" : ""}}>
            <p>{item.name}</p>
            <p>{item.position}</p>
            <p>{item.email}</p>
          </div>
        )
      }
    </div>
  )
}
const C2 = ({title, items}) => {
  return(
    <div>
      <h2>{title}</h2>
      {
        items.map((item,i) => 
          <div key={i}>
            <p>{item.title}</p>
            <p>{item.position} </p>
            <p>{item.email}</p>
          </div>
        )
      }
    </div>
  )
}

const SkillsContainer = ({skills, title}) => {

  let array = []
  skills.map(item => array.push(item.name) )
  return(
    <C1A title={title} items={array} />
   )
}

const ContactContainer = ({PersonalInfo, title}) => {
  let array = [PersonalInfo.phone, PersonalInfo.place, PersonalInfo.email, PersonalInfo.website]
  return(
    <C1A title={title} items={array} />
   
  )
}
const ReferencesContainer = ({References, title}) => {
  return(
    <C1B title={title} items={References} />
  )
}
const ExperienceContainer = ({workExperience, title}) => {
  const CheckAvailabilty = (obj) => {
    if(typeof obj != "undefined"){
        return true
    } else return false
  }
  return(
    <div  className='container'>
      <h2>{title}</h2>
      {
        workExperience.map((item,i) => 
          <div key={i}  className='subContainer'  style={{marginTop: i !== 0 ? "12px" : ""}}>
            <p className='title'>{item.title}</p>
            <p className='subtitle'>{item.company}{" | "} {item.startDate} {item.endDate.length> 0 && <span>{" - "}{item.endDate}</span>} </p>
            { CheckAvailabilty(item.tasks) &&
            <div className='list'>
              { 
                item.tasks.map((task, i) =>
                  <p key={i}>{task}</p>
                )
              }
              </div>
            }
          </div>
        )
      }
    </div>

  )
}
const EducationContainer = ({Education, title}) => {
  return(
    <div  className='container'>
      <h2>{title}</h2>
      {
        Education.map((item,i) => 
          <div key={i} className='subContainer' style={{marginTop: i !== 0 ? "12px" : ""}}>
            <p className='title'>{item.title}{" "}{item.field}</p>
            <p  className='subtitle'>{item.university}{" | "} {item.startDate} {item.endDate.length> 0 && <span>{" - "}{item.endDate}</span>} </p>
          </div>
        )
      }
    </div>
  )
}
const AwardsContainer = ({Certification, title}) => {
  return(
    <div className=''>
      <h2>{title}</h2>
      {
        Certification.map((item,i) => 
          <div key={i} className='subContainer'  style={{marginTop: i !== 0 ? "12px" : ""}}>
            <p className='title'>{item.title}</p>
            <p  className='subtitle'>{item.company}{" | "} {item.year} </p>
          </div>
        )
      }
    </div>
  )
}


function Resume4({data, grid, height, width, hideLevel, borderRadius, setWindowHeight, summaryHtml}) {
  const {  Education, Certification, PersonalInfo, Skills, Organization, References, workExperience, showSections, ProfessionalSkills} = data
  useLayoutEffect(() => {
    setWindowHeight(ref.current.clientHeight -10)
  }, [
      workExperience.length, 
      Certification.length,
      PersonalInfo, 
      Skills.length, 
      Organization.length, 
      Education.length,
      References.length,
  ])
  const ref = useRef(null)
  
  return (
    <div className="Resume4_Container" style={{width: width, height: height}} ref={ref}>
      { showSections.PersonalInfo &&
        <div className='Row1'>
          <div>
            <h1>{PersonalInfo.Name} {" "} {PersonalInfo.Lastname} </h1>
            <h2>{PersonalInfo.profession}</h2>
          </div>
        </div>
      }
      <div className='Row2'>
        <div className='c1'>
          { showSections.ProfessionalSkills &&  <SkillsContainer skills={ProfessionalSkills} title="Professional Skills"/>}
          { showSections.Skills &&  <SkillsContainer skills={Skills} title="Personal Skills"/>} 
          { showSections.PersonalInfo && <ContactContainer PersonalInfo={PersonalInfo} title="Contact"/>}
          { showSections.References && <ReferencesContainer References={References} title="References"/>}
        </div>
        <div className='c2'>
          {  showSections.Summary &&
            <div className='container'>
              <h2>Profile</h2>
              <div dangerouslySetInnerHTML={{__html: summaryHtml}} />

            </div>
          }
          { showSections.workExperience && <ExperienceContainer workExperience={workExperience} title="Experience"/>}
          { showSections.Education && <EducationContainer Education={Education} title="Education"/>}
          { showSections.Certification && <AwardsContainer Certification={Certification} title="Awards"/>}
        </div>

      </div>
    </div>
  );
}

export default Resume4;
