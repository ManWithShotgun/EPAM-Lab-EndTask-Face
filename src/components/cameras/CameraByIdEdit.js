import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
// import { Link } from 'react-router';
import {readProduct, updateProduct, deleteProduct} from '../../actions/ProductByIdAction'
import { URL_CAMERA } from '../../constants/urls'
import '../../styles/product.css'
import '../../styles/formErr.css'


class MonitorByIdEdit extends Component {

  componentDidMount(){
    this.props.dispatch(readProduct(`${URL_CAMERA}/${this.props.params.id}`));
  }

  _updateProduct(e){
    e.preventDefault();
    let name = ReactDOM.findDOMNode(this.refs.name).value;
    let MP = ReactDOM.findDOMNode(this.refs.MP).value;
    let pricePer = ReactDOM.findDOMNode(this.refs.pricePer).value;
    let img = ReactDOM.findDOMNode(this.refs.photo).value;
    let description = ReactDOM.findDOMNode(this.refs.description).value;
    this.props.dispatch(updateProduct(`${URL_CAMERA}/${this.props.params.id}`, {id: this.props.product.id, name, MP, pricePer, img, description}));
  }

  _deleteProduct(e){
    e.preventDefault();
    this.props.dispatch(deleteProduct(`${URL_CAMERA}/${this.props.params.id}`));
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
                <td className="detail-value"><input ref="name" type="text" defaultValue={this.props.product.name}/></td>
              </tr>
              <tr>
                <td className="detail-name">MP:</td>
                <td className="detail-value"><input ref="MP" type="text" defaultValue={this.props.product.MP}/></td>
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
                <textarea ref="description" className="textarea-discription" defaultValue={this.props.product.description} />
              </div>
            </div>
            <input type="button" onClick={::this._updateProduct} value="Edit"/>
            <input type="button" onClick={::this._deleteProduct} value="REMOVE"/>
            <input type="button" onClick={this.props.router.goBack} value="Back"/>
          </div>
      );
    }catch(e){
      console.log('product undefined; Generally it is error happen on first load');
    }
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
