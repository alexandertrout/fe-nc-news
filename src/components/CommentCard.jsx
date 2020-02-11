import React, { Component } from "react";
import styled from "styled-components";
import { Card, Info } from "../styling/styled-components";
import Voter from "./Voter";
import * as api from "../utils/api";

const FormatP = styled.p`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

class CommentCard extends Component {
  state = {
    article: {},
    // HARDCODED USER FOR NOW
    user: "tickle122",
    isDeleted: false
  };

  componentDidMount = () => {};

  handleClick = () => {
    if (this.props.comment.author === this.state.user) {
      api.deleteCommentById(this.props.comment.comment_id);
      this.setState({ isDeleted: true });
    } else {
      console.log("WRONG USER");
    }
  };

  render() {
    if (this.state.isDeleted === true) return <Card> Comment Deleted </Card>;
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
          </FormatP>
        </Info>
        <button onClick={this.handleClick}>DELETE</button>
      </Card>
    );
  }
}

export default CommentCard;
