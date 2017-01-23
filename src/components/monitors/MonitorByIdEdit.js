import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
// import { Link } from 'react-router';
import {readProduct, updateProduct, deleteProduct} from '../../actions/ProductByIdAction'
import { URL_MONITOR } from '../../constants/urls'
import '../../styles/product.css'


class MonitorByIdEdit extends Component {

  componentDidMount(){
    this.props.dispatch(readProduct(`${URL_MONITOR}/${this.props.params.id}`));
  }

  _updateProduct(e){
    e.preventDefault();
    let name = ReactDOM.findDOMNode(this.refs.name).value;
    let inch = ReactDOM.findDOMNode(this.refs.inch).value;
    let pricePer = ReactDOM.findDOMNode(this.refs.pricePer).value;
    let img = ReactDOM.findDOMNode(this.refs.photo).value;
    let discription = ReactDOM.findDOMNode(this.refs.discription).value;
    this.props.dispatch(updateProduct(`${URL_MONITOR}/${this.props.params.id}`, {id: this.props.product.id, name, inch, pricePer, img, discription}));
  }

  _deleteProduct(e){
    e.preventDefault();
    this.props.dispatch(deleteProduct(`${URL_MONITOR}/${this.props.params.id}`));
  }

  render() {
    ///Как грузить img на сервер? пока только URL
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
              <tr>
                <td className="detail-name">img URL:</td>
                <td className="detail-value"><input ref="photo" type="text" defaultValue={this.props.product.img}/></td>
              </tr>
              </tbody>
            </table>
            <div className="discription">
              <div className="discription-name">
                Discription:
              </div>
              <div className="discription-text">
                <textarea ref="discription" className="textarea-discription" defaultValue={this.props.product.description} />
              </div>
            </div>
            <input type="button" onClick={::this._updateProduct} value="Edit"/>
            <input type="button" onClick={::this._deleteProduct} value="REMOVE"/>
            <input type="button" onClick={this.props.router.goBack} value="Back"/>
          </div>
      );
    return(
      <div className="profile-wrapper">
        <div className="profile-div">
          <h3>Edit</h3>
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
    product: state.productById.currentProduct,
    currentlySending: state.productById.currentlySending
  }
}


export default connect(mapStateToProps)(MonitorByIdEdit);