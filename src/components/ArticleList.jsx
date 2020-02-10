import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import styled from "styled-components";
import { Background, StyledLink } from "../styling/styled-components";

class ArticleList extends Component {
  state = {
    articles: [
      { article_id: 1, name: 1 },
      { article_id: 2, name: 2 },
      { article_id: 3, name: 3 },
      { article_id: 4, name: 4 },
      { article_id: 5, name: 5 }
    ]
  };
  componentDidMount = () => {
    api.getAllArticles().then(({ articles }) => {
      console.log(articles);
      this.setState({ articles });
    });
  };

  render() {
    // console.log(this.state);
    return (
      <Background>
        ARTICLES
        {this.state.articles.map(article => {
          return (
            <StyledLink to={`/articles/${article.article_id}/*`}>
              <ArticleCard key={article.article_id} article={article} />
            </StyledLink>
          );
        })}
      </Background>
    );
  }
}

export default ArticleList;
