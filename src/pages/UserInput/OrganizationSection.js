import React, {useState} from 'react';

import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';

const OrganizationSection = ({Organization, onArrayChange, index}) => {
    let SetPresentValue = Organization[index].endDate === "present" ? true : false
    const [present, setPresent] = useState(SetPresentValue)
    return(
        <div>
            <div className='flex space inputRow'>
                <InputContainer 
                    title="Organization" 
                    onChange={onArrayChange} 
                    value={Organization[index].name} 
                    arrays={Organization} 
                    index={index}
                    arrayName="Organization" 
                    name="name"
                />
                <InputContainer 
                    title="Position" 
                    onChange={onArrayChange} 
                    value={Organization[index].position} 
                    index={index}
                    arrays={Organization} 
                    arrayName="Organization" 
                    name="position"
                />
           </div>
            <InputContainer 
                title="Sector" 
                large={true} 
                onChange={onArrayChange} 
                value={Organization[index].sector} 
                index={index}
                arrays={Organization} 
                arrayName="Organization" 
                name="sector"
            />
            <DateInput 
                title="Start & End Date"  
                onChange={onArrayChange}
                index={index}
                arrays={Organization} 
                startDate={Organization[index].startDate}
                endDate={Organization[index].endDate}
                arrayName="Organization" 
                present={present}
                setPresent={setPresent}
            />
            <p className='flex inputRow' onClick={() => setPresent(!present)}>
                {present ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                I am currently working here 
            </p>
        </div>
    )
}

export default OrganizationSection

