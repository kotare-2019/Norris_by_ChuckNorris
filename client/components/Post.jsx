import React from 'react'
import { connect } from 'react-redux'
import { postQuoteAPI } from '../actions'

class Post extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    let props = this.props
    console.log(this.props)

    return (
      <React.Fragment>
        <section>
          <div>
            <button onClick={() => props.dispatch(postQuoteAPI(value))}>
              Post Awesome Quote!
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}



const mapStateToProps = (state) => {
  console.log(state)
  return {
    currentQuote: state.norrisQuote
  }
}

export default connect(
  mapStateToProps
)(Post)
