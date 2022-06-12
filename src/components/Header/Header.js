import React from 'react';

import search from '../../assets/images/search_icon.svg';
import menu from '../../assets/images/menu_icons2.svg';
import './Header.styles.scss';    

function Header() {
  return (
    <div className='Header_Container'>
        <h1>Job Winning Resume</h1>
        <p className='description'>Being easy to use doesn't have to mean that you are forced into using a pre-made template. Make your resume stand out from the pack by trying different colours, fonts, headline formats and much more.</p>
        <div className='Menu_Container'>
            <a>All Templates</a>
            <a>Simple</a>
            <a>Professional</a>
            <a>Creative</a>
            <a>Modern</a>
            <a>Executive</a>
            <a className='searchBar'>
                <img alt="" src={search} />
                <span>Search here</span>
            </a>
            <img alt="" src={menu} />
        </div>
        <div className='Upload_Container'>
            <p>Drag and Drop Files Here</p>
            <p>OR</p>
            <button> Browse Files </button>
        </div>
    </div>
  )
}

export default Header