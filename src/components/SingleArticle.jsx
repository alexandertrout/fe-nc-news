import React, { Component } from "react";
import * as api from "../utils/api";
import { Background, Card, Circle } from "../styling/styled-components";

class SingleArticle extends Component {
  state = {
    article: {}
  };
  componentDidMount = () => {
    const promises = [
      api.getArticleById(this.props.article_id),
      api.getCommentsByArticleId(this.props.article_id)
    ]; // render the comments mapped over a comment card?
    Promise.all(promises).then(dataArray => {
      console.log(dataArray);
    }); // set state inside this .then block?
  };

  render() {
    console.log(this.props);
    return (
      <Background>
        SINGLE ARTICLE CARD
        <Card>{`${this.props.article_id}`}</Card>
      </Background>
    );
  }
}

export default SingleArticle;
