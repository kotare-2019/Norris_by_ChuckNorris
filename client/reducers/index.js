import { combineReducers } from 'redux'

import errorMessage from './error-message'
import norrisQuote from './norrisQuote'
import waiting from './waiting'
import norrisFavourites from './norrisFavourites'

export default combineReducers({
  errorMessage,
  norrisQuote,
  waiting,
  norrisFavourites
})
