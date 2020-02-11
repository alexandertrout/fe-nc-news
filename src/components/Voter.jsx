import React, { Component } from "react";
import * as api from "../utils/api";

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
      <section>
        <button
          disabled={this.state.optimisticVotes > 0}
          onClick={() => {
            this.handleClick(1);
          }}
        >
          UPVOTE
        </button>
        <p>{this.props.votes + this.state.optimisticVotes}</p>
        <button
          disabled={this.state.optimisticVotes < 0}
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          DOWNVOTE
        </button>
      </section>
    );
  }
}

export default Voter;
