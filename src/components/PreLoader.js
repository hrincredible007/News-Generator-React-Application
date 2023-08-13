import React, { Component } from 'react'
import loader from './loader.gif'
export default class PreLoader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="Loader" style={{width: '35px', height: '35px'}} />
      </div>
    )
  }
}
