import React from 'react'
// import { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CounterUseState from './hook/useState'
import ExampleUseEffect from './hook/useEffect'
// import Memo from './Memo'

function App() {

  console.log('App render here')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CounterUseState />
      <br/>
      <ExampleUseEffect />
    </div>
  );
}

// class App extends Component {
//   state = {
//       val: 1
//   };  

//   // componentDidMount() {
//   //   setInterval(() => {
//   //     this.setState({ val: 1})
//   //   }, 3000);
//   // }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-heaer">
//           {/* <Memo val={this.state.val}></Memo> */}
//           <CounterUseState></CounterUseState>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
