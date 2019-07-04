## Database functions

**Get All Quotes from Database**
```
function getAllQuotes(db = connection) {
    db('favourites').select()
}
```
**Insert FAVOURITE/SELECTED Quote to Database**
```
function insertFavouriteQuote(quote, db = connection) {
    db('favourites').insert({quote: quote})
}
```

## Routes
### File/Folder structure

Routes/Requests inside server.js (no need for additional routes as of yet)

### Routes

**GET Request**
```
server.get('/', (req, res) => {
    db.getAllQuotes()
        .then(quotes => {
            res.json(quotes)
        })
}) 
```

**POST Request**
```
server.post('/', (req, res) => {
    db.savePost()
        .then(quoteId => {
            res.json(quoteId)
        })
})
```

posting information from SaveGoodQuote component to database

## API Calls

**Get Request**
```
function getAllQuotesApi() {
    return request.get()
        .then(response => {
            return response.body
        })
}
```

**POST Request**
```
function insertFavouriteQuoteApi() {
    <!-- return request.post()
        .then(response => {
            return response.body
        }) -->
}
```

**API CALLS ARE NOT EXACT**


