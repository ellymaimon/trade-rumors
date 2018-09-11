import React from 'react'
import PropTypes from 'prop-types'
import PostListHeader from './PostListHeader'
import Post from './Post'

const mockPostList = [
  {
    name: "Kevin",
    title: "LeBron to Lakers",
    post: "I think Lebron is definitely getting traded to the Lakers",
    time: "3 minutes ago"
  },
  {
    name: "Abel",
    title: "Carmelo a Rocket?",
    post: "Carmelo signing with the Rockets, gauranteed you heard it here first",
    time: "10 hours ago"
  }
]

const PostList = (props) => {
  return (
    <div>
      <PostListHeader />
      {mockPostList.map((post, index) =>
        <Post {...post} key={index} />
      )}
    </div>
  )
}

export default PostList;
