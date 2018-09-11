import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import { v4 } from 'uuid';

const NewPostForm = (props) => {
  const handleSubmit = (e) => {
    let newPost = {
      name : e.target.name.value,
      title : e.target.title.value,
      description : e.target.description.value,
      time : new Date().toLocaleString(),
      votes: 0,
      id: v4()
    }
    props.onNewPostCreation(newPost);
    // Clear form values here
    props.onNewPostSubmit();

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input label='Name' name='name' placeholder='Your Name' value="Elly M."/>
        <Form.Input label='Post Title' name='title' placeholder='Post Title' value="Kevin Durant"/>
      </Form.Group>
      <Form.TextArea label='Post Description' name='description' placeholder='Trade Rumor...' value="Kevin Durant is going to the Lakers wtf bro!!"/>
      <Form.Button color='blue'>Submit Rumor</Form.Button>
    </Form>
  )
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func.isRequired,
  onNewPostSubmit: PropTypes.func.isRequired
}

export default NewPostForm
