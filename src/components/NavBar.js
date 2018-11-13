//Films People Planets Starships Creatures and searchbar. change handlers that said to rerender and change content.
import React, { Component } from 'react';
import './NavBar.css';




class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChosen: false,
    }
  }



  handleSubmitButton(){

  }


  render(){
    return (
      <div className = 'Navbar'>
        <ul>
          <li>People</li>
          <li>Planets</li>
          <li>Species</li>
          <li>Starships</li>
          <li>Vehicles</li>
          <li>Films</li>
        </ul>
        <div className="searchBar"></div>
        <button onSubmit = {this.handleSubmitButton()}>Popl</button>
      </div>
    );
  }
}







export default NavBar;