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
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    isDeleted: false,
    err: null
  };
  componentDidMount = () => {
    const promises = [
      api.getArticleById(this.props.article_id),
      api.getCommentsByArticleId(this.props.article_id)
    ];
    Promise.all(promises)
      .then(dataArray => {
        this.setState({
          article: dataArray[0],
          comments: dataArray[1],
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({ err: err.response });
      });
  };
  componentDidUpdate = prevProps => {
    if (prevProps.article_id !== this.props.article_id) {
      this.setState({ isLoading: true });
      const promises = [
        api.getArticleById(this.props.article_id),
        api.getCommentsByArticleId(this.props.article_id)
      ];
      Promise.all(promises)
        .then(dataArray => {
          this.setState({
            article: dataArray[0],
            comments: dataArray[1],
            isLoading: false
          });
        })
        .catch(err => {
          this.setState({ err: err.response });
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
      api.deleteArticleById(this.state.article.article_id).catch(err => {
        this.setState({ err: err.response });
      });
      this.setState({ isDeleted: true });
    }
  };

  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
    const { isLoading, isDeleted, article, comments } = this.state;
    const { colour, user } = this.props;
    if (isLoading)
      return (
        <Loading>
          <BarLoader size={200} color={"black"} loading={isLoading} />
        </Loading>
      );
    if (isDeleted)
      return (
        <main className="middle-area--content">
          <Card>Article Has Been Deleted</Card>
          <StyledLink to="/">
            <StyledButton>HOME</StyledButton>
          </StyledLink>
        </main>
      );
    return (
      <StyledContentArea colour={colour}>
        <Card>
          <h2>{article.title}</h2>
          <h3>
            <StyledLinkGrey to="/" state={{ author: article.author }}>
              {article.author}
            </StyledLinkGrey>
          </h3>
          <p>{article.body}</p>
          <Voter
            type={"articles"}
            votes={article.votes || 0}
            id={article.article_id}
          />
          {user === article.author && (
            <StyledDeleteButton onClick={this.handleClick}>
              DELETE
            </StyledDeleteButton>
          )}
        </Card>
        <h3>COMMENTS</h3>
        <CommentPoster
          article_id={article.article_id}
          addComment={this.addComment}
          user={user}
        />
        {comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              user={user}
            />
          );
        })}
      </StyledContentArea>
    );
  }
}

export default SingleArticle;
