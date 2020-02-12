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
    .then(({ data: { users } }) => {
      return users;
    });
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
  return axios
    .post(
      `https://alex-be-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      { username, body }
    )
    .then(({ data: { comment } }) => {
      return comment;
    });
};

exports.deleteCommentById = comment_id => {
  return axios.delete(
    `https://alex-be-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
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

exports.patchById = (type, comment_id, vote) => {
  return axios.patch(
    `https://alex-be-nc-news.herokuapp.com/api/${type}/${comment_id}`,
    {
      inc_votes: vote
    }
  );
};

exports.postArticle = ({ title, topic, username, body }) => {
  return axios.post(`https://alex-be-nc-news.herokuapp.com/api/articles`, {
    title,
    topic,
    username,
    body
  });
};
