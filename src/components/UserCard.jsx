import React from "react";
import { StyledButton } from "../styling/styled-components";
import styled from "styled-components";

const User = styled.div`
  @media only screen and (max-width: 700px) {
    margin: 0vh 0vh 1vh 0vh;
    padding: 1vw;
    min-height: 10vh;
    width: 42vw;
  }
  padding: 1vw;
  min-height: 10vh;
  width: 15vw;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
`;

const UserCard = props => {
  const buttonClick = event => {
    props.updateUser(event.target.value);
    props.handleLogIn(event.target.value);
  };

  return (
    <User>
      <h3>Username:</h3>
      <p> {props.user.username}</p>
      <StyledButton value={props.user.username} onClick={buttonClick}>
        Log In
      </StyledButton>
    </User>
  );
};

export default UserCard;
