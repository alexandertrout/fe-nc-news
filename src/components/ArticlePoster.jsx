import React, { Component } from "react";
import styled from "styled-components";
import * as api from "../utils/api";
import {
  StyledContentArea,
  StyledButton,
  StyledLinkGrey
} from "../styling/styled-components";

const FormContainer = styled.section`
  margin: 2vh;
  align-items: center;
`;

const ArticleForm = styled.form`
  padding: 2vh;
  background-color: whitesmoke;
  height: 75vh;
`;

const StyledTitleInput = styled.input`
  padding: 2vh;
  background-color: whitesmoke;
  height: 10vh;
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
    hasPosted: false,
    article_id: 0
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
      console.log(response);
      if (response.status === 201) {
        this.setState({
          hasPosted: true,
          article_id: response.data.article.article_id
        });
      }
    });
  };

  render() {
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
            <StyledButton>SUBMIT</StyledButton>
            {this.state.hasPosted && (
              <StyledLinkGrey to={`/article/${this.state.article_id}`}>
                <br></br>
                View Article
              </StyledLinkGrey>
            )}
          </ArticleForm>
        </FormContainer>
      </StyledContentArea>
    );
  }
}

export default ArticlePoster;
