import React from 'react'
import { connect } from 'react-redux'
import { fetchFavourites } from '../actions'

class LoadFavourites extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let props = this.props

    return (
      <React.Fragment>
        <section>
          <div>
            <button onClick={() => props.dispatch(fetchFavourites())}>
              List Favourites!
            </button>
            <ul>{this.props.favourites && this.props.favourites.map(e => {
              return (
                <li>{e.quote}</li>
              )
            })}</ul>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.norrisFavourites
  }
}

export default connect(
  mapStateToProps
)(LoadFavourites)