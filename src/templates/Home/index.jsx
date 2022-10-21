import './styles.css';

import { Component } from 'react';

import { Posts } from '../../components/Posts';
import { PostTextInput } from '../../components/PostTextInput';
import { loadPosts } from '../../utils/load-posts';
import PaginatePostButton from '../../components/PaginatePostButton';


//component de classe
class Home extends Component {
  state = {
    posts: [],
    page: 0,
    postsPerPage: 10,
    allPosts: [],
    searchValue: ''
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

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({searchValue: value})
  }

  render () {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    
    const filteredPosts = !!searchValue ? 
      allPosts.filter((post) => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
      :
      posts;

    return (
      <section className="container">

        <div className='search-container'>
          {!!searchValue && (
            <h1>Search value: {searchValue}</h1>
          )}

          <PostTextInput 
            handleChange={this.handleChange}
            searchValue={searchValue}
          />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <h2>Não existem posts</h2>
        )}

        <div className='button-container'>
          {!searchValue && (
            <PaginatePostButton
              texto='Load more posts'
              loadPosts={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
