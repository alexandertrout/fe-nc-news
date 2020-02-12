import React, { Component } from "react";
import styled from "styled-components";
import { StyledLink } from "../styling/styled-components";
import * as api from "../utils/api";

class MenuBar extends Component {
  state = {
    isClicked: false,
    topics: [{ slug: undefined }]
  };

  componentDidMount = () => {
    api.getAllTopics().then(topics => {
      this.setState({ topics });
    });
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isClicked: !currentState.isClicked };
    });
  };

  render() {
    return (
      <div className="bottom-menu" onClick={this.handleClick}>
        <StyledLink to="/">HOME</StyledLink>
        {this.state.topics.map(topic => {
          return (
            <StyledLink key={topic.slug} to={`/articles/${topic.slug}`}>
              {topic.slug}
            </StyledLink>
          );
        })}
        <StyledLink to="/">USERS</StyledLink>
      </div>
    );
  }
}

const Menu = styled.div`
  background-color: grey;
  color: white;
  text-decoration: none;
  display: grid;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default MenuBar;

// render() {
//     return (
//       <>
//         <div className="bottom-menu" onClick={this.handleClick}>
//           Menu
//         </div>
//         {this.state.isClicked && (
//           <Menu>
//             <StyledLink to="/">HOME</StyledLink>
//             <p>TOPICS</p>
//             {/* <TopicsMenu>
//               {this.state.topics.map(topic => {
//                 return (
//                   <StyledLink key={topic.slug} to={`/articles/${topic.slug}`}>
//                     {topic.slug}
//                   </StyledLink>
//                 );
//               })}
//             </TopicsMenu> */}
//             <StyledLink to="/">USERS</StyledLink>
//           </Menu>
//         )}
//       </>
//     );
//   }
// }
