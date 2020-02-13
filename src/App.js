import React, { Component } from "react";
import { Router } from "@reach/router";
import MenuBar from "./components/MenuBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import HeaderBar from "./components/HeaderBar";
import Logins from "./components/Logins";
import ArticlePoster from "./components/ArticlePoster";
import Settings from "./components/Settings";

class App extends Component {
  state = {
    user: "happyamy2016",
    colour: "#f09c00"
  };

  updateUser = user => {
    this.setState({ user });
  };

  updateColour = colour => {
    this.setState({ colour });
  };

  render() {
    console.log(this.state);
    return (
      <div className="outer-container">
        <HeaderBar />
        <section className="middle-area">
          <Router>
            <ArticleList path="/" colour={this.state.colour} />
            <ArticleList
              path="/articles/:topic_slug"
              colour={this.state.colour}
            />
            <SingleArticle
              path="/article/:article_id/*"
              user={this.state.user}
              colour={this.state.colour}
            />
            <ArticlePoster
              path="/posting/article"
              user={this.state.user}
              colour={this.state.colour}
            />
            <Logins
              path="/logins"
              updateUser={this.updateUser}
              colour={this.state.colour}
            />
            <Settings
              path="/settings/*"
              updateColour={this.updateColour}
              colour={this.state.colour}
            />
          </Router>
        </section>
        <MenuBar />
      </div>
    );
  }
}

export default App;
