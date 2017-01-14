import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import HeaderMenu from '../components/HeaderMenu'
import MainContainer from './MainContainer'
import Footer from '../components/Footer'

export default class App extends Component {

  render() {
  return (
    <div>
        <TopBar />
        <HeaderMenu />
        <MainContainer />
        <Footer />
    </div>
    )
  }
}
