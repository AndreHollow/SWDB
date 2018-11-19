import React, { Component } from 'react';
import './BottomLinks.css';
import icon from '../icons/if_chewbacca_1626612.svg';

function BottomLinks(props){
	return (
	  <footer className = 'footer'>
			<img src={icon} alt="chewbacca" className = 'bottom-icon'/>
			<div className = 'link'></div>
		</footer>
	);
}

export default BottomLinks;