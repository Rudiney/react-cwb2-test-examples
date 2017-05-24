import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import CustomSelect from './components/CustomSelect'
import PipeSelect from './containers/PipeSelect'

const options = {1: 'One', 2: 'Two', 3: 'Three'}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
            <CustomSelect placeholder='Select...'options={options} onChange={(id) => alert(`Clicked ID: ${id}`)} />
            <PipeSelect placeholder='Remote Select a Pipe...' onChange={(id) => alert(`Clicked ID: ${id}`)}/>
        </div>
      </Provider>
    )
  }
}

export default App
