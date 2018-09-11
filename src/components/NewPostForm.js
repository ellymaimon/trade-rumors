import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

const NewPostForm = (props) => {
  return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Input label='Name' placeholder='Your Name'/>
        <Form.Input label='Post Title' placeholder='Post Title'/>
      </Form.Group>
      <Form.TextArea label='Post Description' placeholder='Trade Rumor...'/>
      <Form.Button color='blue'>Submit Rumor</Form.Button>
    </Form>
  )
}

export default NewPostForm
