import './styles.css';

import { Component } from 'react';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import PaginatePostButton from '../../components/PaginatePostButton';


//component de classe
class Home extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({posts: postsAndPhotos.slice(0,2)});
  }

  render () {
    const { posts } = this.state;
    return (
          <section className="container">
              <Posts posts={posts} />
              <PaginatePostButton
                texto='Oloquinho'
              />
          </section>
        );
  }
}

export default Home;
