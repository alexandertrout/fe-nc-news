import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import * as api from "../utils/api";
import {
  StyledLink,
  Loading,
  StyledContentArea
} from "../styling/styled-components";
import { BarLoader } from "react-spinners";
import styled from "styled-components";

const Styledh2 = styled.h2`
  padding: 1vh;
  background-color: black;
  color: white;
  align-items: center;
  font-family: customFont;
`;

class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    isLoading: true,
    rubber: false,
    err: null
  };
  componentDidMount = () => {
    const params = {
      topic: this.props.topic_slug,
      sort_by: this.state.sort_by,
      author: this.props.location.state
        ? this.props.location.state.author
        : undefined
    };
    api
      .getAllArticles(params)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false, err: null });
      })
      .catch(err => {
        this.setState({ err: err.response });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevProps.topic_slug !== this.props.topic_slug ||
      prevProps.location.state !== this.props.location.state
    ) {
      const params = {
        topic: this.props.topic_slug,
        sort_by: this.state.sort_by,
        author: this.props.location.state
          ? this.props.location.state.author
          : undefined
      };
      api
        .getAllArticles(params)
        .then(articles => {
          this.setState({ articles: articles, isLoading: false, err: null });
        })
        .catch(err => {
          this.setState({ err });
        });
    }
  };

  handleChange = event => {
    let sort_by = event.target.value;
    this.setState({ sort_by, rubber: true });
  };

  render() {
    const { colour, location } = this.props;
    const StyledForm = styled.form`
      background-color: ${colour};
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    `;
    if (this.state.err) {
      return <ErrorPage err={this.state.err} />;
    }
    if (this.state.isLoading)
      return (
        <Loading className="loader">
          <BarLoader
            size={200}
            color={"black"}
            loading={this.state.isLoading}
          />
        </Loading>
      );
    return (
      <StyledContentArea colour={colour}>
        {location.state && location.state.author && (
          <Styledh2>Articles By: {location.state.author}</Styledh2>
        )}
        <StyledForm onChange={this.handleChange}>
          <select className="form-select" id="" name="" form="">
            <option className="form-select" value="created_at">
              Customise Article Order:
            </option>
            <option className="form-select" value="created_at">
              Date Created
            </option>
            <option className="form-select" value="comment_count">
              Comment Count
            </option>
            <option className="form-select" value="votes">
              Votes
            </option>
          </select>
        </StyledForm>
        {this.state.articles.map(article => {
          return (
            <StyledLink
              key={article.article_id}
              to={`/article/${article.article_id}/`}
            >
              <ArticleCard key={article.article_id} article={article} />
            </StyledLink>
          );
        })}
      </StyledContentArea>
    );
  }
}

export default ArticleList;
