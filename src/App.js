import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//component de classe
class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postResponse, photoResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    })

    this.setState({posts: postsAndPhotos});
  }

  render () {
    const { posts } = this.state;
    return (
          <section className="container">
              <div className="posts">
                {posts.map(post => (
                  <div className='post'>
                      <img src={post.cover} alt={post.title}/>
                      <div key={post.id} className="post-content">
                        <h3> {post.title} </h3>
                        <p> {post.body} </p>
                      </div>
                  </div>
                  ))}
              </div>
          </section>
        );
  }
}

export default App;
