import React, {useState} from 'react';

import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';

const ReferenceSection = ({data, onArrayChange, index}) => {
    const References = data.References
    return(
        <div>
            <div className='flex space inputRow'>
                <InputContainer 
                    title="Name" 
                    onChange={onArrayChange} 
                    value={References[index].name} 
                    arrays={References} 
                    index={index}
                    arrayName="References" 
                    name="name"
                />
                <InputContainer 
                    title="Company" 
                    onChange={onArrayChange} 
                    value={References[index].company} 
                    index={index}
                    arrays={References} 
                    arrayName="References" 
                    name="company"
                />
           </div>
            <div className='flex space inputRow'>
                <InputContainer 
                    title="Phone number" 
                    onChange={onArrayChange} 
                    value={References[index].phone} 
                    arrays={References} 
                    index={index}
                    arrayName="References" 
                    name="phone"
                />
                <InputContainer 
                    title="Email" 
                    onChange={onArrayChange} 
                    value={References[index].email} 
                    index={index}
                    arrays={References} 
                    arrayName="References" 
                    name="email"
                />
           </div>
           <InputContainer 
                title="Position" 
                onChange={onArrayChange} 
                value={References[index].position} 
                index={index}
                arrays={References} 
                arrayName="References" 
                name="position"
                large={true}
            />
         
        </div>
    )
}

export default ReferenceSection

