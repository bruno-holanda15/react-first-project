import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//component de classe
class App extends Component {

  state = {
    name: 'Brunin Holandis',
    counter: 0
  };

  handlePClick= () => {
    this.setState({name: 'Peter Miranha'});
  }

  handleAClick = (event) => {
    event.preventDefault();
    this.setState({counter: this.state.counter + 1})
  }

  render () {
    const { name, counter } = this.state;
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <p onClick={this.handlePClick}>
                Meu nome {name} - Counter {counter}
              </p>
              <a
                onClick={this.handleAClick}
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
  }
}

// stateless component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
