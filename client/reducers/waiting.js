import {
  SHOW_ERROR,
  REQUEST_NORRIS_API,
  RENDER_QUOTE} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_NORRIS_API:
      return true

    case RENDER_QUOTE:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
