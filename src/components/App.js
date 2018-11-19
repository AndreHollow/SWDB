import React, { Component } from 'react';
import BottomLinks from './BottomLinks';
import Logo from './Logo';
import NavBar from './NavBar';
import Content from './Content';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      categoryChosen: '',
      categoryList: [
        'People',
        'Planets',
        'Species', 
        'Starships', 
        'Vehicles'
      ],
      searchValue: '',
    }
  }

  handleClick = (category, index) => {
    this.setState({
      categoryChosen: category
    });
    let chosen = document.getElementsByClassName('chosen');
    let element = document.getElementById(index);
    let temp;
    if(chosen.length === 0){
      element.classList.toggle('chosen');
    }
    else{
      temp = document.getElementById(chosen[0].id);
      temp.classList.toggle('chosen');
      element.classList.toggle('chosen');
    }
  }

  handleSubmit = (e, val) => {
    e.preventDefault();
    this.setState({
      searchValue: val
    })
  }

  handleSearchBar = (searchStatus) => {
    if(!searchStatus){
      this.setState({
        searchValue: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <NavBar 
          className = 'navBar'
          categoryList = {this.state.categoryList} 
          categoryChosen = {this.state.categoryChosen} 
          onClick = {this.handleClick}
          onSubmit = {this.handleSubmit}
        />
        <Content 
          className = 'content'
          categoryChosen = {this.state.categoryChosen}
          searchValue = {this.state.searchValue}
          handleSearchBar = {this.handleSearchBar}
        />
        <BottomLinks />
      </div>
    );
  }
}

export default App;