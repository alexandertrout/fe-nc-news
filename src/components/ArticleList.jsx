import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import { StyledLink, Loading } from "../styling/styled-components";
import { BarLoader } from "react-spinners";

class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    isLoading: true,
    rubber: false
  };
  componentDidMount = () => {
    const params = {
      topic: this.props.topic_slug,
      sort_by: this.state.sort_by
    };
    api.getAllArticles(params).then(articles => {
      this.setState({ articles: articles, isLoading: false });
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
        this.setState({ articles: articles, isLoading: false });
      });
    }
  };

  handleChange = event => {
    let sort_by = event.target.value;
    this.setState({ sort_by, rubber: true });
  };

  render() {
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
      <main className="middle-area--content">
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
      </main>
    );
  }
}

export default ArticleList;
