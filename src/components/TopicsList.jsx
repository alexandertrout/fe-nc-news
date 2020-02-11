import React, { Component } from "react";
// import * as api from "../utils/api";
// import ArticleCard from "./ArticleCard";
// import { Background, StyledLink } from "../styling/styled-components";

class TopicsList extends Component {
  // state = {
  //   articles: []
  // };
  // componentDidMount() {
  //   if (this.props.topic_slug) {
  //     api.getAllArticles(this.props.topic_slug).then(articles => {
  //       this.setState({ articles });
  //     });
  //   } else {
  //     api.getAllArticles().then(articles => {
  //       this.setState({ articles });
  //     });
  //   }
  // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.topic_slug !== this.props.topic_slug) {
  //     api.getAllArticles(this.props.topic_slug).then(articles => {
  //       this.setState({ articles });
  //     });
  //   }
  // }
  // render() {
  //   return (
  //     <Background>
  //       TOPICS LIST for: {this.props.topic_slug}
  //       {this.state.articles.map(article => {
  //         return (
  //           <StyledLink
  //             key={article.article_id}
  //             to={`/article/${article.article_id}/`}
  //           >
  //             <ArticleCard key={article.article_id} article={article} />
  //           </StyledLink>
  //         );
  //       })}
  //       )
  //     </Background>
  //   );
  // }
}
export default TopicsList;
