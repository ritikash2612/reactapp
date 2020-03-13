import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

export default class App extends Component{  
  render(){ // equivalent to React.render
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>Cafe Confusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

