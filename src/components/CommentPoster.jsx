import React, { Component } from "react";
import * as api from "../utils/api";

class CommentPoster extends Component {
  state = {
    comment: {
      author: "tickle122",
      article_id: this.props.article_id,
      votes: 0,
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
    api.postCommentByArticleId(
      this.props.article_id,
      this.state.comment.author,
      this.state.comment.body
    );
    this.props.addComment(this.state.comment);
    this.setState(currentState => {
      let newState = { ...currentState.comment };
      newState.body = "";
      return { comment: newState };
    });
  };

  render() {
    console.log(this.state.comment);
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label>
            POST A COMMENT:
            <input type="text" value={this.state.comment.body} />
            <button>Post</button>
          </label>
        </form>
      </div>
    );
  }
}

export default CommentPoster;
