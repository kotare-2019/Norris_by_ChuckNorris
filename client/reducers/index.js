import {combineReducers} from 'redux'

import errorMessage from './error-message'
import norrisQuote from './norrisQuote'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  norrisQuote,
  waiting
})
