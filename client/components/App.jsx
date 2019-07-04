import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import QuoteGenerator from './QuoteGenerator';
import Header from './Header'

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
      </div>  
    )
  }
}
  

export default App
