import React, { Component } from 'react'
import loader from '../loader.gif'
export class Spinner extends Component {
  render() {
    return (
      <div  align="center">
        <img src={loader}  alt="" height="30"/>
      </div>
    )
  }
}

export default Spinner
