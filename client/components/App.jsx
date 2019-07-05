import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import QuoteGenerator from './QuoteGenerator';
import Header from './Header'
import LoadFavourites from './LoadFavourites';
import Post from './Post'

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='app'>
        <Header />
        <ErrorMessage />
        <QuoteGenerator>
          <WaitIndicator />
        </QuoteGenerator>
        <Post />
        <LoadFavourites />
      </div>
    )
  }
}


export default App
