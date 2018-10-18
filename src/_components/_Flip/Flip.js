import React, { Component} from 'react'


const flip = {
    
 
}

const onFlip = {
    transform: "rotateY(720deg)",
    transition: "all 1s ease-in-out 0s"
}


 

class Flip extends Component {

constructor(props){
      super(props)
      this.state = {
          fliping: false,
          style: { ...flip}
      }
  }
  
  flip = () =>{
      if(!this.state.fliping){
        this.setState({ style: {...flip, ...onFlip}, fliping: true})
          setTimeout(()=>{
              this.setState({
                  style: { ...flip},
                  fliping: false
              })
          }, 1000)    
      }
  }
  
  
  mouseEnter = () =>{
      this.flip()
  }






    render() {

        
       

        return (
        <div style={this.state.style}
        onMouseEnter={this.mouseEnter}
        onClick={this.flip}
        >
        {    this.props.children }
        </div>
        
    )

    }


}





export { Flip }
