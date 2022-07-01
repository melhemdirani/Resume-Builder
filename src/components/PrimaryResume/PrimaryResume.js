import React from 'react';

import { PrimaryResume_Data } from '../../assets/data';
import './PrimaryResume.styles.scss';

const Container = ({item, i}) => {
    const {title, startDate, endDate, duration, location, company, description} = item
    return(
        <div className='Container'>
            <h4 style={i === 0 ? {margin:"0"} : {marginTop:"25px"}}>{title}{i}</h4>
            <p>{company}</p>
            <p>
                <span>{startDate}</span>
                <span>{" - "}{endDate}</span>
                {duration && <span>{" - "}{duration}</span>}
                <span>,{" "}{location}</span>
            </p>
           { description && <p> {description} </p> }
        </div>
    )
}

const SkillsList = ({Skill}) => {
    const { name, skills, aligned } = Skill
    return(
        <div>
            <p className='title'>{name}</p>
            <div>
                {
                !aligned ? 
                skills && skills.map((skill, i) => 
                    <p key={i}>{skill}</p>
                )
                :
                skills && skills.map((skill, i) => 
                    <span key={i}>{skill}{i !== skills.length -1 ? ", " : ""}</span>
                )
            }
            </div>
        </div>
    )

}

function PrimaryResume({width, height}) {

    const {workExperience, Education, PersonalInfo, Skills} = PrimaryResume_Data

    return (
        <div className='PrimaryResume_Container' style={{width: width, height: height}}>
            <div className='c1'>
                { PersonalInfo.Name || PersonalInfo.Lastname ? <h2>{PersonalInfo.Name} {" "} {PersonalInfo.Lastname}</h2> : ""}
                { PersonalInfo.profession && <p className='position'>{PersonalInfo.profession}</p>}
                {   workExperience &&
                    <div>
                        <h3>Experience</h3>
                        {
                            workExperience.map((item, i) =>
                                <Container item={item} key={i} i={i}/>
                            )
                        }
                    </div>
                }
                { Education &&
                    <div>
                        <h3>Education</h3>
                        {
                             Education.map((item, i) =>
                            <Container item={item} key={i} i={i}/>
                            )
                        }
                    </div>
                }
            </div>
            <div className='c2'>
                <div>
                    <img alt="" src={PersonalInfo.profile} />
                    <p>{PersonalInfo.email}</p>
                    <p>{PersonalInfo.phone}</p>
                    <p>{PersonalInfo.place}</p>
                </div>
                {
                    Skills && Skills.map((Skill, i) => 
                        <SkillsList key={i} Skill={Skill}/>
                    ) 
                }
            </div>
           
        </div>
    )
}

export default PrimaryResume