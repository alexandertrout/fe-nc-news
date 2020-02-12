import React from "react";
import { StyledLink } from "../styling/styled-components";
import { Link } from "@reach/router";

const HeaderBar = () => {
  return (
    <section className="header-bar">
      <Link to="/" className="link">
        <h1>NC NEWS</h1>
      </Link>
      <StyledLink to="/logins"> LOG IN AS A DIFFERENT USER</StyledLink>
      <StyledLink to="/posting/article">POST AN ARTICLE</StyledLink>
    </section>
  );
};

export default HeaderBar;
