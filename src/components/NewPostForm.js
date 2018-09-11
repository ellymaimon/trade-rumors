import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

const NewPostForm = (props) => {
  // let _name = null;

  const handleSubmit = (e) => {
    console.log(e.target.name.value, e.target.title.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input label='Name' name='name' placeholder='Your Name'/>
        <Form.Input label='Post Title' name='title' placeholder='Post Title'/>
      </Form.Group>
      <Form.TextArea label='Post Description' placeholder='Trade Rumor...'/>
      <Form.Button color='blue'>Submit Rumor</Form.Button>
    </Form>
  )
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func.isRequired
}

export default NewPostForm
