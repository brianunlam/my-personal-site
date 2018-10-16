import React, { Component } from 'react';

//import styles from '../../_styles/_bulma_variables.sass'
import { Skills } from '../Skills'


class AboutMe extends Component {
  render() {
    return (
      <div className="container">  

    <div className="tile is-ancestor">
  <div className="tile is-vertical is-10">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-dark">
        <nav className="level">
          <div className="level-item has-text-centered">
            <figure className="image is-128x128 has-text-centered">
       <img className="is-rounded" alt="me" src="https://media.licdn.com/dms/image/C4E03AQHEL1QH1ryfBQ/profile-displayphoto-shrink_100_100/0?e=1544659200&v=beta&t=hE-mej85Ea3xuEXf3M3eu42rKnn-z8ydf3nq95ansi4" />
    </figure>
           
          </div>
        </nav>
      
      <div className="media-content has-text-centered">
        <p className="title is-1">Hi! I'm Brian!</p>
        <p className="subtitle is-6">I'm a Software Engineer and fullstack Web Developer with a great background in Telecommunications.</p>
        I love designing, building, coding and implement software.
      I work with javascript, nodejs and ReactJs.
      </div>
        
        </article>
        <article className="tile is-child notification is-dark">
          <p className="title">...tiles</p>
          <p className="subtitle">Bottom tile</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img alt="not important" src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
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
