const axios = require("axios");

exports.getAllArticles = () => {
  return axios
    .get("https://alex-be-nc-news.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data;
    });
  // .catch(error => {
  //   console.log(error);
  // });
};

exports.getAllTopics = () => {
  return axios
    .get(`https://alex-be-nc-news.herokuapp.com/api/topics`)
    .then(response => {
      // console.log(response);
    });
  // .catch(error => {
  //   console.log(error);
  // });
};

exports.getAllUsers = () => {
  return axios
    .get(`https://alex-be-nc-news.herokuapp.com/api/users`)
    .then(response => {
      console.log(response);
    });
  // .catch(error => {
  //   console.log(error);
  // });
};

exports.getArticleById = article_id => {
  return axios
    .get(`https://alex-be-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
  // .catch(error => {
  //   console.log(error);
  // });
};

exports.getCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://alex-be-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
  // .catch(error => {
  //   console.log(error);
  // });
};

exports.postCommentByArticleId = (article_id, req_body) => {
  return axios
    .post(
      `https://alex-be-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      { req_body }
    )
    .then(function(response) {
      console.log(response);
    });
  // .catch(function(error) {
  //   console.log(error);
  // });
};

exports.getUserByUsername = username => {
  return axios
    .get(`https://alex-be-nc-news.herokuapp.com/api/users/${username}`)
    .then(response => {
      console.log(response);
    });
  // .catch(error => {
  //   console.log(error);
  // });
};

// delete COMMENT by comment id

// patch COMMENT by comment id (votes)

// patch ARTICLE by article id (votes)
