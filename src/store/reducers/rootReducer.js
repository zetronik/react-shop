import {combineReducers} from 'redux'
import cartReducer from './cart'
import shopReducer from './shop'

export default combineReducers({
    cart: cartReducer,
    shop: shopReducer
})
