import React, { Component } from 'react';
import './NavBar.css';
import icon from '../icons/if_darth-vader_1626615.svg';

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
    
    let el = document.getElementById('input');
    if(el.classList.contains('close')){
      el.classList.toggle('close');
      el.setAttribute('placeholder', 'Search in category' )
      el.classList.toggle('open');
    }
      
  }

  handleIconClick(){
    let el = document.getElementById('input');
    if(this.state.isChosen > 0){
      el.setAttribute('placeholder', 'Search in category' )
      el.classList.toggle('open');
    }
    else{
      el.setAttribute('placeholder', 'Choose category' )
      el.classList.toggle('close');
    } 
  }

  render(){
    return (
      <div className = 'Navbar'>
        <ul className = 'Nav-menu'>
          {this.props.categoryList.map((i,index) =>
            <li 
            key = {i} 
            id = {index}
            className = 'Nav-menu-item'
            onMouseUp = {() => {this.handleCategoryChoosing()}}
            onClick = {() => this.props.onClick(i, index)}>{i}</li>
          )}
        </ul>
        <div className="form-container">
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
            <span className = 'search-button'></span>
          </form>
        </div>
      </div>
    );
  }
}

export default NavBar;