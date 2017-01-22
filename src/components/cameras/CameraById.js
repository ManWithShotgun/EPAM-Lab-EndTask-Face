import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Link } from 'react-router';
import {addInBascket} from '../../actions/BascketAction'
import '../../styles/product.css'


export class ProductById extends Component {

  _addInBascket(e){
    e.preventDefault();
    this.props.addInBascket({});
  }

  render() {
    /*Реализовать заброс с сервера*/
    return(
      <div className="profile-wrapper">
        <div className="profile-div">
          <h3>Orion</h3>
          <div className="details-wrapper">
            <div className="img-div">
              <img src="../src/img/Nasa-Orion-Nebula-By-RePublicDomain.jpg" alt=""/>
            </div>
            <table>
              <tbody>
              <tr>
                <td className="detail-name">Name:</td>
                <td className="detail-value">{this.props.params.id}</td>
              </tr>
              <tr>
                <td className="detail-name">Size:</td>
                <td className="detail-value">3123</td>
              </tr>
              <tr>
                <td className="detail-name">Price</td>
                <td className="detail-value">50$</td>
              </tr>
              <tr>
                <td className="detail-name">Count:</td>
                <td className="detail-value">1</td>
              </tr>
              </tbody>
            </table>
            <div className="discription">
              <div className="discription-name">
                Discription:
              </div>
              <div className="discription-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo rerum minus repellendus odit nobis, et vel. Iure ipsum asperiores autem nostrum sapiente alias dignissimos est consectetur, reprehenderit perspiciatis expedita ullam dicta, error fuga illo cupiditate saepe harum. Dolor qui quam odio sint in accusantium necessitatibus eligendi tempora ad perferendis architecto blanditiis, repellendus quasi deserunt voluptas, quia illo magni rem atque, animi magnam. Quod officiis, inventore labore voluptate dicta totam consequuntur aspernatur dolore, asperiores assumenda ratione, non minima ad quas. Eaque illo tempore, fugit ex autem molestias debitis magni, dolor recusandae vero incidunt amet natus numquam, hic sunt. Atque, consequuntur sapiente.
              </div>
            </div>
            <input type="button" onClick={::this._addInBascket} value="Add to cart"/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bascketActions: bindActionCreators(addInBascket, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductById);
