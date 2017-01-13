import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

export default class App extends Component {

  render() {

    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/admin'>Admin</NavLink></li>
          <li><NavLink to='/list'>List</NavLink></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}
