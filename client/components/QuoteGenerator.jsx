import React from 'react'
import { connect } from 'react-redux'
import { fetchQuote } from '../actions'




class NorrisQuote extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    let props = this.props

    return (
      <React.Fragment>
        <section>
          <div>
            <button onClick={() => props.dispatch(fetchQuote())}>
              Generate Quote!
            </button>
            {props.children}
            <p>{this.props.currentQuote && this.props.currentQuote.value}</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    currentQuote: state.norrisQuote
  }
}

export default connect(
  mapStateToProps
)(NorrisQuote)
