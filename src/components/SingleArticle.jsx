import React, { Component } from "react";
import * as api from "../utils/api";
import {
  Card,
  Loading,
  StyledLink,
  StyledButton,
  StyledDeleteButton,
  StyledContentArea,
  StyledLinkGrey
} from "../styling/styled-components";
import CommentCard from "./CommentCard";
import Voter from "./Voter";
import CommentPoster from "./CommentPoster";
import { BarLoader } from "react-spinners";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    isDeleted: false
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

  handleClick = () => {
    if (this.props.user === this.state.article.author) {
      api.deleteArticleById(this.state.article.article_id);
      this.setState({ isDeleted: true });
    } else {
      console.log("WRONG USER");
    }
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
    if (this.state.isDeleted)
      return (
        <main className="middle-area--content">
          <Card>Article Has Been Deleted</Card>
          <StyledLink to="/">
            <StyledButton>HOME</StyledButton>
          </StyledLink>
        </main>
      );
    return (
      <StyledContentArea colour={this.props.colour}>
        <Card>
          <h2>{this.state.article.title}</h2>
          <h3>
            <StyledLinkGrey
              to="/"
              state={{ author: this.state.article.author }}
            >
              {this.state.article.author}
            </StyledLinkGrey>
          </h3>
          <p>{this.state.article.body}</p>
          <Voter
            type={"articles"}
            votes={this.state.article.votes || 0}
            id={this.state.article.article_id}
          />
          {this.props.user === this.state.article.author && (
            <StyledDeleteButton onClick={this.handleClick}>
              DELETE
            </StyledDeleteButton>
          )}
        </Card>
        <h3>COMMENTS</h3>
        <CommentPoster
          article_id={this.state.article.article_id}
          addComment={this.addComment}
          user={this.props.user}
        />
        {this.state.comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              user={this.props.user}
            />
          );
        })}
      </StyledContentArea>
    );
  }
}

export default SingleArticle;
