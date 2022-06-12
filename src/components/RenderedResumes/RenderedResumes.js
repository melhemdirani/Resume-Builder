import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './RenderedResumes.styles.scss';
import Resume1 from '../Resume1/Resume1';
import Resume6 from '../Resume6/Resume6';
import Resume2 from '../../assets/images/Resume2.png'
import Resume3 from '../../assets/images/Resume3.png'
import Resume4 from '../../assets/images/Resume4.png'
import Resume5 from '../../assets/images/Resume5.png'
import { Resume1_Data } from '../../assets/data';

function RenderedResumes() {
  return (
    <div className='RenderedResumes_Container'>
        <p className='p'>Being easy to use doesn't have to mean that you are forced into using a pre-made template. Make your resume stand out from the pack by trying different colours, fonts, headline formats and much more.</p>
        <div className='resumes_container'>
          <HashLink to="/editor" > 
            <Resume1 data={Resume1_Data} home={true}  grid={"40% 60%"} width={"calc(100% - 72px)"}/>
          </HashLink>
          <img alt='' src={Resume2} />
          <img alt='' src={Resume3} />
          <img alt='' src={Resume4} />
          <img alt='' src={Resume5} />
          <Resume6 />
        </div>
    </div>
  )
}

export default RenderedResumes