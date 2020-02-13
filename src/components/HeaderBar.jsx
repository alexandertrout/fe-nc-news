import React from "react";
import { StyledLink } from "../styling/styled-components";
import { Link } from "@reach/router";
import styled from "styled-components";

const HeaderDiv = styled.div`
  padding: 0 4vw;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
`;

const HeaderBar = () => {
  return (
    <section className="header-bar">
      <HeaderDiv>
        <Link to="settings/*" className="link">
          Settings
        </Link>
        <Link to="/" className="link">
          <h1>NC NEWS</h1>
        </Link>
        <StyledLink to="/posting/article">POST AN ARTICLE</StyledLink>
      </HeaderDiv>
    </section>
  );
};

export default HeaderBar;
