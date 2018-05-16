import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./components/Game";
import Submit from "./components/Submit";
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Game} />
            <Route exact path="/submit" component={Submit} />
            <Route component={Game} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
