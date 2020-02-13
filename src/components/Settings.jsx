import React, { Component } from "react";
import {
  StyledButton,
  StyledContentArea,
  StyledLink
} from "../styling/styled-components";
import styled from "styled-components";
import ColourCard from "./ColourCard";

const Content = styled.div`
  padding: 3vh 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Option = styled.div`
  margin: 1vh 0vh;
  padding: 3vh;
  min-height: 10vh;
  width: 42vw;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  text-decoration: none;
`;

class Settings extends Component {
  state = {
    colours: [
      { Orange: "#f09c00" },
      { Blue: "#4883a8" },
      { Green: "#299454" },
      { Grey: "#bab6ba" },
      { Pink: "#ffc0bf" },
      { Red: "#b80d0d" }
    ]
  };

  render() {
    return (
      <StyledContentArea colour={this.props.colour}>
        <Content>
          <h1>Settings</h1>

          <Option>
            LOG IN AS A DIFFERENT USER
            <StyledButton>
              <StyledLink to="/logins">Select</StyledLink>
            </StyledButton>
          </Option>

          {this.state.colours.map(colour => {
            return (
              <ColourCard
                key={colour[Object.keys(colour)[0]]}
                colour={colour}
                updateColour={this.props.updateColour}
              />
            );
          })}
        </Content>
      </StyledContentArea>
    );
  }
}

export default Settings;
