import React , { Component } from 'react'
import { Link } from 'react-router';
import { addInBascket } from '../../actions/BascketAction';

export default class Monitor extends Component{

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
          <a href="#">{item.name}</a>
        </h3>
        <div className="body">
          <div className="prod-img">
            <img src={item.img} alt=""/>
            <span className="prod-price">${item.pricePer}</span>
          </div>
          <div className="description">
            <b>Inch:</b> {item.inch}'' <br/>
            {item.description}
          </div>
          <Link className="add-product" onClick={::this.addInBascket} href="#">ADD TO CAR</Link>
          <Link className="info-product" to={`/monitor/${item.id}`}>MORE INFO</Link>
        </div>
      </div>
    )
  }
}