import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Link } from 'react-router';
import {readProduct, updateProduct} from '../../actions/ProductByIdAction'
import { URL_MONITOR } from '../../constants/urls'
import '../../styles/product.css'


export class ProductByIdEdit extends Component {

  componentDidMount(){
    this.props.dispatch(readProduct(`${URL_MONITOR}?id=${this.props.params.id}`));
  }

  _updateProduct(e){
    e.preventDefault();
    this.props.dispatch(updateProduct(URL_MONITOR, this.props.product));
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
                  <td className="detail-value"><input ref="name" type="text" defaultValue={this.props.product.name}/></td>
                </tr>
                <tr>
                  <td className="detail-name">inch:</td>
                  <td className="detail-value"><input ref="inch" type="text" defaultValue={this.props.product.inch}/></td>
                </tr>
                <tr>
                  <td className="detail-name">Price:</td>
                  <td className="detail-value"><input ref="pricePer" type="text" defaultValue={this.props.product.pricePer}/></td>
                </tr>
                </tbody>
              </table>
              <div className="discription">
                <div className="discription-name">
                  Discription:
                </div>
                <div className="discription-text">
                  <textarea className="textarea-discription" ref="discription">{this.props.product.description}</textarea>
                </div>
              </div>
              <input type="button" onClick={::this._updateProduct} value="Edit"/>
              <input type="button" onClick={::this._updateProduct} value="REMOVE"/>
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


export default connect(mapStateToProps)(ProductByIdEdit);
