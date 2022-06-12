import React from 'react';

import './Navbar.styles.scss';
import Logo from '../../assets/images/logo.svg';
import Menu from '../../assets/images/menu_icon.svg';

export default function Navbar() {
  return (
    <div className='Navbar_Container'>
      <img alt='' src={Logo} className='logo' />
      <img alt='' src={Menu} className='menu'/>
    </div>
  )
}
