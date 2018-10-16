import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import styles from '../../_styles/_bulma_variables.sass'

class TopNavbar extends Component {
  render() {
    return (
  
<header className="navbar is-fixed-top is-dark">
      <div className="container">
  <div className="navbar-brand">
    <div className="navbar-item">
      <FontAwesomeIcon icon="code" size="lg" />
     
    </div>
    
     <span className="navbar-item is-size-5 has-text-white-ter is-italic has-text-weight-bold">Brian Alonso</span>
               <span className="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
 
     
     
      </div>
      <div className="navbar-menu">
      <div className="navbar-end">
      <div className="navbar-item is-active">
        <div className="field is-grouped">
          <p className="control">
            <a className="button is-dark" data-social-network="Linkedin"  data-social-target="https://www.linkedin.com/in/brian-alonso-95371259" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brian-alonso-95371259">
              <span className="icon">
              
                <FontAwesomeIcon icon={['fab',"linkedin"]} />
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/brianunlam">
              <span className="icon">
                 <FontAwesomeIcon icon={['fab',"github"]} />
              </span>
             
            </a>
          </p>
      </div>
      </div>
      </div>
    </div>
  
</div>
  
    </header>
    
    );
  }
}

export { TopNavbar }
