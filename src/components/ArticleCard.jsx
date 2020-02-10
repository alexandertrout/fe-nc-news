import React, { Component } from "react";
import styled from "styled-components";
import { Card, Circle } from "../styling/styled-components";

const Circles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

class ArticleCard extends Component {
  state = {
    article: {}
  };

  componentDidMount = () => {};

  render() {
    return (
      <Card>
        ARTICLE CARD
        <h2> TITLE</h2>
        <p>TEXT MORE STUFF</p>
        <Circles>
          <Circle>ALEX</Circle>
          <Circle>6</Circle>
          <Circle>10</Circle>
        </Circles>
      </Card>
    );
  }
}

export default ArticleCard;
