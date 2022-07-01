import React, { useContext, useEffect, useState } from 'react';

import edit from '../../assets/images/editmini.svg';
import deleteIcon from '../../assets/images/deleteMini.svg';
import infoCircle from '../../assets/images/InfoCircle.svg';
import ImageCropper from '../../components/ImageCropper/ImageCropper';
import InputContainer from './InputContainer';
import { EditorContext } from '../../components/EditorContext';



function PersonalInfoSection({onPersonalChange, data, AdditionalButtons }) {
    const {image, setCropper, setImage, showAdditional, AddPeronalInfo}= useContext(EditorContext)

    const [uploaded, setUploaded] = useState(false)
     

    useEffect(() => {
        if(uploaded){
            let event = {target: {name: "profile", value: image }}
            onPersonalChange(event)
        }
    }, [image])

    let PersonalInfo = data.PersonalInfo

    const onDelete = () => {
        let event = {target: {name: "profile", value: "" }}
        onPersonalChange(event)
        setUploaded(false)

    }
    const onInputChange = (e) => {
        setImage( URL.createObjectURL(e.target.files[0]))
        setUploaded(true)
    } 

    const onEditClick = () => {
        setCropper(true)
        window.scrollTo(0, 0)
    }
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
                { uploaded ?
                    <div  className='flex photoAdd'>
                        <div className='uploadedContainer'>
                            <div 
                                className='imageIcon flex' 
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url(${image})`, 
                                    backgroundSize: "contain", 
                                    backgroundPosition:"50% 50%", 
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <img alt="" src={deleteIcon} className="delete" onClick={() => onDelete()}/>
                                
                            </div>

                        </div>
                        <span onClick={() => onEditClick ()} className='Edit flex'>
                            Edit Photo
                            <img alt="" src={edit} />
                        </span>
                    </div>

                    : 
                    <div  className='flex photoAdd'>
                        <input 
                            type="file" 
                            name="image"  
                            onChange={(e) => onInputChange(e)} 
                            className='custom-file-input'/>
                        <span >Add Photo</span>
                        <img alt="" src={infoCircle} className='img'/>
                        </div>
                }
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
                    value={PersonalInfo.linkedIn} 
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
            <div className='flex space inputRow'>
                {
                    AdditionalButtons.map((button, i) => {
                        const {show, item} = button
                        return showAdditional[show] && (
                            <div style={{margin: "10px 0"}} key={i}>
                                <InputContainer 
                                    title={item} 
                                    name={item} 
                                    placeholder='Ex:' 
                                    onChange={AddPeronalInfo}  
                                    value={PersonalInfo.additionalInfo.item} 
                                />
                            </div>
                        )
                    })
                }

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