import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainWrapper from '../components/MainWrapper'
import * as bascketActions from '../actions/BascketAction'


class MainContainer extends Component {
  render() {
    const { products }=this.props;
    const { addInBascket } = this.props.bascketActions;
    console.log('MainContainer render');
    return (
        <MainWrapper products={products} addInBascket={addInBascket}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bascketActions: bindActionCreators(bascketActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
