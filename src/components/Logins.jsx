import React, { Component } from "react";
import * as api from "../utils/api";
import UserCard from "./UserCard";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const bounceAnimation = keyframes`${fadeInDown}`;
const BounceDiv = styled.div`
  animation: 1s ${bounceAnimation};
  margin: 2vh 15vw 2vh 15vw;
  width: 70vw;
  border-radius: 4px;
  background: whitesmoke;
  font-size: 4vh;
`;
const NotBounceDiv = styled.div`
  margin: 2vh 15vw 2vh 15vw;
  width: 70vw;
  border-radius: 4px;
  background: whitesmoke;
  font-size: 4vh;
`;

const StyledUserSection = styled.section`
  margin: 1vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1vh;
  justify-items: center;
`;

class Logins extends Component {
  state = {
    users: [],
    updated: false,
    selectedUser: ""
  };

  componentDidMount = () => {
    api.getAllUsers().then(users => {
      this.setState({ users });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.selectedUser !== this.state.selectedUser) {
      this.setState({ updated: true });
    }
  };

  handleLogIn = user => {
    this.setState({ selectedUser: user, updated: false });
  };

  render() {
    return (
      <>
        {this.state.updated && <BounceDiv> New User Selected!</BounceDiv>}
        {!this.state.updated && (
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
      </>
    );
  }
}

export default Logins;
