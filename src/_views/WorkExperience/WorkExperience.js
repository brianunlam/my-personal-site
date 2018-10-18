import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import styles from '../../_styles/_bulma_variables.sass'


class WorkExperience extends Component {
  
  
  
 
  
  render() {
    
    //  let renderWorkExperience = WorkExperience.map((tech)=>{
    //  let spin = false
    //  if(tech==="react"){
    //   spin=true
    //  }
     
     return (
      <div>
        <p className="title">Work Experience</p>
          <p className="subtitle">Withd an image</p>
          
        <article className="media">
  <figure className="media-left">
    <p className="image is-64x64">
      <img src="https://image.flaticon.com/icons/svg/882/882738.svg" />
    </p>
  </figure>
  <div className="media-content">
    <div className="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav className="level is-mobile">
      <div className="level-left">
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-reply"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-retweet"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div className="media-right">
    <button className="delete"></button>
  </div>
</article>
<article className="media">
  <figure className="media-left">
    <p className="image is-64x64">
      <img src="https://lh3.googleusercontent.com/-HPFUzGWPe6X0bZj4-UgBSFB0Tm2jtwTFwVl35uFf3UA6ZnNUf6x7291g4rlrvfbDw=s180-rw" />
    </p>
  </figure>
  <div className="media-content">
    <div className="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav className="level is-mobile">
      <div className="level-left">
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-reply"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-retweet"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div className="media-right">
    <button className="delete"></button>
  </div>
</article>
      </div>
     )
     
    
    
  }
}

export { WorkExperience }
