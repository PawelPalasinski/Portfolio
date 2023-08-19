import React from "react";
import styled from "styled-components";

const NameWrapper = styled.div`
  width: 300px;
`;
const Letter = styled.div``;

const Text = styled.div`
  font-size: 40px;
  display: flex;
  user-select: none;
  margin: -50px auto;
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
        {name.split("").map((l, index) => (
          <Wrapper key={index}>
            <Letter className="letter">{l}</Letter>
          </Wrapper>
        ))}
      </Text>

      <Text>
        {surname.split("").map((l, index) => (
          <Wrapper key={index}>
            <Letter className="letter">{l}</Letter>
          </Wrapper>
        ))}
      </Text>
    </NameWrapper>
  );
};

export default MyName;
