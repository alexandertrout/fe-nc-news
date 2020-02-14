import React, { Component } from "react";
import * as api from "../utils/api";
import { StyledButton } from "../styling/styled-components";

class CommentPoster extends Component {
  state = {
    comment: {
      author: this.props.user,
      article_id: this.props.article_id,
      body: ""
    },
    isInputClicked: false
  };

  handleFocus = event => {
    this.setState({ isInputClicked: true });
  };

  handleBlur = event => {
    if (event.target.value) {
    } else {
      this.setState({ isInputClicked: false });
    }
  };

  handleChange = event => {
    const body = event.target.value;
    this.setState(currentState => {
      currentState.comment.body = body;
      return { currentState };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postCommentByArticleId(
        this.props.article_id,
        this.state.comment.author,
        this.state.comment.body
      )
      .then(comment => {
        this.props.addComment(comment);
      });
    this.setState(currentState => {
      let newState = { ...currentState.comment };
      newState.body = "";
      return { comment: newState, isInputClicked: false };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={this.state.isInputClicked ? "clicked-input" : undefined}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          type="text"
          value={this.state.comment.body}
          placeholder="Post a comment..."
          required
        />
        <StyledButton>Post</StyledButton>
      </form>
    );
  }
}

export default CommentPoster;
