import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
    this.handleVoteUpClick = this.handleVoteUpClick.bind(this);
    this.handleVoteDownClick = this.handleVoteDownClick.bind(this);
  }

  handleVoteUpClick() {
    let currentVotes = this.state.votes;
    currentVotes ++;
    this.setState({votes: currentVotes});
  }

  handleVoteDownClick() {
    let currentVotes = this.state.votes;
    currentVotes --;
    this.setState({votes: currentVotes});
  }

  render() {
    const {title, name, post, time} = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <Icon size='large' name='hand point up outline' onClick={this.handleVoteUpClick}/>
        <p>{this.state.votes}</p>
        <Icon size='large' name='hand point down outline' onClick={this.handleVoteDownClick}/>
        <p><em>By {name} at {time}</em></p>
        <p>{post}</p>
        <br/>
      </div>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Post;
