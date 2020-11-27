import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
      </div>
    </div>
  );
}
