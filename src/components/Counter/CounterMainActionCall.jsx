import React from 'react';
import { connect } from 'react-redux';
import counterAction from '../../redux/actions/counterAction';
import { bindActionCreators } from 'redux';
class CounterMainActionCall extends React.Component {

componentDidMount() {
  console.log('def',this.props.count);
}


componentDidUpdate(prevProps, prevState) {
 
 if( prevProps.count !== this.props.count){
   console.log('lol',this.props.count);
 }
}

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.onCounterClick(1)}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.onCounterClick(2)}>+</button>
        </div>
        <button onClick={this.onCounterClick(0)}>reset</button>
      </div>
    )
  }

  onCounterClick =(val) =>{
    this.props.counterAction(val)
  }
}

const mapStateToProps= (state) =>({ //redux state into props
    count: state.counterReducer.count
});



const mapDispatchToProps= (dispatch)=> {
 return bindActionCreators({counterAction:counterAction}, dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(CounterMainActionCall);