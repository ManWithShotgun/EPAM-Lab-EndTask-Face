import React, { Component } from 'react'
import TopBar from './TopBar'
import Header from './Header'
import MainWrapper from './MainWrapper'
import Footer from './Footer'

export default class App extends Component {

  render() {
  return (
      <div>
        <TopBar />
        <Header />
        <MainWrapper />
        <Footer />
      </div>
    )
  }
}
