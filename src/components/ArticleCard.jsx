import React, { Component } from "react";
import { Card, Info, Circles, Circle } from "../styling/styled-components";

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
          <Circles>
            <Circle>{this.props.article.votes}</Circle>
            <Circle>{this.props.article.comment_count}</Circle>
          </Circles>
        </Info>
      </Card>
    );
  }
}

export default ArticleCard;
