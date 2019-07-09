import React from 'react'
import { connect } from 'react-redux'
import { postBlacklistAPI } from '../actions'
import norrisBlacklist from '../reducers/norrisBlacklist';

class BlackList extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.dispatch(norrisBlacklist())
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
