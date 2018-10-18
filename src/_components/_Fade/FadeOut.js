import React, { Component} from 'react'

import { Transition } from 'react-transition-group'



//por default la opacidad es 1, es decir que se ve

const defaultStyle = {

  opacity: 0,

}

//cuando pongo el in en true, pasa a estado entering, y seteo la opacidad en 0
// luego de que pasa el tiempo del timeout, se pone la opacidad en 1 con la transición de 1500ms
// el timeout se pone en 1ms ya que cuando apreto el botón para mostrar el panel, este se debe poner
//transparente, y al instante ponerse visible para comenzar la transición
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 , transition: "opacity 1500ms ease-in"},
  //exiting: { opacity: 0.2 },
  //exited: { opacity: 1, transition: "opacity 1000ms ease-out" }
};





class FadeOut extends Component {


    render() {





        return (

            <Transition
                in = {this.props.in} //comienza cambio de estado al ponerse en true
                exit= {false}
                timeout={{
                    enter: 2,  //el tiempo entre entering y entered
                  //  exit:1 //el tiempo entre exiting y exited
                }}
            >
                {(state) => (          //en state puede estar entering, entered, existing, exited
                    <div style={{
                    ...defaultStyle,   //aplico el estilo default que es opacidad 1, para que sea visible
                    ...transitionStyles[state] //desde acá, según el state se va a setear el estilo que
                    }}>                        {/* // corresponda a la transición     */}
                        {this.props.children }
                    </div>
                )}
             </Transition>
    )

    }


}


/*
  Wizard.defaultProps ={
      prev: "Prev",
      next: "Next",
      finish: "Finish"
  }


  Wizard.propTypes = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      prev: PropTypes.string,
      next: PropTypes.string,
      finish: PropTypes.string,
      _onNext: PropTypes.func.isRequired,
      children: function (props, propName, componentName) {
          //checks that Wizard receive Steps children.
          var prop = props[propName]
          if (!prop){
              error = new Error('`' + componentName + '`should have at least one Step component as child.')
              return error
          }
          var error
          React.Children.forEach(prop, function (el) {
              if(error) return
              if (el.type.name !== 'Step'){
                  error = new Error('`' + componentName + '` only accepts Steps componentes.')
              }
          })
         return  error
    }

  }

*/




export { FadeOut }
