import React, { Component } from "react";
import { Router } from "@reach/router";
import MenuBar from "./components/MenuBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import UsersList from "./components/UsersList";

class App extends Component {
  render() {
    return (
      <div className="outer-container">
        <h1 className="header-bar">NC NEWS</h1>
        <section className="middle-area">
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/articles/:topic_slug" />
            <SingleArticle path="/article/:article_id/*" />
            <UsersList path="/users/*" />
          </Router>
        </section>
        <MenuBar />
      </div>
    );
  }
}

export default App;
