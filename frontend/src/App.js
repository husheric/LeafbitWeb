import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Marketplace from './Components/Marketplace';
import './stylesheets/nav.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="sidebar">
          <Link to="/">Marketplace</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Marketplace} />
          <Route path="/profile" component={Marketplace} />
        </Switch>
      </div>
    );
  }
}

export default App;
