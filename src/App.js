import './App.css';

import { Component } from 'react';

import { Posts } from './components/Posts';
import { loadPosts } from './utils/load-posts';


//component de classe
class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({posts: postsAndPhotos});
  }

  render () {
    const { posts } = this.state;
    return (
          <section className="container">
              <Posts posts={posts} />
          </section>
        );
  }
}

export default App;
