import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { Router, Route, browserHistory } from 'react-router';
import auth from './utils/auth'
import About from './components/About'
import MainWrapper from './components/MainWrapper'
import Login from './components/Login'
import Registration from './components/Registration'
import Profile from './components/Profile'
import ProfileEdit from './components/ProfileEdit'
import NotFound from './components/NotFound'
import Home from './components/Home'
import MonitorsWrapper from './components/monitors/MonitorsWrapper'
import MonitorById from './components/monitors/MonitorById'
import MonitorByIdEdit from './components/monitors/MonitorByIdEdit'
import CreateMonitor from './components/monitors/CreateMonitor'
import CamerasWrapper from './components/cameras/CamerasWrapper'
import CameraById from './components/cameras/CameraById'
import CameraByIdEdit from './components/cameras/CameraByIdEdit'
import CreateCamera from './components/cameras/CreateCamera'


import './styles/style.css'
import './styles/style-index.css'

const store=configureStore();

function checkAuth(nextState, replaceState) {
  if (nextState.location.pathname == '/profile') {
    if (!auth.loggedIn()) {
      if (nextState.location.state && nextState.location.pathname) {
        replaceState(nextState.location.pathname);
      } else {
        replaceState('/');
      }
    }
  }
  console.log(nextState.location.pathname);
}

function chechIsAdmin(nextState, replaceState) {
  if(!auth.isAdmin()){
    replaceState('/');
  }
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route onEnter={checkAuth}>
          <Route path="login" component={Login} />
          <Route path="registration" component={Registration} />
          <Route path="profile" component={Profile} />
          <Route path="profile/edit" component={ProfileEdit} />
          <Route path="home" component={Home} />
          <Route path="about" component={About}/>
          <Route component={MainWrapper}>
            <Route path="monitors" component={MonitorsWrapper} />
            <Route path="cameras" component={CamerasWrapper} />
          </Route>
          <Route path="monitors/:id/" component={MonitorById} />
          <Route path="cameras/:id/" component={CameraById} />
          <Route onEnter={chechIsAdmin}>
            <Route path="monitors/create" component={CreateMonitor} />
            <Route path="monitors/:id/edit" component={MonitorByIdEdit} />
            <Route path="cameras/create" component={CreateCamera} />
            <Route path="cameras/:id/edit" component={CameraByIdEdit} />
          </Route>
        </Route>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
