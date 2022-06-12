import React from 'react';

import EditorContainer from "./EditorContainer";
import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';

const WorkSection = ({data, onArrayChange, index}) => {
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
            <InputContainer title="Location" large={true} placeholder='example' />
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
                index={index}
                arrays={data.workExperience} 
                startDate={workExperience[index].startDate}
                endDate={workExperience[index].endDate}
                arrayName="workExperience" 
            />
            <p className='flex inputRow'><img alt="" src={checkbox} /> I am currently working here </p>
        </div>
    )
}

export default WorkSection

