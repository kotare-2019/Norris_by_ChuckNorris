import {REQUEST_NORRIS_API} from '../actions'

function norrisQuote (state = [], action) {
  switch (action.type) {
    case REQUEST_NORRIS_API:
      return action.currentQuote //this value might change in the future
    default:
      return state
  }
}

export default norrisQuote
