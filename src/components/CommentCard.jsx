import React, { Component } from "react";
import styled from "styled-components";
import { Card, Info } from "../styling/styled-components";
import Voter from "./Voter";

const FormatP = styled.p`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

class CommentCard extends Component {
  state = {
    article: {},
    // HARDCODED USER FOR NOW
    user: "tickle122"
  };

  componentDidMount = () => {};

  render() {
    // console.log(this.props);
    return (
      <Card>
        <h3>{this.props.comment.author}</h3>
        <Info>
          <p>{this.props.comment.body}</p>
          <FormatP>
            <Voter
              type={"comments"}
              votes={this.props.comment.votes}
              id={this.props.comment.comment_id}
            />
            {/* VOTER.JSX IN HERE (PASS DOWN this.props.comment.vote)*/}
          </FormatP>
        </Info>
        <button onClick={handleClick}>DELETE</button>
      </Card>
    );
  }
}

export default CommentCard;
