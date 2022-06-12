import React from 'react'

export default function Course({course}) {
  return (
    <div className='course_container' >
      <div className='flex'>
          <p><span className='bold'>University,</span> Place</p>
          <p className='bold'>Year of Passing</p>
      </div>
      <ul>
          {
          course && course.map((item, i) => 
          <li key={i}>{item}</li>
          )
          }
      </ul>
    </div>
  )
}
