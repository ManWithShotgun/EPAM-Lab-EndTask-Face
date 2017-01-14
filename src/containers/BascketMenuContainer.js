import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BascketMenu from '../components/BascketMenu'
import * as bascketActions from '../actions/BascketAction'


class BascketMenuContainer extends Component {
  render() {
    const { bascket }=this.props;
    return (
        <BascketMenu bascket={bascket} actions={this.props.bascketActions}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    bascket: state.bascket
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bascketActions: bindActionCreators(bascketActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BascketMenuContainer);
