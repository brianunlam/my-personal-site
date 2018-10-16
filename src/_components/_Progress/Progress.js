import React, { Component } from 'react';





class Progress extends Component {
  
  colorPercentage = ( percentage )=>{
    
    if(percentage < 10){
      return "is-danger"
    }else if( percentage < 20){
      return "is-warning"
    }else if( percentage < 50){
      return "is-info"
    }else if ( percentage < 80){
      return "is-primary"
    }
    return "is-success"
  }
  
  
  
  
  render() {
    const { percentage } = this.props
    
    return (
  
    <progress className={"progress is-small " + this.colorPercentage(percentage)} value={percentage} max="100">{percentage}%</progress>

    );
  }
}

export { Progress }
