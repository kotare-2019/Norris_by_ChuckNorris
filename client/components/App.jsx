import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import QuoteGenerator from './QuoteGenerator';
import Header from './Header'
import LoadFavourites from './LoadFavourites';
import Post from './Post'
import Blacklist from './Blacklist';

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
        <Blacklist />
        <LoadFavourites />
      </div>
    )
  }
}


export default App
