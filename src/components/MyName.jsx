import React from "react";
import styled, { keyframes } from "styled-components";

import GlobalStyles from "../GlobalStyles";

const NameWrapper = styled.div`
  padding-top: 50px;
  font-family: "Press Start 2P", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LetterWrapper = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${keyframes`
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `} 0.5s forwards ease-in-out;
  animation-delay: ${({ index }) => index * 0.1}s;
`;

const Text = styled.div`
  font-size: 30px;
  display: flex;
  user-select: none;
  text-shadow: 0 0 20px rgba(31, 38, 135, 0.37);
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 20px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.nameColor};
  transition: ease-in 5s, ease-out 5s;
`;

const name = "Paweł";
const surname = "Pałasiński";

const MyName = () => {
  return (
    <NameWrapper>
      <GlobalStyles />
      <Text>
        {name.split("").map((l, index) => (
          <Wrapper key={index}>
            <LetterWrapper index={index}>{l}</LetterWrapper>
          </Wrapper>
        ))}
      </Text>

      <Text>
        {surname.split("").map((l, index) => (
          <Wrapper key={index}>
            <LetterWrapper index={index}>{l}</LetterWrapper>
          </Wrapper>
        ))}
      </Text>
    </NameWrapper>
  );
};

export default MyName;
