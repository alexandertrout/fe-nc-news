import React, { Component } from "react";
import * as api from "../utils/api";
import { Card, Loading } from "../styling/styled-components";
import CommentCard from "./CommentCard";
import Voter from "./Voter";
import CommentPoster from "./CommentPoster";
import { BarLoader } from "react-spinners";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true
  };
  componentDidMount = () => {
    const promises = [
      api.getArticleById(this.props.article_id),
      api.getCommentsByArticleId(this.props.article_id)
    ];
    Promise.all(promises).then(dataArray => {
      this.setState({
        article: dataArray[0],
        comments: dataArray[1],
        isLoading: false
      });
    });
  };
  componentDidUpdate = prevProps => {
    if (prevProps.article_id !== this.props.article_id) {
      this.setState({ isLoading: true });
      const promises = [
        api.getArticleById(this.props.article_id),
        api.getCommentsByArticleId(this.props.article_id)
      ];
      Promise.all(promises).then(dataArray => {
        this.setState({
          article: dataArray[0],
          comments: dataArray[1],
          isLoading: false
        });
      });
    }
  };

  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    if (this.state.isLoading)
      return (
        <Loading>
          <BarLoader
            size={200}
            color={"black"}
            loading={this.state.isLoading}
          />
        </Loading>
      );
    return (
      <main className="middle-area--content">
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
      </main>
    );
  }
}

export default SingleArticle;
