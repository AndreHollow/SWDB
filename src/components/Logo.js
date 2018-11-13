//just logo with the link to mainpage
import React, { Component } from 'react';
import './Logo.css';
import logo from '../icons/if_darth-maul_1626614.svg';




function Logo(props){
	return (
	  <div className = 'logo'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className = 'App-info'>
          <p className = 'App-name'>
              T-O-D-O
          </p>
          <a
            className="App-link"
            href="https://github.com/AndreHollow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andre Hollow
          </a>
        </div>
      </header>
		</div>
	);
}








export default Logo;