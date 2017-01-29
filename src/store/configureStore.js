import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

/*Для работы Redux Dev Tools. Подключать как composeWithDevTools(applyMiddleware(logger, thunk))*/
// import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  console.log('store start');
  const logger=createLogger();
  const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
  /*Этот if для hot model redux весий 2.х.х. Нужен он для 3.х.х, я не знаю.*/
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  console.log('store end');
  return store
}
