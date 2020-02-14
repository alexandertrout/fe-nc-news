import React, { Component } from "react";
import styled from "styled-components";
import * as api from "../utils/api";
import {
  StyledContentArea,
  StyledButton,
  StyledLinkGrey
} from "../styling/styled-components";
import ErrorPage from "./ErrorPage";

const FormContainer = styled.section`
  margin: 2vh;
  align-items: center;
`;

const ArticleForm = styled.form`
  padding: 2vh;
  background-color: whitesmoke;
  height: 75vh;
  border-radius: 10px;
`;

const StyledTitleInput = styled.input`
  padding: 2vh;
  background-color: whitesmoke;
  height: 10vh;
  font-size: 36px;
`;

const StyledInput = styled.textarea`
  padding: 2vh;
  background-color: whitesmoke;
  height: 20vh;
  width: 80%;
  font-size: 16px;
`;

const StyledSelect = styled.select`
  padding: 2vh;
  background-color: whitesmoke;
  height: 5vh;
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
    hasPosted: false,
    article_id: 0,
    err: null,
    submit: false
  };

  componentDidMount = () => {
    api
      .getAllTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(err => {
        this.setState({ err: err.response });
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
    this.setState({ submit: true });
    api
      .postArticle(this.state.article)
      .then(response => {
        if (response.status === 201) {
          this.setState({
            hasPosted: true,
            article_id: response.data.article.article_id,
            body: "",
            title: ""
          });
        }
      })
      .catch(err => {
        this.setState({ err: err.response });
      });
  };

  handleReset = event => {
    this.setState({ submit: false });
  };

  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
    return (
      <StyledContentArea colour={this.props.colour}>
        <FormContainer>
          <ArticleForm onSubmit={this.handleSubmit}>
            <StyledTitleInput
              onChange={this.handleTitleChange}
              type="text"
              value={this.state.title}
              placeholder="Article Title..."
              required
            />
            <StyledInput
              onChange={this.handleBodyChange}
              type="text"
              value={this.state.body}
              placeholder="Article Body..."
              required
            />
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
            {this.state.submit !== true && <StyledButton>SUBMIT</StyledButton>}
            {this.state.submit !== false && (
              <StyledLinkGrey to={`/article/${this.state.article_id}`}>
                <br></br>
                View Article
              </StyledLinkGrey>
            )}{" "}
            <br></br>
            {this.state.submit !== false && (
              <StyledButton onClick={this.handleReset}>RESET</StyledButton>
            )}
          </ArticleForm>
        </FormContainer>
      </StyledContentArea>
    );
  }
}

export default ArticlePoster;
