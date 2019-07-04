import {RENDER_QUOTE} from '../actions'

function norrisQuote (state = {}, action) {
  switch (action.type) {
    case RENDER_QUOTE:
      return action.currentQuote
    default:
      return state
  }
}

export default norrisQuote
