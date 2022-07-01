import React, { useLayoutEffect, useState } from 'react';
import InputContainer from "./InputContainer";


function ProfessionalSkillsSection({onArrayChange, ProfessionalSkills, j}) {
    

 
    return (
        <div style={{marginBottom: "20px"}}>
            <InputContainer 
                title="Skill" 
                placeholder='example' 
                onChange={onArrayChange} 
                value={ProfessionalSkills[j].name} 
                arrays={ProfessionalSkills} 
                arrayName="ProfessionalSkills" 
                name="name" 
                index={j}
            />
        </div>
    )
}

export default ProfessionalSkillsSection