import React, { useRef, useLayoutEffect} from 'react';

import { Resume5_Data } from '../../assets/data';

import './Resume5.styles.scss';
import { LinearProgress } from '@mui/material';




const PesronalContainer = ({PersonalInfo, title}) => {
    return(
        <div className='progress'>
            <h2>{title}</h2>
            <h4>Phone</h4>
            <p>{PersonalInfo.phone}</p>
            <h4>E-mail</h4>
            <p>{PersonalInfo.email}</p>
            <h4>WWW</h4>
            <p>{PersonalInfo.website}</p>
            <h4>LinkedIn</h4>
            <p>{PersonalInfo.linkedIn}</p>
            <h4>Twitter</h4>
            <p>{PersonalInfo.twitter}</p>
        </div>
    )
}
const SkillsContainer = ({Skills, title}) => {
    const value = (a) => {
        let b = a * 20
        return b
    }
    return(
        <div className='progress'>
            <h2>{title}</h2>
            {
                Skills.map((item, i) =>
                    <div key={i} className="progress">
                        <p>{item.name}</p>
                        <LinearProgress 
                            variant="determinate" 
                            value={value(item.value)}  
                            sx={{
                                height: 5,
                                color: 'red',
                            }}
                        />
                    </div>
                )
            }
        </div>
    )
}

const ExperienceContainer = ({workExperience, title}) => {
    return(
        <div >
            <h2>{title}</h2>
            <div >
                { workExperience.map((item, i) => 
                    <div className='flex' key={i}>
                        <div className='dates'> 
                            <p>{item.startDate}{item.startDate && " -"}</p>
                            <p>{item.endDate}</p>
                        </div>
                        <div className='description'>
                            <h4>{item.title}</h4>
                            <p>{item.location} {item.company && ", "} {item.company}</p>
                            <ul>
                                {
                                    item.tasks.map( (task, i) =>
                                        <li key={i}>{task}</li>

                                    )
                                }
                            </ul>
                        </div>
                
                    </div>
                )}
            </div>

        </div>
    )
}
const EducationContainer = ({items, title}) => {
    return(
        <div className='Container'>
            <h2>{title}</h2>
        { items.map((item, i) => 
            <div className='flex' key={i}>
                <div className='dates'>
                    <p>{item.startDate}{item.startDate && " -"}</p>
                    <p>{item.endDate}</p>
                </div>
                <div>
                    <h4>{item.university} {" "} {item.title}{" in"}</h4>
                    <p>{item.field}</p>
                    <ul>
                        {
                            item.description.map( (task, i) =>
                                <li key={i}>{task}</li>

                            )
                        }
                    </ul>
                </div>
               
            </div>
        )}

        </div>
    )
}
const VolunteerContainer = ({items, title,volunteerHtml}) => {
    return(
        <div >
            <h2>{title}</h2>
            { items.map((item, i) => 
                <div className='flex' key={i}>
                    <div  className='dates'>
                        <p>{item.startDate}{item.startDate && " -"}</p>
                        <p>{item.endDate}</p>
                    </div>
                    <div>
                        <h4>{item.org}</h4>
                        <p>{item.role}</p>
                        <div dangerouslySetInnerHTML={{__html: volunteerHtml}}  />
                        
                    </div>
                   
                </div>
            )}
        </div>
    )
}
const CertificationContainer = ({items, title}) => {
    return(
        <div >
            <h2>{title}</h2>
            { items.map((item, i) => 
                <div className='flex' key={i}>
                    <div className='dates'>
                        <p>{item.year}</p>
                    </div>
                    <div>
                        <h4>{item.title} <span>({item.company})</span></h4>
                    </div>
                </div>
            )}
        </div>
    )
}
                            

function Resume5({data, grid, height, width, hideLevel, borderRadius, setWindowHeight, volunteerHtml, summaryHtml}) {
  const {  Education, Certification, PersonalInfo, Skills,showSections, Organization, References, workExperience, ProfessionalSkills, Volunteer} = data
  useLayoutEffect(() => {
    setWindowHeight(ref.current.clientHeight - 50)
  }, [data])
  const ref = useRef(null)
  return (
    <div ref={ref} className='Resume5_Container' style={{width: width, height: height, gridTemplateColumns: grid}}>
        <div className='c1'>
            {showSections.PersonalInfo &&
                <div>
                    <h1>{PersonalInfo.Name}{" "}{PersonalInfo.Lastname}</h1>
                    <p className='profession'>{PersonalInfo.profession}</p>
                </div>
            }
            {showSections.PersonalInfo && <PesronalContainer title="Personal Info" PersonalInfo={PersonalInfo} />}
            {showSections.Skills && <SkillsContainer title="Skills" Skills={Skills} />}
        </div>
        <div className='c2'>
            {showSections.Summary &&  
            <div>
                {
                    summaryHtml ? 
                    <div dangerouslySetInnerHTML={{__html: summaryHtml}} className="summary" />
                    :<p className='summary'>{PersonalInfo.summary}</p>

                }
            </div>
            }
            {showSections.workExperience && <ExperienceContainer title="Experience" workExperience={workExperience} />}
            {showSections.Education && <EducationContainer title="Education" items={Education} />}
            {showSections.Volunteer &&<VolunteerContainer title="Volunteer" items={Volunteer} volunteerHtml={volunteerHtml} />}
            {showSections.Certification &&<CertificationContainer title="Certificates" items={Certification} />}
        </div>
    </div>
  )
}

export default Resume5