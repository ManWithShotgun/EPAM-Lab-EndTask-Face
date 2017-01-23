import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
// import { Link } from 'react-router';
import { createProduct } from '../../actions/ProductByIdAction'
import { URL_MONITORS } from '../../constants/urls'
import '../../styles/product.css'
import '../../styles/formErr.css'


class CreateMonitor extends Component {

  _createProduct(e){
    e.preventDefault();
    let name = ReactDOM.findDOMNode(this.refs.name).value;
    let inch = ReactDOM.findDOMNode(this.refs.inch).value;
    let pricePer = ReactDOM.findDOMNode(this.refs.pricePer).value;
    let img = ReactDOM.findDOMNode(this.refs.photo).value;
    let discription = ReactDOM.findDOMNode(this.refs.discription).value;
    this.props.dispatch(createProduct(URL_MONITORS, {name, inch, pricePer, img, discription}));
  }

  render() {
    //<input ref="photo" type="text"/>
    //<input ref="photo" type="file" name="photo" multiple accept="image/*,image/jpeg"/>
    /*
    <tr>
      <td className="detail-name">img URL:</td>
      <td className="detail-value"><input ref="photo" type="text" defaultValue={this.props.product.img}/></td>
    </tr>

    */
    console.log('this.props.currentlySending: '+this.props.currentlySending);
    const product=this.props.currentlySending ? (
          <div className="loading-div-large"></div>
        ): (
          <div className="details-wrapper">
            <table>
              <tbody>
              <tr>
                <td className="detail-name">Name:</td>
                <td className="detail-value"><input ref="name" type="text" defaultValue=""/></td>
              </tr>
              <tr>
                <td className="detail-name">inch:</td>
                <td className="detail-value"><input ref="inch" type="text" defaultValue=""/></td>
              </tr>
              <tr>
                <td className="detail-name">Price:</td>
                <td className="detail-value"><input ref="pricePer" type="text" defaultValue=""/></td>
              </tr>
              <tr>
                <td className="detail-name">img URL:</td>
                <td className="detail-value"><input ref="photo" type="text" defaultValue=""/></td>
              </tr>
              </tbody>
            </table>
            <div className="discription">
              <div className="discription-name">
                Discription:
              </div>
              <div className="discription-text">
                <textarea ref="discription" className="textarea-discription" defaultValue="" />
              </div>
            </div>
            <input type="button" onClick={::this._createProduct} value="Create"/>
            <input type="button" onClick={this.props.router.goBack} value="Back"/>
          </div>
      );
    return(
      <div className="profile-wrapper">
        <div className="profile-div">
          <h3>Create</h3>
          <div className="form__error-wrapper">
            <p className="form__error form__error--field-missing">Error!</p>
            <p className="form__error form__error--success">Done!</p>
          </div>
          {product}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentlySending: state.productById.currentlySending
  }
}


export default connect(mapStateToProps)(CreateMonitor);
