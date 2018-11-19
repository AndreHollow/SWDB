import React, { Component } from 'react';
import Item from './Item'
import './Content.css';
import logo1 from '../icons/if_lightsaber-luke-anh_1626625.svg';
import logo2 from '../icons/if_lightsaber-luke-rotj_1626626.svg';
import logoLoaging from '../icons/if_yoda_1626636.svg';
import mainYoda from '../icons/yoda_1.svg';

let h = new Headers();
h.append('Accept','application/json');


class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      category: {
        count: 0,
        next: '',
        previous: '',
        data: [],
      },
      chosenItem: [],
      itemProperties: []
    }
  }

  componentWillReceiveProps(props){
    console.log(props.searchValue)
    if(!props.searchValue || props.searchValue === undefined || props.searchValue === '')
      this.fetchData(props);
    else 
      {
        let url = `https://swapi.co/api/${props.categoryChosen.toLowerCase()}/?search=${props.searchValue}`;
        this.fetchData(url);
        
      }
  }

  defineReq = (props) =>{
    let req;
    console.log(props);
    if(typeof props === 'string'){
      req = new Request(props, 
      {
        method: 'GET',
        headers: h,
        mode: 'cors',
      });
      return req;
    }
    else {
      req = new Request(`https://swapi.co/api/${props.categoryChosen.toLowerCase()}/`,
      {
        method: 'GET',
        headers: h,
        mode: 'cors',
      });
      if(props.categoryChosen === '' || props.categoryChosen === undefined)
        return 'https://jsonplaceholder.typicode.com/users';
      else return req;
    }
  }

  fetchData = (props) =>
  {
    if(props === null)
      return
    fetch(this.defineReq(props))
      .then(
        res => {
          if(res.ok)
            return res.json();
          else 
            throw new Error("Owi6o4ka");
        }
      )
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          category: {
            count: json.count,
            next: json.next,
            previous: json.previous,
            data: json.results,
          }
        })
    });
  }

  handleOpenClick(i){
    let j = Object.values(i);
    let p = Object.keys(i);
    let element = document.getElementById('toggle');
    let modal = document.getElementById('modal-wrapper');

    this.setState({
      chosenItem: j,
      itemProperties: p
    });
    
    modal.classList.toggle('open');
    element.classList.toggle('blur');
  }

  handleCloseClick(e){
    e.preventDefault();
    let element = document.getElementById('toggle');
    let modal = document.getElementById('modal-wrapper');

    modal.classList.toggle('open');
    element.classList.toggle('blur');
  }

  render(){
    if(this.props.categoryChosen === '' || this.props.categoryChosen === undefined){
      return (
        <div className = 'content'>
          
          <div className = 'content-main'>
          <img src={mainYoda} alt="Yoda icon" className = 'main-yoda-logo'/>
            Greetings, young Padawan. <br />
            Welcome to the star wars universe. <br />
            My name is Yoda the Grand Master of the Jedi Order. <br />
            Here you can get more information about: people, planets, species, starships, vehicles.<br />
            Just choose what interests you. <br />
            You can also use search that will satisfy your interest in a certain category, <br />
            you can find search bar under the mask of Darth Vader. <br />
            Good luck to you, traveler, and may the force be with you. <br />
          </div>
        </div>
      )
    }
    else if(!this.state.isLoaded){
      return(
        <div className = 'content content-loading'>
          <img src={logoLoaging} alt="loading icon" className = 'loading-icon'/>
        </div>
      )  
    }
    else{
      return (
        <div className = 'content'>
          <div id = 'toggle' className = 'content-list'>
            <div 
              className = 'left-arrow'
              onClick = {() => {this.fetchData(this.state.category.previous)}}
            >
              <img id = 'bluesaber' src = {logo1} alt = "prevPage"/>
            </div>
            <ul className = 'items-list'>
              {
                this.state.category.data.map((i) => (
                  <li className = 'trigger' onClick = {() => this.handleOpenClick(i)} key = {i.name}>
                    {i.name}
                  </li>
                  )
                )
              }
            </ul>
            <div 
              className = 'right-arrow' 
              onClick = {() => {this.fetchData(this.state.category.next)}}
            >
              <img id = 'greensaber' src = {logo2} alt = "nextPage"/>
            </div>
          </div>
          <Item chosenItem = {this.state.chosenItem} itemProperties = {this.state.itemProperties} onClick = {this.handleCloseClick}/>
        </div>
      )
    }
  }
}

export default Content;