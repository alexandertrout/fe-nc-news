import React, { Component } from "react";
import * as api from "../utils/api";
import { Background, Card } from "../styling/styled-components";
import CommentCard from "./CommentCard";
import Voter from "./Voter";
import CommentPoster from "./CommentPoster";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: []
  };
  componentDidMount = () => {
    const promises = [
      api.getArticleById(this.props.article_id),
      api.getCommentsByArticleId(this.props.article_id)
    ];
    Promise.all(promises).then(dataArray => {
      this.setState({ article: dataArray[0], comments: dataArray[1] });
    });
  };
  componentDidUpdate = prevProps => {
    if (prevProps.article_id !== this.props.article_id) {
      const promises = [
        api.getArticleById(this.props.article_id),
        api.getCommentsByArticleId(this.props.article_id)
      ];
      Promise.all(promises).then(dataArray => {
        this.setState({ article: dataArray[0], comments: dataArray[1] });
      });
    }
  };
  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    return (
      <Background>
        SINGLE ARTICLE CARD
        <Card>
          <h2>{this.state.article.title}</h2>
          <p>{this.state.article.body}</p>
          <Voter
            type={"articles"}
            votes={this.state.article.votes || 0}
            id={this.state.article.article_id}
          />
        </Card>
        COMMENTS
        <CommentPoster
          article_id={this.state.article.article_id}
          addComment={this.addComment}
        />
        {this.state.comments.map(comment => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </Background>
    );
  }
}

export default SingleArticle;
