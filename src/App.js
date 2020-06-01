import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter1 from './components/Counter/CounterMainActionCall';
import Counter2 from './components/Counter/CounterMultipleActionCalls';
import Counter3 from './components/Counter/CounterDIrectActionDispatch';

function App() {
  return (
    <div className="container">
      <div className="header"></div>
      <div class="content">
        {/* <Counter3/>  */}
        <Counter2 />
        {/* <Counter1/>   */}
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
