import React, { Component } from "react";
import { StyledLink } from "../styling/styled-components";
import * as api from "../utils/api";

class MenuBar extends Component {
  state = {
    isClicked: false,
    topics: [{ slug: "" }]
  };

  componentDidMount = () => {
    api.getAllTopics().then(topics => {
      this.setState({ topics });
    });
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isClicked: !currentState.isClicked };
    });
  };

  render() {
    return (
      <div className="bottom-menu" onClick={this.handleClick}>
        <StyledLink to="/">HOME</StyledLink>
        {this.state.topics.map(topic => {
          return (
            <StyledLink key={topic.slug} to={`/articles/${topic.slug}`}>
              {topic.slug}
            </StyledLink>
          );
        })}
      </div>
    );
  }
}

export default MenuBar;
