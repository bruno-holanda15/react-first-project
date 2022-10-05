import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//component de classe
class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}));
  }

  render () {
    const { posts } = this.state;
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

export default App;
