import React, { useState } from 'react';

import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';
import TipEditor from './TipEditor';

const VolunteerSection = ({Volunteer, onArrayChange, index}) => {
    let SetPresentValue = Volunteer[index].endDate === "present" ? true : false
    const [present, setPresent] = useState(SetPresentValue)
    return(
        <div>
            <div className='flex space inputRow'>
                <InputContainer 
                title="Place" 
                onChange={onArrayChange} 
                value={Volunteer[index].org} 
                arrays={Volunteer} 
                index={index}
                arrayName="Volunteer" 
                name="org" 
                />
                <InputContainer 
                title="Role" 
                onChange={onArrayChange} 
                value={Volunteer[index].role} 
                arrays={Volunteer} 
                index={index}
                arrayName="Volunteer" 
                name="role" 
            />
            </div>
            <DateInput 
                title="Start & End Date"
                onChange={onArrayChange}
                index={index}
                present={present}
                setPresent={setPresent}
                arrays={Volunteer} 
                startDate={Volunteer[index].startDate}
                endDate={Volunteer[index].endDate}
                arrayName="Volunteer" 
            />
            <p className='flex inputRow' onClick={() => setPresent(!present)}>
                {present ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                I am currently working here 
            </p>

        </div>
    )
}

export default VolunteerSection

