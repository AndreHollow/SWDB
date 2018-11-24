import React, { Component } from 'react';
import './NavBar.css';
import icon from '../icons/if_darth-vader_1626615.svg';
import icon1 from '../icons/if_obiwan-kenobi_1626629.svg';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChosen: false,
      inputValue: '',
      e: {},
    }
  }

  updateInputValue(e) {
    e.preventDefault();
    this.setState({
      e: e,
      inputValue: e.target.value
    });
  }

  handleCategoryChoosing(){
    this.setState({
      isChosen: true
    })
    
    let nav = document.getElementById('Nav-menu');
    nav.classList.toggle('open');
    let el = document.getElementById('input');
    if(el.classList.contains('close')){
      el.classList.toggle('close');
      el.setAttribute('placeholder', 'Search in category' )
      el.classList.toggle('open');
    }
      
  }

  handleIconClick(){
    let el = document.getElementById('input');
    let icon = document.getElementById('Nav-icon');
    icon.classList.toggle('fade');
    if(this.state.isChosen > 0){
      el.setAttribute('placeholder', 'Search in category' )
      el.classList.toggle('open');
    }
    else{
      el.setAttribute('placeholder', 'Choose category' )
      el.classList.toggle('close');
    } 
  }

  handleNavBarOpen(){
    let el = document.getElementById('Nav-menu');
    el.classList.toggle('open');
  }

  render(){
    return (
      <div className = 'Navbar'>
        <div className="Nav-container">
          <ul id = 'Nav-menu' className = 'Nav-menu'>
            {this.props.categoryList.map((i,index) =>
              <li 
                key = {i} 
                id = {index}
                className = 'Nav-menu-item'
                onMouseUp = {() => {this.handleCategoryChoosing()}}
                onClick = {() => this.props.onClick(i, index)}>{i}</li>
            )}  
          </ul>
        </div>
        <img 
          src={icon1} 
          alt="icon" 
          id = 'Nav-icon'
          className = 'Nav-icon' 
          onClick = {() => this.handleNavBarOpen()}
        />
        <div id="form-container" className="form-container">
          <form 
          className="search"
          onSubmit = {() => this.props.onSubmit(this.state.e, this.state.inputValue)}
          >
            <img 
              src={icon} 
              alt="icon" 
              className = 'search-icon' 
              onClick = {() => this.handleIconClick()}
            />
            <input 
              id = 'input'
              type="text" 
              
              className = 'search-field'
              onChange={e => this.updateInputValue(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NavBar;
