import React, { useState } from 'react';

import EditorContainer from "./EditorContainer";
import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';


const WorkSection = ({data, onArrayChange, index}) => {

    
    let SetPresentValue = data.workExperience[index].endDate === "present" ? true : false
    

    const [present, setPresent] = useState(SetPresentValue)

    let workExperience = data.workExperience
    return(
        <div>
            <InputContainer 
                title="Job Titles" 
                large={true} 
                onChange={onArrayChange} 
                value={workExperience[index].title} 
                arrays={data.workExperience} 
                index={index}
                arrayName="workExperience" 
                name="title"
            />
            <InputContainer title="Employment Type" large={true} type={"select"}  />
            <InputContainer 
                title="Location"
                large={true} 
                placeholder='example' 
                onChange={onArrayChange} 
                value={workExperience[index].location} 
                arrays={data.workExperience} 
                index={index}
                arrayName="workExperience" 
                name="location"
            />
            <InputContainer 
                title="Company Name" 
                large={true} 
                onChange={onArrayChange} 
                value={workExperience[index].company} 
                index={index}
                arrays={data.workExperience} 
                arrayName="workExperience" 
                name="company"
            />
            <DateInput 
                title="Start & End Date"  
                onChange={onArrayChange}
                present={present}
                setPresent={setPresent}
                index={index}
                arrays={data.workExperience} 
                startDate={workExperience[index].startDate}
                endDate={workExperience[index].endDate}
                arrayName="workExperience" 
            />
            <p className='flex inputRow' onClick={() => setPresent(!present)}>
                {present ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                I am currently working here 
            </p>
        </div>
    )
}

export default WorkSection

