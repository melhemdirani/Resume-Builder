import React, { useEffect, useState } from 'react';

import deleteIcon from '../../assets/images/delete.svg'
import deleteIconRed from '../../assets/images/deleteRed.svg'

export default function DeletableInput({
    title, 
    placeholder, 
    onChange, 
    value, 
    name, 
    arrays, 
    arrayName, 
    index,
    show,
    setAdditionalButtons
}) {

    const [hover, setHover] = useState(false)

    const onMouseEnter = () => {
        if(!hover){
            setHover(true)
        }
    }
    const onMouseLeave = () => {
        if(hover){
            setHover(false)
        }
    }
    const onDelete = () => {
        setAdditionalButtons(items => ({
            ...items,
            [name]: false
        }))
    }

    return (
        <div className='InputContainer input3 inputRow' onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
            <label>
                {title}
            </label>
            <div className='input_container'>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e) => onChange(e, arrays, arrayName, index)} 
                    name={name} 
                />
                <img alt="" src={hover ? deleteIconRed : deleteIcon}  onClick={() => onDelete()}/>
            </div>

        </div>
    )
}