import React, { Component } from "react";
import * as api from "../utils/api";
import UserCard from "./UserCard";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import { StyledContentArea } from "../styling/styled-components";

const bounceAnimation = keyframes`${fadeInDown}`;
const BounceDiv = styled.div`
  animation: 1s ${bounceAnimation};
  border-radius: 4px;
  background: whitesmoke;
  font-size: 4vh;
`;
const NotBounceDiv = styled.div`
  border-radius: 4px;
  background: whitesmoke;
  font-size: 4vh;
`;

const StyledUserSection = styled.section`
  @media only screen and (max-width: 700px) {
    margin: 1vh;
    grid-gap: 1vh;
  }
  margin: 4vh 0vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4vh;
  justify-items: center;
`;

class Logins extends Component {
  state = {
    users: [],
    updated: false,
    selectedUser: "",
    firstRender: true
  };

  componentDidMount = () => {
    api.getAllUsers().then(users => {
      this.setState({ users });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.selectedUser !== this.state.selectedUser) {
      this.setState({ updated: true, firstRender: false });
    }
  };

  handleLogIn = user => {
    this.setState({ selectedUser: user, updated: false });
  };

  render() {
    return (
      <StyledContentArea colour={this.props.colour}>
        {this.state.updated && <BounceDiv> New User Selected!</BounceDiv>}
        {!this.state.updated && !this.state.firstRender && (
          <NotBounceDiv> New User Selected!</NotBounceDiv>
        )}
        <StyledUserSection>
          {this.state.users.map(user => {
            return (
              <UserCard
                key={user.username}
                user={user}
                updateUser={this.props.updateUser}
                handleLogIn={this.handleLogIn}
              />
            );
          })}
        </StyledUserSection>
      </StyledContentArea>
    );
  }
}

export default Logins;
