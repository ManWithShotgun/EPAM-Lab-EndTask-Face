import React , { Component } from 'react'
import DisplayProducts from '../DisplayProducts'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate';
import Products from './Monitors'
import { reciveMonitors } from '../../actions/ProductsAction'
class MonitorsWrapper extends Component{
  constructor() {
    super();
    this.state={classNameProduct:'product-grid'};
  }
  changeDisplayProducts(){
    this.setState({classNameProduct:(this.state.classNameProduct==='product-grid')? 'product-post' : 'product-grid'});
    console.log('change '+this.state.classNameProduct);
  }

  loadProductsFromServer(offset, selected, filter) {
    let url=`${this.props.url}?limit=${this.props.perPage}&offset=${offset}&filter=${filter}`;
    this.props.dispatch(reciveMonitors(url, offset, selected));
    console.log('request');
  }

  componentDidMount() {
    // console.log('componentDidMount: '+this.props.products.offset);
    // this.loadProductsFromServer(this.props.products.offset, this.props.products.initPage);
  }

  handlePageClick = (data) => {
    let selected=data.selected;
    let offset=Math.ceil(selected * this.props.perPage);
    let filter=this.props.products.filter.inch;

    console.log('handlePageClick');//при переходе на producs выполняется без нажатия; возможно из-за initialPage; выполняет роль componentDidMount
    this.loadProductsFromServer(offset, selected,filter);
  };

  render(){
    return(
      <div key={this.props.filter.inch} className="left-content">
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
                       initialPage={this.props.products.initPage.monitors}
                       breakClassName={"break-me"}
                       pageCount={this.props.products.pageCount.monitors}
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
    filter: state.products.filter,
    products: state.products,
    url: 'http://localhost:3003/monitors',
    perPage: 10
  }
}

export default connect(mapStateToProps)(MonitorsWrapper);
