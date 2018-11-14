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

  componentDidMount(){
    
  }

  handleClick = (category) => {
    this.setState({
      categoryChosen: category
    });
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


//app have state for search and rerender searchbar anytime its changed and get search info then on submit changes the content via props