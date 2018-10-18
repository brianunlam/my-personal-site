import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import styles from '../../_styles/_bulma_variables.sass'
import { UbuntuIcon } from '../../_components/_UbuntuIcon'

let technologies = [
 "react","node", "js-square", "docker", "linux", "git","html5","css3-alt","sass"
]



class Technologies extends Component {
  
  
  
 
  
  render() {
    
     let renderTechnologies = technologies.map((tech)=>{
     let spin = false
     if(tech==="react"){
       spin=true
     }
     
     return (
      
      <div className="column is-mobile has-text-centered">
        <FontAwesomeIcon spin={spin} size="3x" icon={['fab', tech]} color="white" />
      </div>
      
     )
     })
    
    
    
    return (
      
      
      
      
    <article className="tile is-child box is-dark">
      <nav className="columns is-mobile is-multiline">
        { renderTechnologies }
        <div className="column is-mobile has-text-centered">
            <UbuntuIcon />
        </div>
      </nav>   
    </article>
    );
  }
}

export { Technologies }
