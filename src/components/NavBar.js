import React, { Component } from 'react';
import './NavBar.css';


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

  render(){
    return (
      <div className = 'Navbar'>
        <ul>
          {this.props.categoryList.map((i) =>
            <li 
            key = {i} 
            onClick = {() => this.props.onClick(i)}>{i}</li>
          )}
        </ul>
        <form 
        className="searchBar"
        onSubmit = {() => this.props.onSubmit(this.state.e, this.state.inputValue)}
        >
          <input 
            id = 'input'
            type="text" 
            placeholder = 'Search in category' 
            className = 'SearchField'
            onChange={e => this.updateInputValue(e)}
             />
          <button>Search</button>
        </form>
        
      </div>
    );
  }
}

export default NavBar;