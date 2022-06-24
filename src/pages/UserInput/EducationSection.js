import React, { useState } from 'react';

import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';

const EducationSection = ({Education, onArrayChange, index}) => {
    let SetPresentValue = Education[index].endDate === "present" ? true : false
    const [present, setPresent] = useState(SetPresentValue)
    return(
        <div>
            <InputContainer 
            title="School Name" 
            large={true} 
            onChange={onArrayChange} 
            value={Education[index].university} 
            arrays={Education} 
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
                arrays={Education} 
                arrayName="Education" 
                name="title" 
                />
                <InputContainer 
                title="Field Of Study" 
                onChange={onArrayChange} 
                value={Education[index].field} 
                index={index}
                arrays={Education} 
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
                arrays={Education} 
                arrayName="Education" 
                name="CGPA" 
                />
                <InputContainer 
                title="Max Average" 
                onChange={onArrayChange} 
                value={Education[index].CGPAMax} 
                index={index}
                arrays={Education} 
                arrayName="Education"  
                name="CGPAMax" 
                />
            </div>
            <DateInput 
                title="Start & End Date"
                onChange={onArrayChange}
                index={index}
                present={present}
                setPresent={setPresent}
                arrays={Education} 
                startDate={Education[index].startDate}
                endDate={Education[index].endDate}
                arrayName="Education" 
            />
            <p className='flex inputRow' onClick={() => setPresent(!present)}>
                {present ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                I am currently studying here 
            </p>
        </div>
    )
}

export default EducationSection

