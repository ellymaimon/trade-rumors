import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import { v4 } from 'uuid'

const ReplyForm = (props) => {
  const handleSubmit = (e) => {
    let newComment = {
      time: new Date().toLocaleString(),
      reply: e.target.reply.value,
      id: v4()

    }
    props.onNewCommentCreation(newComment, props.index);
    e.target.reply.value = '';
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input name='reply' placeholder='Leave a reply...' />
        </Form.Group>
        <Form.Button color='blue' size='mini'>Submit Reply</Form.Button>
      </Form>
    </div>
  )
}

ReplyForm.propTypes = {
  onNewCommentCreation: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

export default ReplyForm
