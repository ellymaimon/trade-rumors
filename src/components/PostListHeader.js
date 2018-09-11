import React from 'react'
import PropTypes from 'prop-types'
import NewPostForm from './NewPostForm'
import { Button } from 'semantic-ui-react'

const PostListHeader = (props) => {
  return (
    <div>
      <h1>Trade Rumors</h1>
      <Button>New Post</Button>
      <NewPostForm />
    </div>
  )
}

export default PostListHeader
