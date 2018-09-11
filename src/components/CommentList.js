import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment';

const CommentList = (props) => {

  return (
    <div>
      {props.comments.map((comment, index) =>
        <Comment comment={comment} key={index} />
      )}
    </div>
  )
}

CommentList.propTypes = {
  onNewCommentCreation: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
}

export default CommentList
