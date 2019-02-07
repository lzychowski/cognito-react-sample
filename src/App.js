import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">

            {/* <Input name="email" label="Email" type="text"></Input>
            <Input name="password" label="Password" type="password"></Input>
            <input type="submit"></input> */}

            <Route exact path="/" component={Home} />
            <Route path="/callback" component={Callback} />
            
          </header>
        </div>
      </Router>
      
    );
  }
}

const Home = () => (
  <div>
    <a href="https://les-hackday.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=2cqihi71uocc67ijkekos2t9jm&redirect_uri=https://zen-jepsen-8d8056.netlify.com/callback" style={{color: "white"}}>Login</a>
  </div>
)

const Callback = () => (
  <div>
    Welcome
  </div>
)

export default App;
