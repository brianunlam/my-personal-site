import React, { Component } from 'react';

class Progress extends Component {

  constructor(props) {
        super(props)
        this.state = {
            percentage: 0
        }
        let myInterval = setInterval(() => {
            if(this.state.percentage < props.percentage)
              this.setState({percentage: this.state.percentage + 1})
            else
              clearInterval(myInterval)
        }, 1);
        
    }
  
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
    const { percentage } = this.state
    return (
      <progress className={"progress is-small " + this.colorPercentage(this.props.percentage)} value={percentage} max="100">{percentage}%</progress>
    );
  }
}

export { Progress }
