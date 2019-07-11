import React from 'react'
import { connect } from 'react-redux'
import { fetchBlacklist, postBlacklistAPI } from '../actions'

class BlackList extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.dispatch(fetchBlacklist())
  }

  render() {
    let props = this.props

    return (
      <React.Fragment>
        <section className='awesome-quote-button'>
          <div>
            <button onClick={() => props.dispatch(postBlacklistAPI(props.currentQuote))}>
              Blacklist Not-Awesome Quote!
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentQuote: state.norrisQuote,
    norrisBlacklist: state.norrisBlacklist
  }
}

export default connect(mapStateToProps)(BlackList)
