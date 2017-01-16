import React , { Component } from 'react'
export default class DisplayProducts extends Component{
  constructor() {
    super();
    this.state={
      gridClassName: 'grid active',
      detailClassNeme: 'detail'
    }
  }

  handleChangeActive(e){
    console.log('handleChangeActive');
    e.preventDefault();
    this.setState({
      gridClassName:(this.state.gridClassName==='grid active')?'grid':'grid active',
      detailClassNeme:(this.state.detailClassNeme==='detail active')?'detail':'detail active'
    });
    this.props.changeDisplayProducts();
  }


  render(){
    return(
      <div className="display">
        <a className={this.state.gridClassName} onClick={::this.handleChangeActive} href="#">Grid</a>
        <a className={this.state.detailClassNeme} onClick={::this.handleChangeActive} href="#">Detail</a>
      </div>
    )
  }
}
