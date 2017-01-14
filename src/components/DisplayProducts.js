import React , { Component } from 'react'
export default class DisplayProducts extends Component{
  render(){
    return(
      <div className="display">
        <a className="grid active" href="#">Grid</a>
        <a  className="detail" href="#">Detail</a>
      </div>
    )
  }
}
