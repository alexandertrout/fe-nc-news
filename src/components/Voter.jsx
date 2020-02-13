import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";
const StyledVotes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = vote => {
    api.patchById(this.props.type, this.props.id, vote);
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };

  render() {
    return (
      <StyledVotes>
        <button
          disabled={this.state.optimisticVotes > 0}
          onClick={() => {
            this.handleClick(1);
          }}
        >
          <img
            className="vote"
            src={
              this.state.optimisticVotes > 0
                ? "https://image.flaticon.com/icons/svg/2107/2107638.svg"
                : "https://image.flaticon.com/icons/svg/2107/2107593.svg"
            }
            alt="tick"
          ></img>
        </button>
        <p className="voterNum">
          {this.props.votes + this.state.optimisticVotes}
        </p>
        <button
          disabled={this.state.optimisticVotes < 0}
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          <img
            className="vote"
            src={
              this.state.optimisticVotes < 0
                ? "https://image.flaticon.com/icons/svg/1828/1828665.svg"
                : "https://image.flaticon.com/icons/svg/1828/1828774.svg"
            }
            alt="tick"
          ></img>
        </button>
      </StyledVotes>
    );
  }
}

export default Voter;
