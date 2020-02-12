import React, { Component } from "react";
import { Router } from "@reach/router";
import MenuBar from "./components/MenuBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import UsersList from "./components/UsersList";
import HeaderBar from "./components/HeaderBar";
import Logins from "./components/Logins";
import ArticlePoster from "./components/ArticlePoster";

class App extends Component {
  state = {
    user: "happyamy2016"
  };

  updateUser = user => {
    this.setState({ user });
  };

  render() {
    return (
      <div className="outer-container">
        <HeaderBar />
        <section className="middle-area">
          <Router>
            <ArticleList path="/" />
            <ArticleList path="/articles/:topic_slug" />
            <SingleArticle
              path="/article/:article_id/*"
              user={this.state.user}
            />
            <ArticlePoster path="/posting/article" user={this.state.user} />
            <Logins path="/logins" updateUser={this.updateUser} />
            <UsersList path="/users/*" />
          </Router>
        </section>
        <MenuBar />
      </div>
    );
  }
}

export default App;
