import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { StyledLink } from "../styling/styled-components";
import * as api from "../utils/api";

class HeaderBar extends Component {
  state = {
    isClicked: false,
    topics: [{ slug: undefined }]
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
    // console.log(this.state);
    return (
      <TopBar>
        HEADER BAR
        <div onClick={this.handleClick}>Menu</div>
        {this.state.isClicked && (
          <Menu>
            <StyledLink to="/">HOME</StyledLink>
            <p>TOPICS</p>

            <TopicsMenu>
              {this.state.topics.map(topic => {
                return (
                  <StyledLink key={topic.slug} to={`/articles/${topic.slug}`}>
                    {topic.slug}
                  </StyledLink>
                );
              })}
            </TopicsMenu>
            <StyledLink to="/">USERS</StyledLink>
          </Menu>
        )}
      </TopBar>
    );
  }
}

//Need a media query in here for all sizing, colours etc. can be styled all together.
const TopicsMenu = styled.p`
  text-decoration: none;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TopBar = styled.section`
  background-color: black;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;

const Menu = styled.div`
  background-color: grey;
  color: white;
  text-decoration: none;
  display: grid;
  /* display: flex;
  justify-content: space-around; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default HeaderBar;
