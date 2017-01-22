import { combineReducers } from 'redux'
import bascket from './bascket'
import products from './products'
import accountAuth from './accountAuth'
import productById from './productById'

export default combineReducers({bascket, products, accountAuth, productById})
