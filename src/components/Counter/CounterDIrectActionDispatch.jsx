// only for understanding store , reducer, direct action dispatch 

import React from 'react';
import { connect } from 'react-redux';
import { COUNTER_DICREMENT, COUNTER_INCREMENT,RESET_COUNTER } from '../../constants/constants';
class CounterDIrectActionDispatch extends React.Component {
  
  increment = () => {
    this.props.dispatch({ type: COUNTER_INCREMENT });
  }

  decrement = () => {
    this.props.dispatch({ type: COUNTER_DICREMENT });
  }
  reset = () => {
    this.props.dispatch({ type: RESET_COUNTER });
  }
 
  render() {
    return (

      <div>
        <h2>DirectDispatch</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}

const mapStateToProps= (state) =>({ //redux state into props
    count: state.counterReducer.count
});

export default connect(mapStateToProps)(CounterDIrectActionDispatch);