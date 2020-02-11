import React, { Component } from "react";
// import { Router, Link } from "@reach/router";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
// import styled from "styled-components";
import { Background, StyledLink } from "../styling/styled-components";

class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: "created_at"
  };
  componentDidMount = () => {
    const params = {
      topic: this.props.topic_slug,
      sort_by: this.state.sort_by
    };
    api.getAllArticles(params).then(articles => {
      this.setState({ articles });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevProps.topic_slug !== this.props.topic_slug
    ) {
      const params = {
        topic: this.props.topic_slug,
        sort_by: this.state.sort_by
      };
      api.getAllArticles(params).then(articles => {
        this.setState({ articles });
      });
    }
  };

  handleChange = event => {
    let sort_by = event.target.value;
    this.setState({ sort_by });
  };

  render() {
    // console.log(this.state, this.props);
    return (
      <Background>
        <form onChange={this.handleChange}>
          <label>
            Order By:
            <select id="" name="" form="">
              <option value="created_at">Date Created</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
          </label>
        </form>
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
      </Background>
    );
  }
}

export default ArticleList;
