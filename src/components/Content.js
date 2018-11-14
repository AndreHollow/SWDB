//if category chosen then return content of this category else return category list
import React, { Component } from 'react';
import './Content.css';
import logo1 from '../icons/if_lightsaber-luke-anh_1626625.svg';
import logo2 from '../icons/if_lightsaber-luke-rotj_1626626.svg';

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

  render(){
    if(this.props.categoryChosen === '' || this.props.categoryChosen === undefined){
      return (
        <div>PAGE INFO</div>
      )
    }
    else if(!this.state.isLoaded){
      return(
        <div className = 'loading'>Don't loaded</div>
      )  
    }
    else{
      return (
        <div className = 'App'>
          <div 
            className = 'left-arrow'
            onClick = {() => {this.fetchData(this.state.category.previous)}}
          >
            <img src={logo1} alt="prevPage"/>
          </div>
          <ul>
            {
              this.state.category.data.map((i) => (
                <li key = {i.name}>
                  {i.name}
                </li>)
              )
            }
          </ul>
          <div 
            className = 'right-arrow' 
            onClick = {() => {this.fetchData(this.state.category.next)}}
          >
            <img src={logo2} alt="nextPage"/>
          </div>
        </div>
      )
    }
  }
}

export default Content;