import React, { useState, useEffect } from 'react';

import work from '../../assets/images/work.png';
import linkedIn from '../../assets/images/linkedIn.png';
import twitter from '../../assets/images/twitter.svg';
import email from '../../assets/images/email.svg';
import phone from '../../assets/images/phone.svg';
import skill from '../../assets/images/skill.png';
import { EditorContext } from '../../components/EditorContext';

const CheckAvailabilty = (obj) => {
    if(typeof obj != null){
        return true
    } else return false
}

export const WorkContainer = ({workExperience}) => {


    return  (
        <div >
            <h3>
                <img alt="" src={work} />
                Work Experience
            </h3>
            {
                workExperience.map((experience,i) => 
                    <div className='Work_Container' key={i}>
                        <h4>
                            {experience.title}
                        </h4>
                        <p>
                            {experience.type}
                        </p>
                        <p>{experience.company} {experience.location && experience.company && "-"} {experience.location}</p>
                        {(experience.startDate || experience.endDate ) && <p>{experience.startDate} - {experience.endDate}</p>}
                    </div>
                )
            }
         
        </div>
    );
}
export const EducationContainer = ({Education}) => {
    return Education && ( 
        <div >
            <h3>
                <img alt="" src={work} />
                Education
            </h3>
            {
                Education.map((item,i) => 
                    <div className='Education_Container' key={i}>
                       { (item.tile || item.field )&&
                            <h4>
                                {item.title} in {item.field}
                            </h4>
                        }
                        <p>{item.university}</p>
                        {   (item.startDate || item.endDate) &&
                            <p>{"("}{item.startDate} - {item.endDate}{")"}</p>
                        }
                        { (item.CGPA || item.CGPAMax) &&
                            <p>CGPA: {item.CGPA} out of {item.CGPAMax} </p>
                        }
                    </div>
                )
            }
         
        </div>
    );
}
export const CertificationContainer = ({Certification}) => {
    return  Certification.length > 0  && (
        <div>
            <h3>
                <img alt="" src={work} />
                Certification
            </h3>
            {
               Certification.map((item,i) => 
                    <div className='Certification_Container' key={i}>
                        { item.company &&
                            <h4>
                                {item.company}
                            </h4>
                        }
                        { (item.title || item.year) &&
                            <p>{item.title} {"("}{item.year}{")"}</p>
                        }
                       { item.website && <p>{item.website}</p>}
                      
                    </div>
                )
            }
         
        </div>
    );
}



const SocialMedia = ({icon, text}) => {
    return(
        <div className='SocialMedia_Container'>
            <img alt="" src={icon} />
            <p>{text}</p>
        </div>
    )
}

export const SocialMediaContainer = ({PersonalInfo}) => {
    return(
        <div>
            <div className='flex'>
                {PersonalInfo.linkedIn && <SocialMedia icon={linkedIn} text={PersonalInfo.linkedIn} />}
                {PersonalInfo.twitter && <SocialMedia icon={linkedIn} text={PersonalInfo.twitter} />}
            </div>
            <div className='flex'>
                {PersonalInfo.email && <SocialMedia icon={linkedIn} text={PersonalInfo.email} />}
                {PersonalInfo.phone && <SocialMedia icon={linkedIn} text={PersonalInfo.phone} />}
            </div>
        </div>
    )
}



const Skill = ({n}) => {
    return(
        <div className='Skill_Container'>
            {
                [...Array(10)].map((e, i) => <div className='square' style={i < n ? { backgroundColor : "#FF7246"} : {backgroundColor: "#DADADA" }} key={i}/>)
            }
            
        </div>
    )
}

export const SkillsContainer = ({Skills, hideLevel}) => {

    return(
        <div className='Skills_Container' >
            <h3>
                <img alt="" src={skill} />
                Skills
            </h3>
            {
                Skills.map((skill, i) => {
                    return (skill.name || skill.value) && (
                        <div key={i} className='flex'>
                            {skill.name && <p>{skill.name}</p>}
                            { !hideLevel && skill.value && <Skill n={skill.value * 2} />}
                        </div>
                    )
                })
            }
        </div>
    )
}

export const OrganizationContainer = ({organization}) => {
    return(
        <div className='Organization_Container'>
            <h3>
                <img alt="" src={skill} />
                Organization
            </h3>
            {
                organization.map((item, i) =>
                    <div key={i} className="organizations">
                        <h4>{item.name}</h4>
                        <p>{item.position}</p>
                        <p>{item.sector}</p>
                        { (item.startDate || item.endDate) && <p>{item.startDate} - {item.endDate}</p>}
                    </div>
                )
            }
        </div>
    )
}

export const LanguageContainer = ({language}) => {
    return(
        <div className='Language_Container'>
            <h3>
                <img alt="" src={skill} />
                Language
            </h3>
            {
                language.map((item, i) =>
                    <div key={i} className="flex">
                        <h4>{item.language}</h4>
                        <p>{item.level}</p>
                    </div>
                )
            }
        </div>
    )
}