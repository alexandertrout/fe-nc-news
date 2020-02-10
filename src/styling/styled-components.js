import styled from "styled-components";
import { Router, Link } from "@reach/router";

export const Background = styled.section`
  margin: 1vh 0vw;
  min-height: 150vh;
  overflow: auto;
  background-color: orange;
  color: black;
  text-decoration: none;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.section`
  min-height: 20vh;
  margin: 3vw;
  border-radius: 10px;
  overflow: auto;
  background-color: whitesmoke;
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div`
  margin: 1vh 3vw;
  height: 10vh;
  width: 10vh;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
