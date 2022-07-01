import React from 'react';


function SkillBar({skill, percentage}) {
  return (
    <div className='SkillBar'>
       <p style={{width: `calc(${percentage} + -4px)`}}>{skill}</p> 
    </div>
  )
}

export default SkillBar