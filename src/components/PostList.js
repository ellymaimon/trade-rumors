import React from 'react'
import PropTypes from 'prop-types'
import PostListHeader from './PostListHeader'
import Post from './Post'

class PostList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    }
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  handleAddingNewPost(newPost) {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({
      masterPostList: newMasterPostList
    })
  }

  render () {
    return(
      <div>
        <PostListHeader onNewPostCreation={this.handleAddingNewPost} />
        {this.state.masterPostList.map((post, index) =>
          <Post {...post} key={index} />
        )}
      </div>
    )
  }
}

export default PostList;



//
// const mockPostList = [
//   {
//     name: "Kevin",
//     title: "LeBron to Lakers",
//     post: "I think Lebron is definitely getting traded to the Lakers",
//     time: "3 minutes ago"
//   },
//   {
//     name: "Abel",
//     title: "Carmelo a Rocket?",
//     post: "Carmelo signing with the Rockets, gauranteed you heard it here first",
//     time: "10 hours ago"
//   }
// ]
