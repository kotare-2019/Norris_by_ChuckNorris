import React from 'react'
import {connect} from 'react-redux'
import {fetchQuote} from '../actions'




class NorrisQuote extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    let props = this.props
    console.log(this.props)
    
    return (
      <React.Fragment>
       <section className="quote-section">
       {props.children}
         <div className="quote-div">
            <button className='generate-button' onClick={() => props.dispatch(fetchQuote())}>
              Generate Quote!
            </button>
            <p className="quote">{this.props.currentQuote && this.props.currentQuote.value}</p>
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
)(NorrisQuote)
