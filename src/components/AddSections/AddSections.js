import React, { useEffect } from 'react';

import './AddSections.styles.scss';

import personal from '../../assets/images/personal.svg';
import languages from '../../assets/images/languages.svg';
import courses from '../../assets/images/courses.svg';
import summary from '../../assets/images/summary.svg';
import work from '../../assets/images/work.svg';
import closeButton from '../../assets/images/closeButton.svg';


function AddSections({addDetail, setWorkIndex, setEducationIndex, setSkillIndex, setCertIndex, setShowPersonal, setLangIndex, setOrgIndex, setShowAddSection}) {
    const sections = [
        {
            title: "LANGUAGES",
            icon: languages,
            setIndex: setLangIndex,
            array: "Language"
        },
        {
            title: "SKILLS",
            icon: languages,
            setIndex: setSkillIndex,
            array: "Skills"
        },
        {
            title: "WORK EXPERIENCE",
            icon: work,
            setIndex: setWorkIndex,
            array: "workExperience"
        },
        {
            title: "ORGANIZATIONS",
            icon: work,
            setIndex: setOrgIndex,
            array: "Organization"
        },
        {
            title: "EDUCATION",
            icon: work,
            setIndex: setEducationIndex,
            array: "Education"
        }
    ]

   
   
  return (
    <div className='AddSections_Container'>
        <div className='subContainer'>
            <div className='buttons'>
                {
                    sections.map((section, i) => 
                        <button onClick={() => addDetail(section.setIndex, section.array) } key={i} className="addbuttons">
                            <img alt="" src={section.icon} />
                            {section.title}
                        </button>
                    )
                }
                <button onClick={() => setShowPersonal(true)} className="addbuttons">
                    <img alt="" src={work} />
                    PESRONAL INFO
                </button>
            </div>
         
            <button onClick={() => {setShowAddSection(false)}} className="close">
                <img alt="" src={closeButton} />
            </button>
        </div>
        
    </div>
  )
}

export default AddSections