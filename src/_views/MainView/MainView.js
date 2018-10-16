import React, { Component } from 'react';

//import styles from '../../_styles/_bulma_variables.sass'

import { AboutMe } from '../AboutMe'
import { Skills } from '../Skills'
import { TopNavbar } from '../TopNavbar'
import { BottomNavbar } from '../BottomNavbar'
import {  Route,  Switch} from 'react-router-dom'


class MainView extends Component {
  render() {
    return (
  <div>
  <TopNavbar />
  <section className="hero is-fullheight is-bold is-dark">
  <div className="hero-body container has-text-centered">
  <Switch>
      <Route exact path="/" component={AboutMe} />
    <Route exact path="/skills" component={Skills} />
  </Switch>
   
  </div>

</section>
 <BottomNavbar />
</div>
    
    );
  }
}

export { MainView }
