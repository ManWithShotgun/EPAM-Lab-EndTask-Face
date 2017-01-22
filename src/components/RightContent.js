import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import { loadCountsProduction, filterProduction } from '../actions/ProductsAction'

export class RightContent extends Component{

  componentDidMount(){
    this.props.dispatch(loadCountsProduction());
  }

  handleOnSubmit(e){
    e.preventDefault();
    let location=browserHistory.getCurrentLocation().pathname;
    let filterValue=ReactDOM.findDOMNode(this.refs.filter).value;
    filterValue=filterValue.trim();
    console.log('location: '+location+'|'+filterValue);
    let nameFilter=this.filterName();
    if(nameFilter){
      this.props.dispatch(filterProduction(browserHistory.getCurrentLocation().pathname,filterValue));
    }
  }

  filterName(){
    switch(browserHistory.getCurrentLocation().pathname){
      case '/monitors':
        return 'inch';
      case '/cameras':
        return 'MP';
      default:
        return undefined;
    }
  }

  render(){
    const nameFilter=this.filterName();
    const filerInputs=nameFilter ? (
      <div>
        <label htmlFor="filter">
          {nameFilter}:
        </label>
        <input key={nameFilter+this.props.filter[nameFilter]} ref="filter" type="text" name="filter" defaultValue={this.props.filter[nameFilter]} placeholder="Number" />
      </div>):('');
      console.log('filter render: '+this.props.filter[nameFilter]);
    return(
      <div className="right-content">
        <div className="category-div">
          <div className="title">Product Category</div>
          <div className="wrapper-ul">
            <ul>
              <li>
                <Link to="/monitors">Monitors</Link><span> ({this.props.countMonitors})</span>
              </li>
              <li>
                <Link to="/cameras">Cameras</Link><span> ({this.props.countCameras})</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="category-div">
            <div className="title">Filter</div>
            <div className="wrapper-filter">
              <form onSubmit={::this.handleOnSubmit}>
                {filerInputs}
                <div className="btn">
                  <input type="submit" name="" value="Filter"/>
                </div>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    forRenderWithSwitchProducts_NotUsed: state.products.productsList, //если переключились между категориями продуктов, то должен менятся фильтр. Не знаю как подругому
    countMonitors: state.products.countMonitors,
    countCameras: state.products.countCameras,
    filter: state.products.filter
  }
}

export default connect(mapStateToProps)(RightContent);
