import React from 'react'
import { connect } from 'react-redux'
import { postQuoteAPI } from '../actions'

class Post extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    let props = this.props

    return (
      <React.Fragment>
        <section>
          <div>
            <button onClick={() => props.dispatch(postQuoteAPI(props.currentQuote))}>
              Post Awesome Quote!
            </button>
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
)(Post)
