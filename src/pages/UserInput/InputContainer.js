import React, { useEffect, useState } from 'react';





export default function InputContainer({title, large, placeholder, type, onChange, value, name, arrays, arrayName, onSkillClick, skillLevel, index}) {
   


    return (
        <div className={ large ? 'InputContainer input2 inputRow' : 'InputContainer' }>
            <label>
                {title}
            </label>
            {
                type === "select" 
                ? <select onChange={onChange}>
                    <option>
                        Please Select
                    </option>
                </select>
                : type === "level" ?
                <div className='skillLevel'>
                    { [...Array(5)].map((e, i) => 
                        <div 
                         className='rectangle' 
                         style={
                            i < skillLevel 
                            ? { backgroundColor : "#1890FF"} 
                            : {backgroundColor: "#D8D8D8" }} 
                            key={i} 
                            onClick={() => onSkillClick(i)}
                        />
                    )}
                </div>
                : <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e, arrays, arrayName, index)} name={name} />
            }
        </div>
    )
}