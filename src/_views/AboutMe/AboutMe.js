import React, { Component } from 'react';

//import styles from '../../_styles/_bulma_variables.sass'
import { Skills } from '../Skills'
import { FadeOut } from '../../_components/_Fade'
import { Presentation } from '../Presentation'
import { Technologies } from '../Technologies'
import { WorkExperience } from '../WorkExperience'
class AboutMe extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      fade: false
    }
    
  }
  
  componentDidMount() {
  console.log(this.state.fade)
  if (!this.state.fade) {
    this.setState({
        fade: true
      })
  }
}
  
  render() {
    return (
      <div className="container">  

    <div className="tile is-ancestor">
  <div className="tile is-vertical is-10">
    <div className="tile">
      <div className="tile is-parent is-vertical">
     
        <article className="tile is-child box is-dark">
        <FadeOut in={this.state.fade}>
          <Presentation />
        </FadeOut>
        </article>
        <Technologies />  
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box is-dark">
               <FadeOut in={this.state.fade}>
        <WorkExperience /> 
       
         
      </FadeOut>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-dark">
        <p className="title">Wide tile</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
         bla bla
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent is-2">
           <Skills />
  </div>
</div>
    
    </div>
    
    );
  }
}

export { AboutMe }
