import React, { Component } from "react";
import styled from "styled-components";
import {
  Card,
  Info,
  StyledLinkGrey,
  StyledDeleteButton
} from "../styling/styled-components";
import Voter from "./Voter";
import * as api from "../utils/api";

const FormatDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

class CommentCard extends Component {
  state = {
    article: {},
    user: this.props.user,
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
        <h3>
          <StyledLinkGrey to="/" state={{ author: this.props.comment.author }}>
            {this.props.comment.author}
          </StyledLinkGrey>
        </h3>
        <Info>
          <p>{this.props.comment.body}</p>
          <FormatDiv>
            <Voter
              type={"comments"}
              votes={this.props.comment.votes || 0}
              id={this.props.comment.comment_id}
            />
          </FormatDiv>
        </Info>
        {this.props.comment.author === this.state.user && (
          <StyledDeleteButton onClick={this.handleClick}>
            DELETE
          </StyledDeleteButton>
        )}
      </Card>
    );
  }
}

export default CommentCard;
