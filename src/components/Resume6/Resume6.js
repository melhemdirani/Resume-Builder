import React, { useRef, useLayoutEffect } from 'react';

import './Resume6.styles.scss';
import SkillBar from './SkillBar';
import userImage from '../../assets/images/image.png'
import { Resume6_Data } from '../../assets/data';
import birthday from '../../assets/images/birthday.png';
import english from '../../assets/images/english.png';
import phone from '../../assets/images/phone.png';
import message from '../../assets/images/message.png';
import home from '../../assets/images/home.png';


const PersonalContainer = ({PersonalInfo, borderRadius}) => {
  return(
    <div className='row1'>
      <img alt="" src={PersonalInfo.profile} style={{borderRadius: borderRadius}} className='user_image'/>
      <h1>{PersonalInfo.Name}{" "}{PersonalInfo.Lastname}</h1>
      <div>
        <div className='social_container' >
          <img alt="" src={phone} className='social_image'/>
          <p>{PersonalInfo.phone}</p>
        </div>
        <div className='social_container' >
          <img alt="" src={message} className='social_image'/>
          <p>{PersonalInfo.email}</p>
        </div>
        <div className='social_container' >
          <img alt="" src={home} className='social_image'/>
          <p>{PersonalInfo.place}</p>
        </div>
      </div>
    </div>
  )
}

const EducationContainer = ({Education, title}) => {
  return(
    <div className='c2_containers'>
      <h2>{title}</h2>
      {
        Education && Education.map((item, i) =>
          <div key={i}>
            <h3>{item.title}</h3>
            <div className='course_container' >
              <div className='flex'>
                  <p><span className='bold'>{item.university},</span> {item.place}</p>
                  <p className='bold'>{item.endDate}</p>
              </div>
              <ul>
                  {
                  item.description && item.description.map((desc, j) => 
                  <li key={j}>{desc}</li>
                  )
                  }
              </ul>
            </div>
          </div>
        )
      }

  </div>
  )
}

const CertificationContainer = ({Certification, title}) => {
  return(
    <div>
      <h2>{title}</h2>
      <ul>
        {
          Certification && Certification.map((certicate, i) => 
          <li key={i}>{certicate.title}</li>
          )
        }
      </ul>
  </div>
  )
}

const SkillsContainer = ({Skills, title}) =>{
  return(
    <div className='Competencies'
  
    >
      <h2>{title} </h2>
      {
        Skills && Skills.map((item, i) =>
          <div key={i}>
          <SkillBar 
            skill={item.name} 
            percentage={
              item.value === 5 
              ? "100%" 
              : item.value === 4
              ? "80%" 
              : item.value === 3 
              ? "60%" 
              : item.value === 2
              ? "40%" 
              : "20%"
            }
            />
          </div>
        )
      }
    </div>
  )
}

const TechnicalskillsContainer = ({Technicalskills, title}) => {
  return(
    <div>
      <h2>{title}</h2>
      <ul>
        {
          Technicalskills && Technicalskills.map((skill, i) => 
          <li key={i}>{skill.name}</li>
          )
        }
      </ul>
    </div>
  )
}

const PersonalSkillsContainer =({PersonalInfo, Language, title}) => {
  return(
    <div>
      <h2>{title}</h2>
      {PersonalInfo &&
        <div className='technical_items'>
          <img alt="" src={birthday} className="image"/>
          <p>{PersonalInfo.birthday}</p>
        </div>
      }
      { Language &&
        <div className='technical_items'>
          <img alt="" src={english} className="image"/>
          <p>{Language && Language.map((item, i) =>
            <span key={i}>{item.language}{i + 1 < Language.length && ", "}</span>
          )}</p>
        </div>
      }
  </div>
  )
}

const ObjectiveContainer = ({PersonalInfo, title, summaryHtml}) => {
  return(
    <div className='c2_containers'>
      <h2>{title}</h2>
    {
      summaryHtml ? 
      <div dangerouslySetInnerHTML={{__html: summaryHtml}}  />
      :<p>
        {PersonalInfo.summary}
      </p>
    }

  </div>
  )
}

const ExtraContainer = ({title, ExtraCurricular, achievementsHtml}) => {
  return(
    <div className='c2_containers'>
      <h2>{title}</h2>
      {
        achievementsHtml?
        <div dangerouslySetInnerHTML={{__html: achievementsHtml}}  />
        :
        <ul className='extra'>
           <li >{ExtraCurricular}</li>
       </ul>
      }
     

    </div>
  )
}
function Resume6({data, grid, height, width, hideLevel, borderRadius, setWindowHeight, achievementsHtml, summaryHtml}) { 

  const { Skills, Certification, PersonalInfo, Language, Education, ExtraCurricular, ProfessionalSkills, showSections} = data
  
  const ref = useRef(null)
  useLayoutEffect(() => {
      if(height === "auto")
      setWindowHeight(ref.current.clientHeight)
  }, [data ])

  return (
      <div 
        ref={ref}
        className='Resume6_Container' 
        style={{ width: width, height: height}} 
      >
      {showSections.PersonalInfo && <PersonalContainer PersonalInfo={PersonalInfo} borderRadius={borderRadius} />}
      <div className='row2'>
        <div className='c1'>
          {showSections.Skills && <SkillsContainer Skills={Skills} title="CORE COMPETENCIES" />}
          {showSections.Certification && <CertificationContainer Certification={Certification} title="CERTIFICATION" />}
          {showSections.ProfessionalSkills && <TechnicalskillsContainer title="TECHNICAL SKILLS" Technicalskills={ProfessionalSkills}/>}
          {(showSections.PersonalInfo || showSections.Language )&&  <PersonalSkillsContainer PersonalInfo={PersonalInfo} title="PERSONAL Details" Language={Language}/>}
        </div>
        <div className='c2'>
          {showSections.PersonalInfo && <ObjectiveContainer PersonalInfo={PersonalInfo} title="PROFILE OBJECTIVE" summaryHtml={summaryHtml} />}
          {showSections.Education &&  <EducationContainer Education={Education} title="EDUCATION & CREDENTIALS" />}
          {showSections.Achievements && <ExtraContainer title="EXTRA CURRICULAR ACTIVITES" ExtraCurricular={ExtraCurricular} achievementsHtml={achievementsHtml}/>}
        </div>
      </div>
    </div>
  );
}

export default Resume6;
