import React, { Component } from 'react';
import Feed from './Feed';
import NewPostForm from './NewPostForm';

class App extends Component {
  render() {
    return (
      <div style={{margin:'50px'}}>
        <Feed />
      </div>
    );
  }
}

export default App;
