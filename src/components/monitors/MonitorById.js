import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Link } from 'react-router';
import {addInBascket} from '../../actions/BascketAction'
import {readProduct} from '../../actions/ProductByIdAction'
import { URL_MONITOR } from '../../constants/urls'
import '../../styles/product.css'


class MonitorById extends Component {

  componentDidMount(){
    // console.log('this.props.product.name: '+this.props.product.img);
    this.props.dispatch(readProduct(`${URL_MONITOR}/${this.props.params.id}`));
  }

  _addInBascket(e){
    e.preventDefault();
    this.props.dispatch(addInBascket(this.props.product));
  }

  render() {
    console.log('this.props.currentlySending: '+this.props.currentlySending);
    const product=this.props.currentlySending ? (
          <div className="loading-div-large"></div>
        ): (
        <div className="profile-wrapper">
          <div className="profile-div">
            <h3>{this.props.product.name}</h3>
            <div className="details-wrapper">
              <div className="img-div">
                <img src={this.props.product.img} alt=""/>
              </div>
              <table>
                <tbody>
                <tr>
                  <td className="detail-name">Name:</td>
                  <td className="detail-value">{this.props.product.name}</td>
                </tr>
                <tr>
                  <td className="detail-name">inch:</td>
                  <td className="detail-value">{this.props.product.inch}</td>
                </tr>
                <tr>
                  <td className="detail-name">Price:</td>
                  <td className="detail-value">{this.props.product.pricePer}$</td>
                </tr>
                </tbody>
              </table>
              <div className="discription">
                <div className="discription-name">
                  Discription:
                </div>
                <div className="discription-text">
                  {this.props.product.description}
                </div>
              </div>
              <input type="button" onClick={::this._addInBascket} value="Add to cart"/>
              <input type="button" onClick={this.props.router.goBack} value="Back"/>
            </div>
          </div>
        </div>
      );
    return(
      <div>{product}</div>
    )
  }
}

function mapStateToProps (state) {
  return {
    product: state.productById.currentProduct,
    currentlySending: state.productById.currentlySending
  }
}


export default connect(mapStateToProps)(MonitorById);
