import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import RenderedResumes from '../../components/RenderedResumes/RenderedResumes';

import './Homepage.styles.scss';

function Homepage() {
  return (
    <div className='Homepage_Container'>
      <Navbar />
      <Header />
      <RenderedResumes />
    </div>
  )
}

export default Homepage