import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';

function Logo() {
  return(
    <div data-testid="logo">
        <img src={ logo } alt="logo" className="logo" />
      </div>
  )
}

export default Logo;
