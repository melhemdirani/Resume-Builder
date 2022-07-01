import React, { useLayoutEffect, useState } from 'react';
import InputContainer from "./InputContainer";


function SkillsSection({onArrayChange, Skills, j, hideLevel}) {
    
    const [skillLevel, setSkillLevel] = useState(Skills[j].value)
    const [levels, setLevels] = useState("")
    useLayoutEffect(() => {
        let level = skillLevel === 1 ? "Novice"
        : skillLevel === 2 ? "Beginner"
        : skillLevel === 3 ? "Skillful"
        : skillLevel === 4 ? "Expedited"
        :  "Expert"
        setLevels(level)
    }, [skillLevel])
    

    const onSkillClick = (index) => {
        setSkillLevel(index + 1)
        const e = {target: {value: index + 1, name: "value"}}
        const arrays = Skills
        const  arrayName =  "Skills"    
        onArrayChange(e, arrays, arrayName, j)
    }
    return (
        <div className='flex space inputRow'>
            <InputContainer 
                title="Skill" 
                placeholder='example' 
                onChange={onArrayChange} 
                value={Skills[j].name} 
                arrays={Skills} 
                arrayName="Skills" 
                name="name" 
                index={j}
            />
            {!hideLevel && <InputContainer 
                title={`Level - ${levels}`}
                placeholder='example' 
                type="level"  
                onSkillClick={onSkillClick} 
                skillLevel={skillLevel}
                hideLevel={hideLevel}
            />}
        </div>
    )
}

export default SkillsSection