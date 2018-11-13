import React, { Component } from 'react';
import BottomLinks from './BottomLinks';
import Logo from './Logo';
import NavBar from './NavBar';
import Content from './Content';
import './App.css';

let h = new Headers();
h.append('Accept','application/json');
let req = new Request('https://swapi.co/api/people/', {
    method: 'GET',
    headers: h,
    mode: 'cors',
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      people: {
        pageNumber: [],
        data: [],
      },
    }
  }

  componentDidMount(){
    fetch(req)
      .then(
        res => {
          if(res.ok)
            return res.json();
          else 
            throw new Error("Owi6o4ka");
        }
      )
      .then(json => {
        this.setState({
          isLoaded: true,
          people: json.results,
        })
    });
  }

  render() {
    // if(!this.state.isLoaded){
    //   return(
    //     <div>Don't loaded</div>
    //   )  
    // }
    // else{
    //   return (
    //     <div className = 'App'>
    //       <ul>
    //         {this.state.people.map((i) => (
    //           <li key = {i.name}>
    //             {i.name}
    //           </li>)
    //         )}
    //       </ul>
    //     </div>
        
    //   )
    // }
    return (
      <div className="App">
        <Logo />
        <NavBar />
        <Content contentType = {''}/>
        <BottomLinks />
      </div>
    );
  }
}

export default App;


//app have state for search and rerender searchbar anytime its changed and get search info then on submit changes the content via props