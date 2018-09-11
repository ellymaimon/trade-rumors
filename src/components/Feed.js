import React from 'react'
import PropTypes from 'prop-types'
import PostListHeader from './PostListHeader'
import Post from './Post'

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [
        {
          name: "Hoe",
          title: "Joe",
          time: new Date().toLocaleString(),
          description: "This sucks ass.",
          votes: 12,
          id: "asdasd1222-asdasg34-g55g-fg4",
          comments: [
            {
              time: '7:30 pm',
              reply: 'fuck u'
            }
          ]
        },
        {
          name: "BJ",
          title: "69",
          time: new Date().toLocaleString(),
          description: "This suasdaks ass.",
          votes: 2,
          id: "asdasdasd1222-asdasg34-g55g-fg4",
          comments: [
            {
              time: '7:90 pm',
              reply: 'fuck u 2'
            }
          ]
        }
      ]
    }
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
    this.handleVoteUpClick = this.handleVoteUpClick.bind(this);
    this.handleVoteDownClick = this.handleVoteDownClick.bind(this);
    // this.handleAddingNewComment = this.handleAddingNewComment.bind(this);
  }

  // handleAddingNewComment(newComment, index) {
  //   let newPostList = this.state.masterPostList.slice();
  //   newPostList[index].comments.push(newComment);
  //   this.setState({
  //     masterPostList: newPostList
  //   })
  // }

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
    this.sortPostList(newPostList);
    this.setState({
      masterPostList: newPostList
    })
  }

  handleVoteDownClick(index) {
    let newPostList = this.state.masterPostList.slice();
    newPostList[index].votes--;
    this.sortPostList(newPostList);
    this.setState({
      masterPostList: newPostList
    })
  }

  sortPostList(postList) {
    postList.sort((a, b) => {
      return b.votes - a.votes;
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

export default Feed;
