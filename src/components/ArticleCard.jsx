import React, { Component } from "react";
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
    const {
      created_at,
      title,
      topic,
      author,
      votes,
      comment_count
    } = this.props.article;
    let date = created_at.substring(0, 7);
    return (
      <Card>
        <h2> {title}</h2>
        <Info id="7">
          <div>
            <p>
              Topic:{" "}
              <StyledLinkGrey to={`/articles/${topic}`}>
                {topic}{" "}
              </StyledLinkGrey>
            </p>
            <p>
              Author:{" "}
              <StyledLinkGrey to="/" state={{ author }}>
                {author}{" "}
              </StyledLinkGrey>
            </p>
            <p> Posted: {date}</p>
            <p> Votes: {votes}</p>
          </div>
          <CirclesArea>
            <VoteCircle>{votes}</VoteCircle>
            <CommentCircle>{comment_count}</CommentCircle>
          </CirclesArea>
        </Info>
      </Card>
    );
  }
}

export default ArticleCard;
