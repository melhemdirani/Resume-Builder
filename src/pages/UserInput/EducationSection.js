import React from 'react';

import EditorContainer from "./EditorContainer";
import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';

const EducationSection = ({data, onArrayChange, index}) => {
    let Education = data.Education
    return(
        <div>
            <InputContainer 
            title="School Name" 
            large={true} 
            onChange={onArrayChange} 
            value={Education[index].university} 
            arrays={data.Education} 
            index={index}
            arrayName="Education" 
            name="university" 
            />
            <div className='flex space inputRow'>
                <InputContainer 
                title="Degree" 
                onChange={onArrayChange} 
                value={Education[index].title} 
                index={index}
                arrays={data.Education} 
                arrayName="Education" 
                name="title" 
                />
                <InputContainer 
                title="Field Of Study" 
                onChange={onArrayChange} 
                value={Education[index].field} 
                index={index}
                arrays={data.Education} 
                arrayName="Education" 
                name="field" 
                />
            </div>
            <div className='flex space inputRow'>
                <InputContainer 
                title="Cumulative Grade Point Average" 
                onChange={onArrayChange} 
                value={Education[index].CGPA} 
                index={index}
                arrays={data.Education} 
                arrayName="Education" 
                name="CGPA" 
                />
                <InputContainer 
                title="Max Average" 
                onChange={onArrayChange} 
                value={Education[index].CGPAMax} 
                index={index}
                arrays={data.Education} 
                arrayName="CGPAMax" 
                name="CGPAMax" 
                />
            </div>
            <DateInput 
                title="Start & End Date"
                onChange={onArrayChange}
                index={index}
                arrays={data.Education} 
                startDate={Education[index].startDate}
                endDate={Education[index].endDate}
                arrayName="Education" 
            />
            <p className='flex inputRow'><img alt="" src={checkbox} /> I am currently study here </p>
            <InputContainer title="Location" large={true} placeholder='example' />
        </div>
    )
}

export default EducationSection

