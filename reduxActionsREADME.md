## Redux Actions

1. Get quote from external API
```
export const requestNorrisApi = () => {
  return {
    type: REQUEST_NORRIS_API
    currentQuote: ''
  }
}
```

2. Post quote to internal DB / JSON
```
const postQuoteToDatabase = () => {
  type: SAVE_QUOTE,
  currentQuote: ''
}
```

3. Render quote
```
const renderQuote = () => {
  type: RENDER_QUOTE,
  currentquote: ''
}
```

4. Render good quote list
```
const renderFavouriteQuotesFromDatabase = () => {
  type: RENDER_FAVS,
  favourites: []
}
```

5. Make GooddQuote component visible
```
const renderGoodQuote = () => {
  type: GOOD_QUOTE_VIS,
  goodQuoteVisible: boolean
}
```

6. Make GoodQuoteList component visible
```
const renderGoodQuoteList = () => {
  type: QUOTE_LIST_VIS,
  quoteListVisible: boolean
}
```

**Stretch**