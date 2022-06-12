import React, { useState, useEffect } from 'react';

import { Resume1_Data } from '../../assets/data';

function ResumeContainer({ children }) {

    const { workExperience,  Education, Certification, PersonalInfo, Skills, Organization, Language} = Resume1_Data

    const [ work, setWork ] = useState([])
    const [ education, setEducation ] = useState([])
    const [ certification, setCertification ] = useState([])
    const [ personal, setPersonal ] = useState([])
    const [ skills, setSkills ] = useState([])
    const [ organization, setOrganization ] = useState([])
    const [ language, setLanguage ] = useState([])


    useEffect(()=>{
            setWork("");
            setEducation(Education);
            setCertification(Certification);
            setPersonal(PersonalInfo);
            setSkills(Skills);
            setOrganization(Organization)
            setLanguage(Language)
    }, [])

  return (
    <div>
       {children} 
    </div>
  )
}

export default ResumeContainer