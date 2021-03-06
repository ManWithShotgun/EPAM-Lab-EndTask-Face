import React , { Component } from 'react'
import { Link } from 'react-router';
import { addInBascket } from '../../actions/BascketAction';

export default class Camera extends Component{

  addInBascket(e){
    console.log('addInBascket');
    e.preventDefault();
    this.props.dispatch(addInBascket(this.props.item));
  }

  render(){
    const {item}=this.props;
    return(
      <div className={this.props.classNameProduct}>
        <h3>
          <Link to={`/cameras/${item.id}`}>{item.name}</Link>
            {this.props.adminRole ? (
              <Link className="edit-product" to={`/cameras/${item.id}/edit`}>
                <div className="edit-product-img"></div>
              </Link>
            ) : (
              <div></div>
            )}
        </h3>
        <div className="body">
          <div className="prod-img">
            <img src={item.img} alt=""/>
            <span className="prod-price">${item.pricePer}</span>
          </div>
          <div className="description">
            <b>Maga Pixels:</b> {item.MP} МПикс <br/>
            {item.description}
          </div>
          <Link className="add-product" onClick={::this.addInBascket} href="#">ADD TO CAR</Link>
          <Link className="info-product" to={`/cameras/${item.id}/`}>MORE INFO</Link>
        </div>
      </div>
    )
  }
}
