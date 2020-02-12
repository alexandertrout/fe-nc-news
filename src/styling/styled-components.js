import styled from "styled-components";
import { Link } from "@reach/router";
// import { keyframes } from "styled-components";
// import { fadeInRightBig, rubberBand } from "react-animations";

// export const fadeAnimation = keyframes`${fadeInRightBig}`;
// export const FadeInDiv = styled.div`
//   animation: 1s ${fadeAnimation};
// `;

// export const rubberAnimation = keyframes`${rubberBand}`;
// export const RubberDiv = styled.div`
//   animation: 1s ${rubberAnimation};
// `;

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

export const Loading = styled.div`
  margin: 10vh;
  display: flex;
  justify-content: space-around;
`;
