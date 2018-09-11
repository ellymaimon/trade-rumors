import React, { Component } from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';

class App extends Component {
  render() {
    return (
      <div style={{margin:'50px'}}>
        <PostList />
      </div>
    );
  }
}

export default App;
