import React , { Component } from 'react'
import DisplayProducts from '../DisplayProducts'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate';
import Products from './Cameras'
import { reciveCameras } from '../../actions/ProductsAction'
class CamerasWrapper extends Component{
  constructor() {
    super();
    this.state={classNameProduct:'product-grid'};
  }
  changeDisplayProducts(){
    this.setState({classNameProduct:(this.state.classNameProduct==='product-grid')? 'product-post' : 'product-grid'});
    console.log('change '+this.state.classNameProduct);
  }

  loadProductsFromServer(offset, selected) {
    let url=`${this.props.url}?limit=${this.props.perPage}&offset=${offset}`;
    this.props.dispatch(reciveCameras(url, offset, selected));
    console.log('request');
  }

  componentDidMount() {
    // console.log('componentDidMount: '+this.props.products.offset);
    // this.loadProductsFromServer(this.props.products.offset, this.props.products.initPage);
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    console.log('handlePageClick');//при переходе на producs выполняется без нажатия; возможно из-за initialPage; выполняет роль componentDidMount
    this.loadProductsFromServer(offset, selected);
  };

  render(){
    // console.log('this.props.products.initPage.monitors: '+this.props.products.initPage.monitors);
    // console.log('this.props.products.initPage.cameras: '+this.props.products.initPage.cameras);
    return(
      <div className="left-content">
        <DisplayProducts changeDisplayProducts={::this.changeDisplayProducts}/>

        {this.props.products.currentlySending ? (
          <div className="loading-div-large"></div>
        ) : (
          <Products
            items={this.props.products.productsList}
            dispatch={this.props.dispatch}
            classNameProduct={this.state.classNameProduct}/>
        )}
        <div className="products-nav">
          <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       initialPage={this.props.products.initPage.cameras}
                       breakClassName={"break-me"}
                       pageCount={this.props.products.pageCount.cameras}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={::this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    products: state.products,
    url: 'http://localhost:3003/cameras',
    perPage: 10
  }
}

export default connect(mapStateToProps)(CamerasWrapper);
