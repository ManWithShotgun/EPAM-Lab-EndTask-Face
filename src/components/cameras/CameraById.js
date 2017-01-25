import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addInBascket} from '../../actions/BascketAction'
import {readProduct} from '../../actions/ProductByIdAction'
import { URL_CAMERA } from '../../constants/urls'
import '../../styles/product.css'
import '../../styles/formErr.css'


class CameraById extends Component {

  componentDidMount(){
    this.props.dispatch(readProduct(`${URL_CAMERA}/${this.props.params.id}`));
  }

  _addInBascket(e){
    e.preventDefault();
    this.props.dispatch(addInBascket(this.props.product));
  }

  render() {
    console.log('this.props.currentlySending: '+this.props.currentlySending);
    try{
      var product=this.props.currentlySending ? (
            <div className="loading-div-large"></div>
          ): (
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
                  <td className="detail-name">MP:</td>
                  <td className="detail-value">{this.props.product.MP}</td>
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
        );
      }catch(e){
        console.log('product undefined; Generally it is error happen on first load');
      }
    return(
      <div className="profile-wrapper">
        <div className="profile-div">
          <h3>Info</h3>
          <div className="form__error-wrapper">
            <p className="form__error form__error--field-missing">Error!</p>
          </div>
          {product}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    product: state.productById.currentProduct,
    currentlySending: state.productById.currentlySending
  }
}

export default connect(mapStateToProps)(CameraById);
