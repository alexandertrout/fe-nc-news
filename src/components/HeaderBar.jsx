import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import { StyledLink } from "../styling/styled-components";

class HeaderBar extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isClicked: !currentState.isClicked };
    });
  };

  render() {
    return (
      <TopBar>
        HEADER BAR
        <div onClick={this.handleClick}>Menu</div>
        {this.state.isClicked && (
          <Menu>
            <StyledLink to="/">HOME</StyledLink>
            <StyledLink to="/">TOPICS</StyledLink>
            <StyledLink to="/">USERS</StyledLink>
          </Menu>
        )}
      </TopBar>
    );
  }
}

//Need a media query in here for all sizing, colours etc. can be styled all together.
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
  display: flex;
  justify-content: space-around;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default HeaderBar;
