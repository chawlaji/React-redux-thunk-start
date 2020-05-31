import React from 'react';
import { connect } from 'react-redux';
import {increment,dicrement,reset} from '../../redux/actions/counterAction';
import { bindActionCreators } from 'redux';
class CounterMultipleActionCalls extends React.Component {
  
  render() {
    return (
      <div>
        <h2>Multiple Action Calls</h2>
        <div>
          <button onClick={this.props.dicrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.increment}>+</button>
        </div>
        <button onClick={this.props.reset}>reset</button>
      </div>
    )
  }
}

const mapStateToProps= (state) =>({ //redux state into props
    count: state.counterReducer.count
});



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, dicrement,reset}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(CounterMultipleActionCalls);