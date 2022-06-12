import React from 'react';

import EditorContainer from "./EditorContainer";
import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';

const OrganizationSection = ({data, onArrayChange, index}) => {
    let Organization = data.Organization
    return(
        <div>
            <InputContainer 
                title="Organization Title" 
                large={true} 
                onChange={onArrayChange} 
                value={Organization[index].name} 
                arrays={data.Organization} 
                index={index}
                arrayName="Organization" 
                name="name"
            />
            <InputContainer 
                title="Position" 
                large={true} 
                onChange={onArrayChange} 
                value={Organization[index].position} 
                index={index}
                arrays={data.Organization} 
                arrayName="Organization" 
                name="position"
            />
            <InputContainer 
                title="Sector" 
                large={true} 
                onChange={onArrayChange} 
                value={Organization[index].sector} 
                index={index}
                arrays={data.Organization} 
                arrayName="Organization" 
                name="sector"
            />
            <DateInput 
                title="Start & End Date"  
                onChange={onArrayChange}
                index={index}
                arrays={data.Organization} 
                startDate={Organization[index].startDate}
                endDate={Organization[index].endDate}
                arrayName="Organization" 
            />
            <p className='flex inputRow'><img alt="" src={checkbox} /> I am currently working here </p>
        </div>
    )
}

export default OrganizationSection

