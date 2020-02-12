import React, { Component } from "react";
import {
  Card,
  Info,
  CirclesArea,
  VoteCircle,
  CommentCircle
} from "../styling/styled-components";

class ArticleCard extends Component {
  state = {
    article: {}
  };

  componentDidMount = () => {};

  render() {
    return (
      <Card>
        <h2> {this.props.article.title}</h2>
        <Info>
          <p>
            Topic: {this.props.article.topic} <br />
            Author: {this.props.article.author} <br />
            Votes: {this.props.article.votes}
          </p>
          <CirclesArea>
            <VoteCircle>{this.props.article.votes}</VoteCircle>
            <CommentCircle>{this.props.article.comment_count}</CommentCircle>
          </CirclesArea>
        </Info>
      </Card>
    );
  }
}

export default ArticleCard;
