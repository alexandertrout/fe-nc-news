import React, { Component } from "react";
import * as api from "../utils/api";
import { Background, Card /*Circle*/ } from "../styling/styled-components";
import CommentCard from "./CommentCard";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [{}]
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

  render() {
    console.log(this.state);
    return (
      <Background>
        SINGLE ARTICLE CARD
        <Card>
          <h2>{this.state.article.title}</h2>
          <p>{this.state.article.body}</p>
        </Card>
        COMMENTS
        {this.state.comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
            ></CommentCard>
          );
        })}
      </Background>
    );
  }
}

export default SingleArticle;
