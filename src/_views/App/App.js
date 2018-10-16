import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter } from 'react-router-dom'
import { MainView } from '../MainView'

library.add(fab, fas)


class App extends Component {
  render() {
    return (

<BrowserRouter>
  <MainView  />

</BrowserRouter>
 
    );
  }
}

export { App }
