import React, { Component } from 'react'
import NavBar from './components/NavBar'
// import NavBar2 from './components/NavBar2'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>

        <NavBar/>
        <News pageSize = {5}/>
        
      </div>
    )
  }
}
