import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
`;
const BtnBox = styled.div`
  display: flex;
  margin: 0;
  padding: 10px;
  justify-content: center;
  background: ${(props) => props.color || "gray"};
`;

const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  background: ${(props) => props.color || "white"};
  color: white;
  width: 200px;
  height: 40px;
  margin: 5px;
  border: 1px solid ${(props) => props.color || "white"};
  & + button {
    margin-left: 10px;
  }
  ${(props) => props.inverted && css``}
`;
const Box = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 400px;
  margin: 5px;
  border: 1px solid ${(props) => props.color || "black"};
`;

const ColorChanger = () => {
  return (
    <>
      <Container>
        <BtnBox>
          <Button color="green">Green</Button>
          <Button color="orange">Orange</Button>
          <Button color="purple">Purple</Button>
        </BtnBox>
        <Box></Box>
      </Container>
    </>
  );
};

export default ColorChanger;
