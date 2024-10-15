
import { Component } from 'react';

import './Styles.css';

import { loadPosts } from '../../telas/load-posts';
import { Posts } from '../../posts/index';
import { Button } from '../../Button/index'
import { TextInput } from '../../components/TextInput';




class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: ''
  };

  async componentDidMount() {
    this.loadPosts();
  };

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndphotos = await loadPosts();
    this.setState({
      posts: postsAndphotos.slice(page, postsPerPage),
      allPosts: postsAndphotos,

    });

  }

  lordMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })


  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });

  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filterPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase())

      })
      :
      posts

    return (
      <section className='container'>

        <div class = 'search-container'>
          {!!searchValue && (
            <h1>teste de pesquisa {searchValue} </h1>
          )}

          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>

        {filterPosts.length > 0 && (
          <Posts posts={filterPosts} />
        )}

        {filterPosts.length === 0 && (
          <p>Não contem posts</p>
        )}


        <div className='button-container'>
          {!searchValue && (
            <Button
              text="teste de botão"
              onClik={this.lordMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    )
  }
}
export default Home;
