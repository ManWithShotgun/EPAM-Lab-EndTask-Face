import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
// import { Link } from 'react-router';
import { createProduct } from '../../actions/ProductByIdAction'
import { URL_CAMERAS } from '../../constants/urls'
import '../../styles/product.css'
import '../../styles/formErr.css'


class CreateCamera extends Component {

  _createProduct(e){
    e.preventDefault();
    let name = ReactDOM.findDOMNode(this.refs.name).value;
    let MP = ReactDOM.findDOMNode(this.refs.MP).value;
    let pricePer = ReactDOM.findDOMNode(this.refs.pricePer).value;
    let img = ReactDOM.findDOMNode(this.refs.photoURL).value;
    let description = ReactDOM.findDOMNode(this.refs.description).value;

    if(!img){//если photoURL пуст то загрузка photoFile
      img = ReactDOM.findDOMNode(this.refs.photoFile).files[0];
      let reader=new FileReader();
      reader.onloadend=function(){
        this.props.dispatch(createProduct(URL_CAMERAS, {name, MP, pricePer, img:'none', description}, reader.result));
      }.bind(this);
      reader.readAsDataURL(ReactDOM.findDOMNode(this.refs.photoFile).files[0]);
      return;
    }
    //else
    this.props.dispatch(createProduct(URL_CAMERAS, {name, MP, pricePer, img, description}, ''));
  }

  changePreviewImg(){
    let previewImg = ReactDOM.findDOMNode(this.refs.previewImg);
    let img = ReactDOM.findDOMNode(this.refs.photoFile).files[0];
    let reader=new FileReader();
    reader.onloadend=function(){
      previewImg.src=reader.result;
    };
    if (img) {
      reader.readAsDataURL(img);
    } else {
      previewImg.src = '';
    }
  }
  changePreviewImgURL(){
    let previewImg = ReactDOM.findDOMNode(this.refs.previewImg);
    let imgURL = ReactDOM.findDOMNode(this.refs.photoURL).value;
    previewImg.src=imgURL;
  }

  render() {
    console.log('this.props.currentlySending: '+this.props.currentlySending);
    const product=this.props.currentlySending ? (
          <div className="loading-div-large"></div>
        ): (
          <div className="details-wrapper">
            <div className="img-div">
              <img ref="previewImg" alt=""/>
            </div>
            <table>
              <tbody>
              <tr>
                <td className="detail-name">Name:</td>
                <td className="detail-value"><input ref="name" type="text" defaultValue=""/></td>
              </tr>
              <tr>
                <td className="detail-name">MP:</td>
                <td className="detail-value"><input ref="MP" type="text" defaultValue=""/></td>
              </tr>
              <tr>
                <td className="detail-name">Price:</td>
                <td className="detail-value"><input ref="pricePer" type="text" defaultValue=""/></td>
              </tr>
              <tr>
                <td className="detail-name">img URL:</td>
                <td className="detail-value"><input ref="photoURL" type="text" onChange={::this.changePreviewImgURL} defaultValue=""/></td>
              </tr>
              <tr>
                <td className="detail-name">img FILE:</td>
                <td className="detail-value"><input ref="photoFile" type="file" name="photoFile" onChange={::this.changePreviewImg} accept="image/*,image/jpeg"/></td>
              </tr>
              </tbody>
            </table>
            <div className="discription">
              <div className="discription-name">
                Discription:
              </div>
              <div className="discription-text">
                <textarea ref="description" className="textarea-discription" defaultValue="" />
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


export default connect(mapStateToProps)(CreateCamera);
