import { RENDER_FAVOURITES } from '../actions'

function norrisFavourites(state = [], action) {
  switch (action.type) {
    case RENDER_FAVOURITES:
      return action.favourites
    default:
      return state
  }
}

export default norrisFavourites
