import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { Router, Route, browserHistory } from 'react-router';
import MainContainer from './containers/MainContainer'
import Login from './components/Login'
import Registration from './components/Registration'
import Profile from './components/Profile'
import NotFound from './components/NotFound'


import './styles/style.css'
import './styles/style-index.css'

const store=configureStore();

function checkAuth(nextState, replaceState) {
  // let { loggedIn } = store.getState();
  let loggedIn = false;

  if (nextState.location.pathname !== '/profile') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replaceState(nextState.location.pathname);
      } else {
        replaceState('/');
      }
    }
  } else {
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replaceState(nextState.location.pathname);
      } else {
        replaceState('/');
      }
    }
  }
  console.log(nextState.location.pathname);
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={MainContainer} />
        <Route onEnter={checkAuth}>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={MainContainer} />
        </Route>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
