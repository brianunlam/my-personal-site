import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import styles from '../../_styles/_bulma_variables.sass'
import HuaweiImg from '../../_images/huawei.svg'
import ArsatImg from '../../_images/arsat.png'

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
        <article className="media scale">
          <figure className="media-left">
            <p className="image is-64x64">
              
              <img src={ArsatImg} />
              
            </p>
          </figure>
          <div className="media-content">
            <div className="content is-small">
              <p className="title is-5">
                Arsat
              </p>
              <p className="subtitle is-6" style={{marginBottom: "1px"}}>
                Software Developer
              </p>
              <p className="is-small">
                Web Application Development, for monitoring and controlling Telecommunications networks. 
                Script programming to collect information in Networks using SNMP, XML, TMF814 and custom tools. 
                Software design. 
                Server Admin and Infrastructure (Ubuntu, RedHat, Docker) 
                Technical Support Level 3 DWDM (Ciena, Alcatel, Huawei, ZTE)
              </p>
            </div>
          </div>
        </article>
        <article className="media scale">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={HuaweiImg} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content is-small">
              <p className="title is-5">
                Huawei Technologies
              </p>
              <p className="subtitle is-6" style={{marginBottom: "1px"}}>
                Optical Engineer
              </p>
              <p className="is-small">
                Technical Support in Optical Networks: SDH, DWDM, PTN, MicroWave. 
                Development of applications to test equipment commissioning
              </p>
            </div>
          </div>
        </article>
       </div>
     )
     
    
    
  }
}

export { WorkExperience }
