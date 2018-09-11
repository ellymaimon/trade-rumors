import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => {

  const {title, name, post, time} = props;

  return (
    <div>
      <h3>{title}</h3>
      <p><em>By {name} at {time}</em></p>
      <p>{post}</p>
      <br/>
    </div>
  )
}

export default Post
