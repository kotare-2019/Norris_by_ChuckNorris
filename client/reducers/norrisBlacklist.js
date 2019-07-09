import { REQUEST_BLACKLIST } from '../actions'

function norrisBlacklist(state = [], action) {
  switch (action.type) {
    case REQUEST_BLACKLIST:
      return action.norrisBlacklist
    default:
      return state
  }
}

export default norrisBlacklist
