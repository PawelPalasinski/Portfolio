import React from "react";
import styled, { keyframes } from "styled-components";

const NameWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
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
  font-size: 40px;
  display: flex;
  user-select: none;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  padding-left: 5px;
  padding-top: 20px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.nameColor};
  text-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  transition: ease-in 5s, ease-out 5s;
`;

const name = "Paweł";
const surname = "Pałasiński";

const MyName = () => {
  return (
    <NameWrapper>
      <Text>
        {surname.split("").map((l, index) => (
          <Wrapper key={index}>
            <LetterWrapper index={index}>{l}</LetterWrapper>
          </Wrapper>
        ))}
      </Text>

      <Text>
        {name.split("").map((l, index) => (
          <Wrapper key={index}>
            <LetterWrapper index={index}>{l}</LetterWrapper>
          </Wrapper>
        ))}
      </Text>
    </NameWrapper>
  );
};

export default MyName;
