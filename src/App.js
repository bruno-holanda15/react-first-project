import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//component de classe
class App extends Component {
  state = {
    posts: [
      {
        'id': 1,
        'title': 'O título 1',
        'body': 'O body 1'
      },
      {
        'id': 2,
        'title': 'O título 2',
        'body': 'O body 2'
      },
      {
        'id': 3,
        'title': 'O título 3',
        'body': 'O body 3'
      }
    ],
    counter: 0
  };

  render () {
    const { posts, counter } = this.state;
    return (
          <div className="App">
            {posts.map(post => (
              <div key={post.id}>
                <h3> {post.title} </h3>
                <p> {post.body} </p>
              </div>
            ))}
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
