import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
// import MenuComp from './components/MenuComp';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/Dishes';
import './App.css';

export default class App extends Component{  

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  



  render(){ // equivalent to React.render
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>Cafe Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}/>
        {/* <MenuComp/> */}
      </div>
    );
  }
}

