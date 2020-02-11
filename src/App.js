import React, { Component } from "react";
import { Router } from "@reach/router";
// import styled from "styled-components";
import HeaderBar from "./components/HeaderBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import UsersList from "./components/UsersList";
import TopicsList from "./components/TopicsList";

class App extends Component {
  render() {
    return (
      <div className="outer-container">
        {/*always there at the top of every page,*/}
        <HeaderBar />
        {/*only one of the following will show, filling the rest of the screen */}
        <section className="Main-area">
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/articles/:topic_slug" />
            <SingleArticle path="/article/:article_id/*" />
            <UsersList path="/users/*" />
            {/* <TopicsList path="/topics/:topic_slug" /> */}
          </Router>
        </section>
      </div>
    );
  }
}

export default App;
