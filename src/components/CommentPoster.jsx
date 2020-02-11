import React, { Component } from "react";
import * as api from "../utils/api";

class CommentPoster extends Component {
  state = {
    comment: {
      // HARDCODED USER FOR NOW (author)
      author: "tickle122",
      article_id: this.props.article_id,
      body: ""
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
      return { comment: newState };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            POST A COMMENT:
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.comment.body}
            />
            <button>Post</button>
          </label>
        </form>
      </div>
    );
  }
}

export default CommentPoster;
