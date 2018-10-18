import React, { Component } from 'react';

//import styles from '../../_styles/_bulma_variables.sass'

class Presentation extends Component {
  
 
  render() {
    return (
      <div>
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
      </div>
    
    );
  }
}

export { Presentation }
