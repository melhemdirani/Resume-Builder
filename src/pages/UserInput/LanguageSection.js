import React, { useState } from 'react';
import InputContainer from "./InputContainer";


function LanguageSection({onArrayChange, Language, j}) {
    return (
    <div className='flex space inputRow'>
      
        <InputContainer 
            title="Language" 
            onChange={onArrayChange} 
            value={Language[j].language} 
            index={j}
            arrays={Language} 
            arrayName="Language" 
            name="language"
        />
        <InputContainer 
            title="Level" 
            onChange={onArrayChange} 
            value={Language[j].level} 
            index={j}
            arrays={Language} 
            arrayName="Language" 
            name="level"
        />
       
    </div>
  )
}

export default LanguageSection