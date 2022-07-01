import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './RenderedResumes.styles.scss';
import Resume1 from '../../assets/images/Resume1.png'
import Resume2 from '../../assets/images/Resume2.png'
import Resume3 from '../../assets/images/Resume3.png'
import Resume4 from '../../assets/images/Resume4.png'
import Resume5 from '../../assets/images/Resume5.png'
import Resume6 from '../../assets/images/Resume6.png'
import PrimaryResume from '../PrimaryResume/PrimaryResume';
import { Resume1_Data, PrimaryResume_Data } from '../../assets/data';

function RenderedResumes() {
  return (
    <div className='RenderedResumes_Container'>
        <p className='p'>Being easy to use doesn't have to mean that you are forced into using a pre-made template. Make your resume stand out from the pack by trying different colours, fonts, headline formats and much more.</p>
        <div className='resumes_container'>
          <HashLink to="/editor/resume1" > 
            <img alt='' src={Resume1} />
          </HashLink>
          <HashLink to="/editor/resume2" > 
            <img alt='' src={Resume2} />
          </HashLink>
          <HashLink to="/editor/resume3" > 
            <img alt='' src={Resume3} />
          </HashLink>
          <HashLink to="/editor/resume4" > 
            <img alt='' src={Resume4} />
          </HashLink>
          <HashLink to="/editor/resume5" > 
            <img alt='' src={Resume5} />
          </HashLink>
          <HashLink to="/editor/resume6" >
            <img alt='' src={Resume6} />
          </HashLink>
        </div>
    </div>
  )
}

export default RenderedResumes