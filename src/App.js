import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Input name="email" label="Email" type="text"></Input>
          <Input name="password" label="Password" type="password"></Input>
          <input type="submit"></input>
          
        </header>
      </div>
    );
  }
}

export default App;
