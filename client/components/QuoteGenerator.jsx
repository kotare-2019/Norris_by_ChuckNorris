import React from 'react'
import {connect} from 'react-redux'
import {fetchQuote} from '../actions'



const NorrisQuote = ({children, dispatch, newQuote}) => (
  <React.Fragment>
    <section>
      <div>
        <button onClick={() => dispatch(fetchQuote())}>
          Generate Quote!
        </button>
        {children}
      </div>
      {/* <p key={newQuote.id}>{newQuote.value}</p> */}
      </section>
  </React.Fragment>
)

const mapStateToProps = (state) => {
  return {
    norrisQuote: state.norrisQuote
  }
}

export default connect(
  mapStateToProps
)(NorrisQuote)
