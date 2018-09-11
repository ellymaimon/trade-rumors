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
    this.handleNewPostToggle = this.handleNewPostToggle.bind(this);
  }

  handleNewPostToggle() {
    this.setState({ formVisibleOnPage: !this.state.formVisibleOnPage })
  }

  render () {
    const headerTitle = {
      display: "inline-block",
      fontSize: "52px"
    }
    const headerButton = {
      position: "fixed",
      right: '50px'
    }

    let currentView = null;

    if(this.state.formVisibleOnPage) {
      currentView = <NewPostForm onNewPostCreation={this.props.onNewPostCreation} onNewPostSubmit={this.handleNewPostToggle}/>;
    } else {
      currentView = <Button style={headerButton} color='teal' onClick={ this.handleNewPostToggle }>New Post</Button>;
    }
    return(
      <div>
        <h1 style={headerTitle}>Trade Rumors</h1>
        { currentView }
      </div>
    )
  }
}

PostListHeader.propTypes = {
  onNewPostCreation: PropTypes.func.isRequired
}

export default PostListHeader;
