import React, { Component } from "react";
import styled from "styled-components";
import { Card, Info, Circles, Circle } from "../styling/styled-components";

// const Circles = styled.section`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 1fr;
// `;

class CommentCard extends Component {
  state = {
    article: {}
  };

  componentDidMount = () => {};

  render() {
    return (
      <Card>
        <h3>{this.props.comment.author}</h3>
        <Info>
          <p>{this.props.comment.body}</p>
          {/* <Circles>
          NEW LAYOUT NEEDED FOR THE COMMENTS SECTION..
            <Circle>{this.props.comment.votes}</Circle>
          </Circles> */}
        </Info>
      </Card>
    );
  }
}

export default CommentCard;
