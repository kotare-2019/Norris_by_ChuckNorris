## Redux Actions

1. Get quote from external API
action: {
  type: GET_QUOTE,
  currentQuote: 'str'
}

2. Post quote to internal DB / JSON
action: {
  type: SAVE_QUOTE,
  favorites: []
}
3. Render quote
action: {
  type: RENDER_QUOTE,
  currentquote: ''
}

4. Render good quote list
action: {
  type: RENDER_FAVS,
  favourites: []
}

8. Make goodQuoteVisible component visible
action: {
  type: GOOD_QUOTE_VIS,
  goodQuoteVisible: boolean
}

9. Make quoteListVisible component visible
action: {
  type: QUOTE_LIST_VIS,
  quoteListVisible: boolean
}

**Stretch**