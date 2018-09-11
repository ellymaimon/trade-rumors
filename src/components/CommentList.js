import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment';
import ReplyForm from './ReplyForm';

const CommentList = (props) => {

  return (
    <div>
      {props.comments.map((comment) =>
        <Comment comment={comment}  key={comment.id}/>
      )}
      <ReplyForm onNewCommentCreation={props.onNewCommentCreation} index={props.index}/>
    </div>
  )
}

CommentList.propTypes = {
  onNewCommentCreation: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
}

export default CommentList
