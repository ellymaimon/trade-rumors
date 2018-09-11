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
    this.handleVoteUpClick = this.handleVoteUpClick.bind(this);
    this.handleVoteDownClick = this.handleVoteDownClick.bind(this);
  }

  handleAddingNewPost(newPost) {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({
      masterPostList: newMasterPostList
    })
  }

  handleVoteUpClick(index) {
    let newPostList = this.state.masterPostList.slice();
    newPostList[index].votes++;
    this.setState({
      masterPostList: newPostList
    })
  }

  handleVoteDownClick(index) {
    let newPostList = this.state.masterPostList.slice();
    newPostList[index].votes--;
    this.setState({
      masterPostList: newPostList
    })
  }

  render () {
    return(
      <div>
        <PostListHeader onNewPostCreation={this.handleAddingNewPost} />
        {this.state.masterPostList.map((post, index) =>
          <Post {...post} key={post.id} index={index} onVoteUpClick={this.handleVoteUpClick} onVoteDownClick={this.handleVoteDownClick}/>
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
