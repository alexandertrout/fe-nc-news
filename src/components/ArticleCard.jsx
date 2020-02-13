import React, { Component } from "react";
import { Link } from "@reach/router";
import {
  Card,
  Info,
  CirclesArea,
  VoteCircle,
  CommentCircle,
  StyledLinkGrey
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
          <div>
            <p>
              Topic:{" "}
              <StyledLinkGrey to={`/articles/${this.props.article.topic}`}>
                {this.props.article.topic}{" "}
              </StyledLinkGrey>
            </p>
            <p>
              Author:{" "}
              <StyledLinkGrey
                to="/"
                state={{ author: this.props.article.author }}
              >
                {this.props.article.author}{" "}
              </StyledLinkGrey>
            </p>
            <p> Votes: {this.props.article.votes}</p>
          </div>
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
