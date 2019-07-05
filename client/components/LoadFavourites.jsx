import React from 'react'
import { connect } from 'react-redux'
import { fetchFavourites } from '../actions'

class LoadFavourites extends React {
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
            <button onClick={() => props.dispatch(fetchFavourites())}>
              List Favourites!
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
  console.log(state)
  return {
    favourites: state.favourites
  }
}

export default connect(
  mapStateToProps
)(LoadFavourites)