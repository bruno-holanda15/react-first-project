import './styles.css';

import { Component } from 'react';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import PaginatePostButton from '../../components/PaginatePostButton';


//component de classe
class Home extends Component {
  state = {
    posts: [],
    page: 0,
    postsPerPage: 2,
    allPosts: []
  };

  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(0,2),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const {posts, page, postsPerPage, allPosts} = this.state;
    const nextPage =  postsPerPage + page;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  render () {
    const { posts } = this.state;
    return (
          <section className="container">
              <Posts posts={posts} />
              <PaginatePostButton
                texto='Load more posts'
                loadPosts={this.loadMorePosts}
              />
          </section>
        );
  }
}

export default Home;
