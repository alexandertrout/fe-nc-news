import styled from "styled-components";
import { Link } from "@reach/router";

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
  color: whitesmoke;
`;

export const Card = styled.section`
  padding: 2vw;
  min-height: 20vh;
  overflow: auto;
  background-color: whitesmoke;
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

export const Info = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
`;

export const Circles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const Circle = styled.div`
  margin: 1vh 3vw;
  height: 8vh;
  width: 8vh;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
