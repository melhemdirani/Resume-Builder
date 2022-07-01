import React, { useRef, useLayoutEffect, useEffect } from 'react';
import './Resume3.styles.scss';


const SummaryContainer = ({PersonalInfo, summaryHtml, borderRadius}) => {
    return(
        <div className='container summary'>
            <img alt="" src={PersonalInfo.profile} style={{borderRadius: borderRadius}}/>
            <div>
                <h1>{PersonalInfo.Name}{" "}{PersonalInfo.Lastname}</h1>
                <div dangerouslySetInnerHTML={{__html: summaryHtml}} />


            </div>
        </div>
    )
}

const ContactContainer = ({PersonalInfo}) => {
    return(
        <div className='grid'>
            {PersonalInfo.phone && <p><span>Phone:</span>{" "}{PersonalInfo.phone}</p>}
            {PersonalInfo.email && <p><span>Email:</span>{" "}{PersonalInfo.email}</p>}
            {PersonalInfo.place && <p><span>Address:</span>{" "}{PersonalInfo.place}</p>}
        </div>
    )
}

const ExperienceContainer = ({workExperience, title}) => {
    return(
        <div className='container'>
            <h3 className='blue' >{title} </h3>
            <div >
                {workExperience && workExperience.map((item, i) => 
                    <div className='description' key={i}>
                        <p>{item.startDate} - {item.endDate}</p>
                        <div>
                            <p>{item.title}</p>
                            <p><span>{item.company}</span>{" "}{item.location}</p>
                            <div className='list'>
                                {
                                    item.tasks.map((task, j) =>
                                        <p key={j}> - {task}</p>
                                    )
                                    
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
const EducationContainer = ({Education, title}) => {
    return(
        <div className='container'>
            <h3 className='blue'>{title} </h3>
            <div>
                {Education && Education.map((item, i) => 
                    <div className='description' key={i}>
                        <p>{item.endDate}</p>
                        <div>
                            <p>{item.title}</p>
                            <p><span>{item.university}</span>{" "}{item.location}</p>
                            <div className='list'>
                                {
                                    item.description.map((task, j) =>
                                        <p key={j}> - {task}</p>
                                    )
                                    
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const LanguageContainer = ({Language, title}) => {
    return(
        <div className='container'>
            <h3>{title} </h3>
            <div className='div'>
                {
                    Language.map((item, i) => 
                        <p key={i}>{item.language}{" - "}{item.level}</p>
                    )
                }
            </div>
        </div>
    )
}
const SkillsContainer = ({Skills, title}) => {
    return(
        <div className='container'>
            <h3>{title} </h3>
            <div className='flex'> 
                {
                    Skills.map((item, i) => 
                        <p key={i}>{item.name}</p>
                    )
                }
            </div>

        </div>
    )
}

const Container = ({items, title, }) => {
    return(
        <div className='container'>
            <h3>{title} </h3>
               
            <div dangerouslySetInnerHTML={{__html: items}} />

        </div>
    )
}

const CertificationContainer = ({items, title}) => {
    return(
        <div className='container'>
            <h3>{title} </h3>
            {
                items && items.map((item, i) =>
                    <p key={i}>- {item.title}, {item.company} {item.year && `( ${item.year} )`}</p>
                )
            }
        </div>
    )
}

function Resume3({data, grid, height, width, hideLevel, borderRadius, setWindowHeight, summaryHtml, achievementsHtml, projectsHtml}) { 
    const {  Education, Projects, PersonalInfo, Skills, Achievements, Language, workExperience, Certification, showSections} = data
    const ref = useRef(null)

    useEffect(() => {console.log("newDAta")},[data])
    useLayoutEffect(() => {
        setWindowHeight(ref.current.clientHeight -25)
    }, [ data])
    return (
        <div className='Resume3_Container' style={{height: height, width: width}} ref={ref}>
            {showSections.Summary && <SummaryContainer PersonalInfo={PersonalInfo} summaryHtml={summaryHtml} borderRadius={borderRadius}/>}
            {showSections.PersonalInfo &&<ContactContainer PersonalInfo={PersonalInfo} />}
            {showSections.workExperience &&<ExperienceContainer workExperience={workExperience} title="Experience" />}
            {showSections.Education && <EducationContainer Education={Education} title="Education" />}
            {(showSections.Language || showSections.Skills) && 
                <div className='grid2'>
                    {showSections.Language && <LanguageContainer Language={Language} title="Languages" />}
                    {showSections.Skills && <SkillsContainer Skills={Skills} title="Skills" />}
                </div>
            }
            {showSections.Projects && <Container items={projectsHtml} title="Projects"/>}
            {showSections.Achievements && <Container items={achievementsHtml} title="Achievements"/>}
            {showSections.Certification && <CertificationContainer items={Certification} title="Certifications & Courses"/>}
        </div>
    )
}

export default Resume3