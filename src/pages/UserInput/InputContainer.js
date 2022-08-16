import React, { useEffect, useState } from 'react';





export default function InputContainer({
    title, 
    large,
    placeholder,
    type, 
    onChange,
    value, 
    name, 
    arrays, 
    arrayName, 
    onSkillClick, 
    skillLevel, 
    setFunctions,
    values,
    index}) {
    
    console.log("index here", values)
    return (
        <div className={ large ? 'InputContainer input2 inputRow' : 'InputContainer' }>
            <label>
                {title}
            </label>
            {
                type === "select" 
                ? <select name={name} onChange={(e) => onChange(e, arrays, arrayName, index)} value={value}>
                    <option defaultValue  hidden> Please Select</option>
                    <option> Full-time </option>
                    <option> Part-time </option>
                    <option> Self-employed </option>
                    <option> Freelance </option>
                    <option> Contract</option>
                    <option> Internship </option>
                    <option> Apprenticeship </option>
                    <option> Seasonal </option>
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
                : <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e) => onChange(e, setFunctions, values, index)} name={name} 
                />
            }
        </div>
    )
}