import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import HeaderMenu from '../components/HeaderMenu'
import { connect } from 'react-redux';
import Footer from '../components/Footer'

export class App extends Component {

  render() {
  return (
    <div>
        <TopBar
          loggedIn={this.props.accountAuth.loggedIn}
          history={this.props.history}
          location={this.props.location}
          dispatch={this.props.dispatch}
          currentlySending={this.props.accountAuth.currentlySending}  />
        <HeaderMenu
          loggedIn={this.props.accountAuth.loggedIn}
          history={this.props.history}
          location={this.props.location}
          dispatch={this.props.dispatch}
          currentlySending={this.props.accountAuth.currentlySending} />

        { this.props.children }
        
        <Footer />
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    accountAuth: state.accountAuth
  };
}

export default connect(mapStateToProps)(App);
