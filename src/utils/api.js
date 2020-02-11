const axios = require("axios");

exports.getAllArticles = params => {
  return axios
    .get("https://alex-be-nc-news.herokuapp.com/api/articles", {
      params
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

exports.getAllTopics = () => {
  return axios
    .get(`https://alex-be-nc-news.herokuapp.com/api/topics`)
    .then(({ data: { topics } }) => {
      return topics;
    });
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

exports.postCommentByArticleId = (article_id, username, body) => {
  return axios.post(
    `https://alex-be-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    { username, body }
  );
};

exports.deleteCommentById = comment_id => {
  return axios
    .delete(`https://alex-be-nc-news.herokuapp.com/api/comments/${comment_id}`)
    .then(response => {
      console.log(response);
    });
};

// delete COMMENT by comment id
// .delete("/api/comments/2")

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

exports.patchById = (type, comment_id, vote) => {
  return axios
    .patch(`https://alex-be-nc-news.herokuapp.com/api/${type}/${comment_id}`, {
      inc_votes: vote
    })
    .then(response => {
      console.log(response);
    });
};
