import React from 'react';

import './Resume6.styles.scss';
import SkillBar from './SkillBar';
import userImage from '../../assets/images/image.png'
import { Resume6_Data } from '../../assets/data';
import Course from './Course';


function Resume6() {
  const { competencies, certifications, personal, course, extra, social, skills} = Resume6_Data
  return (
    <div className="Resume6_Container">
      <div className='row1'>
        <img alt="" src={userImage} className='user_image'/>
        <h1>YOUR NAME</h1>
        <div>
          {
            social && social.map((item, i) => 
              <div className='social_container' key={i}>
                <img alt="" src={item.image} className='social_image'/>
                <p>{item.text}</p>
              </div>
            )
          }
        </div>
      </div>
      <div className='row2'>
        <div className='c1'>
          <div className='Competencies'>
            <h2>CORE COMPETENCIES</h2>
            {
              competencies && competencies.map((item, i) =>
                <SkillBar skill={item.skill} percentage={item.percentage} key={i}/>
              )
            }
          </div>
          <div>
            <h2>CERTIFICATIONS</h2>
            <ul>
              {
                certifications && certifications.map((certicate, i) => 
                <li key={i}>{certicate}</li>
                )
              }
            </ul>
          </div>
          <div>
            <h2>TECHNICAL SKILLS</h2>
            <ul>
              {
                skills && skills.map((skill, i) => 
                <li key={i}>{skill}</li>
                )
              }
            </ul>
          </div>
          <div>
            <h2>PERSONAL SKILLS</h2>
            {
              personal && personal.map((item, i) => 
                <div key={i} className='technical_items'>
                  <img alt="" src={item.image} className="image"/>
                  <p>{item.text}</p>
                </div>
              )
            }
          </div>
        </div>
        <div className='c2'>
          <div>
            <h2>PROFILE OBJECTIVE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum. Integer non ipsum arcu. In hac habitasse platea dictumst.
            </p>
          </div>
          <div>
            <h2>EDUCATION & CREDENTIALS</h2>
            <div>
              <h3>COURSE</h3>
              <Course course={course}/>
            </div>
            <div>
              <h3>COURSE</h3>
              <Course course={course}/>
            </div>
          </div>
          <div>
            <h2>EXTRA CURRICULAR ACTIVITES</h2>
            <ul className='extra'>
              {
                extra && extra.map((item, i) =>
                  <li key={i}>{item}</li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume6;
