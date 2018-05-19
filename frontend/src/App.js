import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Marketplace from './Components/Marketplace';
import './stylesheets/nav.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sidebar: false
    }
  }

  handleSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render() {
    console.log(this.state)
    const sidebarClass = this.state.sidebar ? `hidden` : `visible`

    return (
      <div>
        {/* <nav className="sidebar">
          <div onClick={this.handleSidebar}>
            <i className="fas fa-caret-right"></i>
          </div>
          <div className={`sidebar-${sidebarClass}`}>
            <Link to="/"><i className="fas fa-store"></i></Link>
            <Link to="/plant"><i className="fas fa-tree"></i></Link>
            <Link to="/profile"><i className="fas fa-user"></i></Link>
          </div>
        </nav> */}
        <Switch>
          <Route exact path="/" component={Marketplace} />
          <Route path="/plant" component={Marketplace} />
          <Route path="/profile" component={Marketplace} />
        </Switch>
      </div>
    );
  }
}

export default App;
