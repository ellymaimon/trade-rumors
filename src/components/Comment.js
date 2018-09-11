import React from 'react'
import PropTypes from 'prop-types'

const Comment = (props) => {

  return (
    <div>
      <p>{props.comment.time}</p>
      <p>{props.comment.reply}</p>
    </div>

  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
