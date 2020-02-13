import React, { Component } from "react";
import styled from "styled-components";
import * as api from "../utils/api";
import { StyledContentArea } from "../styling/styled-components";

const FormContainer = styled.section`
  margin: 2vh;
`;

const ArticleForm = styled.form`
  padding: 2vh;
  background-color: whitesmoke;
  height: 75vh;
`;

const StyledInput = styled.input`
  padding: 2vh;
  background-color: whitesmoke;
  height: 20vh;
`;

const StyledSelect = styled.select`
  padding: 2vh;
  background-color: whitesmoke;
  height: 10vh;
`;

class ArticlePoster extends Component {
  state = {
    article: {
      title: "",
      topic: "coding",
      username: this.props.user,
      body: ""
    },
    topics: [],
    hasPosted: false
  };

  componentDidMount = () => {
    api.getAllTopics().then(topics => {
      this.setState({ topics });
    });
  };

  handleTitleChange = event => {
    const title = event.target.value;
    this.setState(currentState => {
      currentState.article.title = title;
      return { currentState };
    });
  };

  handleBodyChange = event => {
    const body = event.target.value;
    this.setState(currentState => {
      currentState.article.body = body;
      return { currentState };
    });
  };

  handleTopicChange = event => {
    const topic = event.target.value;
    this.setState(currentState => {
      currentState.article.topic = topic;
      return { currentState };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.postArticle(this.state.article).then(response => {
      if (response.status === 201) {
        this.setState({ hasPosted: true });
      }
    });
  };

  render() {
    console.log(this.state.article);
    return (
      <StyledContentArea colour={this.props.colour}>
        <FormContainer>
          <ArticleForm onSubmit={this.handleSubmit}>
            <StyledInput
              onChange={this.handleTitleChange}
              type="text"
              value={this.state.title}
              placeholder="Article Title..."
            />
            <StyledInput
              onChange={this.handleBodyChange}
              type="text"
              value={this.state.body}
              placeholder="Article Body..."
            />
            Select Topic:
            <StyledSelect
              className="form-select"
              id=""
              onChange={this.handleTopicChange}
            >
              {this.state.topics.map(topic => {
                return (
                  <option
                    key={topic.slug}
                    className="form-select"
                    value={topic.slug}
                  >
                    {topic.slug}
                  </option>
                );
              })}
            </StyledSelect>
            <button>SUBMIT</button>
            {this.state.hasPosted && <h2>Article Posted</h2>}
          </ArticleForm>
        </FormContainer>
      </StyledContentArea>
    );
  }
}

export default ArticlePoster;
