import {combineReducers} from 'redux'
import token from './token.js'
import clientProfile from './client-profile.js'
import charities from './charity.js'
export default combineReducers({token, clientProfile, charities})
