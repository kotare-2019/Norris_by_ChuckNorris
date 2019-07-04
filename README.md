# Norris_by_ChuckNorris

## User stories (MVP)

1. *I would like to see a randomly generated Chuck Norris Quote.*

2. *If I like the quote, I would like to be able to save it so when I come back to the site I can see it again.*

3. *I would like to be able to bring up a list of the quotes that I have saved*

**Stretch**

4. *I would like to be able to bring up a quote at random from the list of saved quotes.*

5. *I would like some sweet Norris sound effects.*

6. *I would like to be able to black-list a bad quote so I don't have to see it again. Bad quotes are obviously not from the real Chuck Norris.*

7. *I would like to see some places Chuck Norris has kicked ass on a map.*

## Git Process

1. Development branch
2. Personal branches using the following convention;
    *featureName-yourName*
3. Add/Commit/Push to local branch before pulling from Development branch
4. gitMaster will review code before merging pull requests
5. gitMaster will delegate code reviews



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
RESPONSE >>>
```
['quoteOne', 'quoteTwo', 'quoteThree']
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
RESPONSE >>>
```
'favouriteQuote'
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

