import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RENDER_QUOTE = 'RENDER_QUOTE'
export const REQUEST_NORRIS_API = 'REQUEST_NORRIS_API'
export const REQUEST_FAVOURITES = 'REQUEST_FAVOURITES'
export const RENDER_FAVOURITES = 'RENDER_FAVOURITES'

export const requestQuote = () => {
  return {
    type: REQUEST_NORRIS_API
  }
}

export const renderQuote = (quote) => {
  return {
    type: RENDER_QUOTE,
    currentQuote: quote
  }
}

export const requestFavourites = () => {
  return {
    type: REQUEST_FAVOURITES
  }
}

export const renderFavourites = () => {
  return {
    type: RENDER_FAVOURITES
  }
}


export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchQuote() {
  return (dispatch) => {
    dispatch(requestQuote())
    return request
      .get(`/getNorrisQuote`)
      .then(res => {
        dispatch(renderQuote(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchFavourites() {
  return (dispatch) => {
    dispatch(requestFavourites())
    return request
      .get('/chuckDbRoutes/favourites')
      .then(res => {
        dispatch(renderFavourites(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}