import React, { useState } from 'react';
import InputContainer from "./InputContainer";


function SkillsSection({onArrayChange, data, j}) {
    
    const [skillLevel, setSkillLevel] = useState(data.Skills[j].value)

    const onSkillClick = (index) => {
        setSkillLevel(index + 1)
        const e = {target: {value: index + 1, name: "value"}}
        const arrays = data.Skills
        const  arrayName =  "Skills"    
        onArrayChange(e, arrays, arrayName, j)
    }
  return (
    <div className='flex space inputRow'>
        <InputContainer 
            title="Degree" 
            placeholder='example' 
            onChange={onArrayChange} 
            value={data.Skills[j].name} 
            arrays={data.Skills} 
            arrayName="Skills" 
            name="name" 
            index={j}
        />
        <InputContainer 
            title="Level - Novice" 
            placeholder='example' 
            type="level"  
            onSkillClick={onSkillClick} 
            skillLevel={skillLevel}
        />
    </div>
  )
}

export default SkillsSection