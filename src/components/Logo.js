import React, { Component } from 'react';
import './Logo.css';
import logo from '../icons/if_darth-maul_1626614.svg';

function Logo(props){
	return (
    <header className="logo-header">
      <a href="https://andrehollow.github.io/swbd/">
        <img src={logo} className="logo-logo" alt="logo" />
      </a>
      <div className = 'logo-info'>
        <p className = 'logo-name'>
          SWDB by
        </p>
        <a
          className="logo-link"
          href="https://github.com/AndreHollow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andre Hollow
        </a>
      </div>
    </header>
	);
}

export default Logo;