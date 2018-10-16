import React, { Component } from 'react';
import { Progress } from '../_Progress'
//import styles from '../../_styles/_bulma_variables.sass'


class Skill extends Component {
  render() {
    //console.log(styles)
    return (
  <div className="content is-small"> 
    <p className="has-text-centered">{ this.props.name }</p>
    <Progress percentage={this.props.percentage} />
  

</div>
    );
  }
}

export { Skill }
