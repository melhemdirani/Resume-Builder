import React from 'react';


function SkillBar({skill, percentage}) {
  return (
    <div className='SkillBar'>
       <p style={{width: percentage}}>{skill}</p> 
    </div>
  )
}

export default SkillBar