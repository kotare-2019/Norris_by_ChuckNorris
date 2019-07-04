import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RENDER_QUOTE = 'RENDER_QUOTE'
export const REQUEST_NORRIS_API = 'REQUEST_NORRIS_API'

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

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchQuote () {
  return (dispatch) => {
    dispatch(requestQuote())
    return request
      .get(`/`)
      .then(res => {
        dispatch(renderQuote(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
