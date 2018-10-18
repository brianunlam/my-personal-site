import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import styles from '../../_styles/_bulma_variables.sass'
import { UbuntuIcon } from '../../_components/_UbuntuIcon'
import { Flip } from '../../_components/_Flip'
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
      
      <div className="column is-mobile has-text-centered fadeIn "  
        key={tech} 
      >
             <Flip>
                <FontAwesomeIcon spin={spin} size="3x" icon={['fab', tech]} color="white" />
              </Flip>
         
	    </div>
     )
     })
    
    
    
    return (
      
      
      
      
    <article className="tile is-child box is-dark">
      <nav className="columns is-mobile is-multiline fadeIn">
        { renderTechnologies }
        <div className="column is-mobile has-text-centered">
            <Flip>
            <UbuntuIcon />
            </Flip>
        </div>
      </nav>   
    </article>
    );
  }
}

export { Technologies }
