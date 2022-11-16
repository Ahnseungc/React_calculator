import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  text-align: center;
  background-color: yellow;
`;

const header = (props) => {
  return (
    <Container>
      <div className="header">
        <h1>{props.name}의 계산기 입니다.</h1>
      </div>
    </Container>
  );
};

export default header;
