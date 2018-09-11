import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Button } from 'semantic-ui-react'
import CommentList from './CommentList'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsVisible: false,
    }
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleToggleComments = this.handleToggleComments.bind(this);
  }

  handleUpVote() {
    this.props.onVoteUpClick(this.props.index);
  }

  handleDownVote() {
    this.props.onVoteDownClick(this.props.index);
  }

  handleToggleComments() {
    this.setState({
      commentsVisible: !this.state.commentsVisible
    })
  }

  render () {
    const {name, title, description, time, votes, index, comments} = this.props;
    let currentView = null;

    if (this.state.commentsVisible) {
      currentView = <span>
                      <Button size="mini" onClick={this.handleToggleComments}>Hide Comments</Button>
                      <CommentList onNewCommentCreation={this.props.onNewCommentCreation} comments={comments} index={index}/>
                    </span>
    } else {
      currentView = <Button size="mini" onClick={this.handleToggleComments} animated='fade'>
                      <Button.Content visible>Show Comments</Button.Content>
                      <Button.Content hidden>Or add a reply</Button.Content>
                    </Button>
    }

    return (
      <div>
        <h3>{title}</h3>
        <p><em>By {name} at {time}</em></p>
        <p>{description}</p>
        <Icon size='big' name='hand point up outline' onClick={this.handleUpVote} style={{display:'inline-block'}}/>
        <p  style={{display:'inline-block', fontSize:'1.2em', marginRight:'2px', fontWeight:'bold'}}>{votes}</p>
        <Icon size='big' name='hand point down outline' onClick={this.handleDownVote} style={{display:'inline-block'}}/>
        {currentView}
        <hr/>
      </div>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onVoteUpClick: PropTypes.func.isRequired,
  onVoteDownClick: PropTypes.func.isRequired,
  onNewCommentCreation: PropTypes.func.isRequired
}

export default Post;
