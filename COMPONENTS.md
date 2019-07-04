## Components



**< Header />**

>Title and image of Chuck-Norrisy-Thing maybe him looking badass or using nunchucks

> Button action [render GoodQuoteList]
> Button action [render GoodQuote]


**< QuoteGenerator />**

>Button > action [dispatch requestNorrisApi]   (chuck norris holding button/roundhouse kick)

>Render quote in this component



**< SaveGoodQuote />**

>Button > action [dispatch postQuoteToDatabase] - saves quote to database

>Redux state



**< GoodQuoteList />**

>Redux State

>Conditionally rendered

>Gets data from database

>Button > action [dispatch renderFavouriteQuotesFromDatabase]


**< GoodQuote />**

>Single random quote from database

>action renderGoodQuote

>Button > action [dispatch renderGoodQuote]

**< Footer / >**
