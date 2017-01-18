import React , { Component } from 'react'
import { Link } from 'react-router';

export default class Product extends Component{

  addInBascket(e){
    console.log('addInBascket');
    e.preventDefault();
    this.props.addInBascket(this.props.item);
  }

  render(){
    const {item}=this.props;
    let url='/product/'+item.id;
    return(
      <div className={this.props.classNameProduct}>
        <h3>
          <a href="#">{item.name}</a>
        </h3>
        <div className="body">
          <div className="prod-img">
            <img src="../src/img/Nasa-Orion-Nebula-By-RePublicDomain.jpg" alt=""/>
            <span className="prod-price">${item.pricePer}</span>
          </div>
          <div className="description">
            {item.description}
          </div>
          <Link className="add-product" onClick={::this.addInBascket} href="#">ADD TO CAR</Link>
          <Link className="info-product" to={url}>MORE INFO</Link>
        </div>
      </div>
    )
  }
}
