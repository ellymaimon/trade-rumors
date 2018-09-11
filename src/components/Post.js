import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

const Post = (props) => {

  const handleUpVote = () => {
    props.onVoteUpClick(props.index);
  }

  const handleDownVote = () => {
    props.onVoteDownClick(props.index);
  }

  const {name, title, description, time, votes, id, index} = props;

  return (
    <div>
      <h3>{title}</h3>
      <Icon size='large' name='hand point up outline' onClick={handleUpVote} style={{display:'inline-block'}}/>
      <p  style={{display:'inline-block'}}>{votes}</p>
      <Icon size='large' name='hand point down outline' onClick={handleDownVote} style={{display:'inline-block'}}/>
      <p><em>By {name} at {time}</em></p>
      <p>{description}</p>
      <hr/>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onVoteUpClick: PropTypes.func.isRequired,
  onVoteDownClick: PropTypes.func.isRequired
}

export default Post;
