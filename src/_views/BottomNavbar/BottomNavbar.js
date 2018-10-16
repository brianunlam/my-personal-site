import React, { Component } from 'react';

//import styles from '../../_styles/_bulma_variables.sass'
import { NavLink } from 'react-router-dom'

class BottomNavbar extends Component {
  render() {
    return (
  
<nav className=" navbar tabs is-boxed is-fullwidth is-fixed-bottom is-dark">
      <div className="container">
        <ul>
          <li className="navbar-item"><NavLink exact to="/" activeClassName="navbar-item is-active">About Me</NavLink></li>
          <li className="navbar-item"><NavLink exact to="/skills" activeClassName="navbar-item is-active">Skills</NavLink></li>
          <li className="navbar-item"><NavLink exact to="/other" activeClassName="navbar-item is-active">Experience</NavLink></li>
        </ul>
      </div>
    </nav>
    
    );
  }
}

export { BottomNavbar }
