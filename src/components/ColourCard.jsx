import React, { Component } from "react";
import { StyledButton } from "../styling/styled-components";
import styled from "styled-components";

class ColourCard extends Component {
  buttonClick = event => {
    this.props.updateColour(this.props.colour[event.target.value]);
  };

  render() {
    const Colour = styled.div`
      margin: 0vh 0vh 1vh 0vh;
      padding: 3vh;
      min-height: 10vh;
      width: 42vw;
      background-color: ${this.props.colour[Object.keys(this.props.colour)[0]]};
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 4px;
    `;
    return (
      <div>
        <Colour>
          <h3>{Object.keys(this.props.colour)[0]}</h3>
          <StyledButton
            value={Object.keys(this.props.colour)[0]}
            onClick={this.buttonClick}
          >
            Select
          </StyledButton>
        </Colour>
      </div>
    );
  }
}

export default ColourCard;
