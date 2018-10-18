import React, { Component } from 'react';

import { Skill } from '../../_components/_Skill'

let skills = [
  {
    name: "Javascript",
    percentage: 90
  },
  {
    name: "Ruby",
    percentage: 70
  },
  {
    name: "Docker",
    percentage: 80
  },
  {
    name:"Html",
    percentage: 75
  }
  ,
  {
    name:"Git",
    percentage: 90 
  }
  ,
  {
    name:"Ubuntu",
    percentage: 80
  }
  ,
  {
    name:"C",
    percentage: 40 
  }
  ,
  
  {
    name:"DWDM",
    percentage: 100 
  }
]



class Skills extends Component {
  render() {

    let renderSkills = skills.map(skill => (
      <div key={skill.name} className="tile is-child has-text-center scale2x">
        <Skill name={skill.name} percentage={skill.percentage} />  
      </div>
    ))


    return (
     
<div className="tile  is-child is-ancestor is-vertical box "> 
     <p className="title has-text-centered">Skills</p>
   
  { renderSkills}
</div>

    );
  }
}

export { Skills }
