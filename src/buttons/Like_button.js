import React from 'react';
import { render } from 'react-dom';
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dislikeCount: 25,
      likeCount: 100,
      liked: false,
      disliked: false,
    };
    this.likeClickHandler = this.likeClickHandler.bind(this);
    this.dislikeCLickHandler = this.dislikeCLickHandler.bind(this);
  }
  likeClickHandler() {
    console.log('like!');
    if (this.state.liked) {
      console.log('liked');
      this.setState({
        ...this.state,
        liked: false,
        likeCount: this.state.likeCount - 1,
      });
    } else {
      if (this.state.disliked) {
        this.setState({
          ...this.state,
          liked: true,
          disliked: false,
          dislikeCount: this.state.dislikeCount - 1,
          likeCount: this.state.likeCount + 1,
        });
      } else {
        this.setState({
          ...this.state,
          liked: true,
          likeCount: this.state.likeCount + 1,
        });
      }
    }
  }
  dislikeCLickHandler() {
    console.log('dislike...');
    if (this.state.disliked) {
      this.setState({
        ...this.state,
        disliked: false,
        dislikeCount: this.state.dislikeCount - 1,
      });
    } else {
      if (this.state.liked) {
        this.setState({
          ...this.state,
          liked: false,
          disliked: true,
          likeCount: this.state.likeCount - 1,
          dislikeCount: this.state.dislikeCount + 1,
        });
      } else {
        this.setState({
          ...this.state,
          disliked: true,
          dislikeCount: this.state.dislikeCount + 1,
        });
      }
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.likeClickHandler}>
          like | {this.state.likeCount}
        </button>
        <button onClick={this.dislikeCLickHandler}>
          dislike | {this.state.dislikeCount}
        </button>
      </div>
    );
  }
}
export default LikeButton;
