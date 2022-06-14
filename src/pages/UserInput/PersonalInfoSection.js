import React, { Profiler, useEffect, useState } from 'react';

import addButton from '../../assets/images/addButton.svg';
import infoCircle from '../../assets/images/InfoCircle.svg';
import InputContainer from './InputContainer';

function PersonalInfoSection({onPersonalChange, data }) {
    const [image, setImage] = useState(data.PersonalInfo.profile)

    const onImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    useEffect(() => {
        let event = {target: {name: "profile", value: image }}
        onPersonalChange(event)
    }, [image])
    let PersonalInfo = data.PersonalInfo
    return (
        <div>
            <div className='flex space'>
                <InputContainer 
                title="Job Title" 
                placeholder='Ex:'  
                onChange={onPersonalChange} 
                value={PersonalInfo.profession} 
                name="profession"
                />
                <div className='flex photoAdd'>
                    <input type="file" name="image"  onChange={(e) => onImageChange(e)} className='custom-file-input' />
                    <span>Add Photo</span>
                    <img alt="" src={infoCircle} className='img'/>
                </div>
            </div>
            <div className='flex space inputRow'>
                <InputContainer 
                title="First Name" 
                placeholder='Ex:' 
                name="Name"
                onChange={onPersonalChange}
                value={PersonalInfo.Name} 
                />
                <InputContainer 
                title="Last Name" 
                placeholder='Ex:' 
                onChange={onPersonalChange} 
                value={PersonalInfo.Lastname} 
                name="Lastname"
                />
            </div>
            <div className='flex space inputRow'>
                <InputContainer 
                title="LinkedIn" 
                placeholder='Ex:' 
                onChange={onPersonalChange} 
                value={PersonalInfo.linkedin} 
                name="linkedIn" 
                />
                <InputContainer 
                title="Twitter" 
                placeholder='Ex:' 
                onChange={onPersonalChange}  
                value={PersonalInfo.twitter} 
                name="twitter" 
                />
            </div>
            <div className='flex space inputRow'>
                <InputContainer 
                title="Email" 
                placeholder='Ex:' 
                onChange={onPersonalChange} 
                value={PersonalInfo.email} 
                name="email" 
                />
                <InputContainer 
                title="Phone" 
                placeholder='Ex:' 
                onChange={onPersonalChange}  
                value={PersonalInfo.phone} 
                name="phone" 
                />
            </div>
            <InputContainer 
            title="Address"  
            large={true} 
            placeholder='Ex:' 
            onChange={onPersonalChange}  
            value={PersonalInfo.place} 
            name="place"
            />
        </div>
    )
}

export default PersonalInfoSection