import React from 'react'
import PropTypes from 'prop-types'
import NewPostForm from './NewPostForm'
import { Button } from 'semantic-ui-react'

class PostListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
    this.handleNewPostClick = this.handleNewPostClick.bind(this);
  }

  handleNewPostClick() {
    this.setState({ formVisibleOnPage: true })
  }

  render () {
    let currentView = null;

    if(this.state.formVisibleOnPage) {
      currentView = <NewPostForm />;
    } else {
      currentView = <Button onClick={ this.handleNewPostClick }>New Post</Button>;
    }
    return(
      <div>
        <h1>Trade Rumors</h1>
        { currentView }
      </div>
    )
  }
}

export default PostListHeader;
