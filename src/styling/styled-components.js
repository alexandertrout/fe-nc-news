import styled from "styled-components";
import { Link } from "@reach/router";

export const MiddleArea = styled.section`
  grid-row-start: 2;
  grid-row-end: 3;
  color: black;
  text-decoration: none;
  overflow: auto;
  display: flex;
  justify-content: center;
  background-color: ${props => props.colour};
`;

export const StyledContentArea = styled.main`
  overflow: scroll;
  padding: 1vh 0vh;
  min-height: 150vh;
  background-color: ${props => props.colour};
  max-width: 800px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
`;

export const StyledLinkGrey = styled(Link)`
  text-decoration: none;
  color: gray;
`;

export const Card = styled.section`
  margin: 0vh 0vh 1vh 0vh;
  padding: 2vw;
  min-height: 20vh;
  border-radius: 6px;
  background-color: whitesmoke;
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
`;

export const Info = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
`;

export const CirclesArea = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const CommentCircle = styled.div`
  margin: 1vh 3vw;
  height: 7vh;
  width: 7vh;
  background-image: url("https://icons-for-free.com/iconfiles/png/512/chatting+comment+conversation+message+talk+icon-1320166529237990390.png");
  background-size: cover;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export const VoteCircle = styled.div`
  margin: 1vh 3vw;
  height: 7vh;
  width: 7vh;
  background-image: url("https://i.ya-webdesign.com/images/white-heart-icon-png-7.png");
  background-size: cover;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export const Loading = styled.div`
  margin: 10vh;
  display: flex;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  margin: 0.5vh 0 1vh;
  height: 3vh;
  width: 10vh;
  border: none;
  background-color: black;
  color: white;
  font-size: 2vh;
  border-radius: 8px;
`;

export const StyledDeleteButton = styled.button`
  margin: 0.5vh 0 1vh;
  height: 3vh;
  width: 10vh;
  border: none;
  background-color: red;
  color: white;
  font-size: 14px;
  border-radius: 8px;
`;
