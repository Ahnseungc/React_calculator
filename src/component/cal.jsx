import { React, useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 40%;
  max-width: 450px;
  height: 50%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
const Button = styled.button`
  background-color: #f2f3f5;
  border: none;
  color: black;
  font-size: 1.5rem;
  border-radius: 35px;
  cursor: pointer;
  box-shadow: 3px 3px 3px lightgray;

  &:active {
    margin-left: 2px;
    margin-top: 2px;
    box-shadow: none;
  }
`;
const CalButton = styled(Button)`
  font-size: 2rem;
  color: white;
  background-color: #4b89dc;
`;

const ZeroButton = styled(Button)`
  grid-column: 1/3;
`;
const InputBar = styled.input`
  width: 40%;
  max-width: 450px;
  height: 65px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 30px;
  border: 2px solid #4b89dc;
  text-align: right;
  padding-right: 20px;
  &:focus {
    outline: none;
  }
`;

const Cal = () => {
  const [calc, setCalc] = useState("");
  const [operCheck, setOperCheck] = useState(true);
  const [pointCheck, setPointCheck] = useState(true);

  const getNum = (e) => {
    setCalc((prev) => prev + e.target.value);
  };
  const getOper = (e) => {
    setCalc((prev) => prev + e.target.value);
  };
  const getPoint = (e) => {
    if (calc.length === 0) {
      return;
    }
    setCalc((prev) => prev + e.target.value);
  };
  const getResult = () => {
    let replace_str = calc.replace(/x/gi, "*");

    if (isNaN(eval(replace_str))) {
      setCalc("");
    } else if (eval(replace_str) == Infinity) {
      alert("0으로 나눌수 없습니다");
      setCalc("");
      return false;
    } else {
      setCalc((prev) => eval(replace_str));
    }
  };
  const delCalc = () => {
    let str = String(calc).slice(0, -1);
    setCalc((prev) => str);
  };

  return (
    <MainContainer>
      <InputBar readOnly value={calc} />
      <ButtonContainer>
        <Button>AC</Button>
        <Button onClick={delCalc}>DEL</Button>
        <CalButton onClick={getOper} value="%">
          %
        </CalButton>
        <CalButton onClick={getOper} value="/">
          /
        </CalButton>
        <Button onClick={getNum} value={7}>
          7
        </Button>
        <Button onClick={getNum} value={8}>
          8
        </Button>
        <Button onClick={getNum} value={9}>
          9
        </Button>
        <CalButton value="x" onClick={getOper}>
          x
        </CalButton>
        <Button value={4} onClick={getNum}>
          4
        </Button>
        <Button value={5} onClick={getNum}>
          5
        </Button>
        <Button value={6} onClick={getNum}>
          6
        </Button>
        <CalButton value="-" onClick={getOper}>
          {" "}
          -
        </CalButton>
        <Button value={1} onClick={getNum}>
          1
        </Button>
        <Button value={2} onClick={getNum}>
          {" "}
          2
        </Button>
        <Button value={3} onClick={getNum}>
          3
        </Button>
        <CalButton value="+" onClick={getOper}>
          +
        </CalButton>
        <ZeroButton value={0} onClick={getNum}>
          0
        </ZeroButton>
        <Button value="." getPoint=".">
          .
        </Button>
        <CalButton onClick={getResult}>=</CalButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default Cal;
