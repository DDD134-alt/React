import { useState } from "react";

const Count = () => {
  // const [number, setNumber] = useState(0);
  // let 사용시
  const [flag, setFlag] = useState(false);
  let number = 0;

  const numInc = () => {
    number++;
    console.log(number);
    setFlag(!flag);
  };

  const numDec = () => {
    number--;
    console.log(number);
    setFlag(!flag);
  };

  return (
    <>
      <h3> 현재카운터 : {number}</h3>
      {/* useState 사용시 구문
      <button onClick={() => setNumber(number + 1)}>증가</button>
      <button onClick={() => setNumber(number - 1)}>감소</button> */}
      {/* let을 사용할때 구문 
      let number = 0; 때문에 아무리 증가/감소 버튼을 눌러도 값이 0으로 최기화 됨 */}
      <button onClick={numInc}>증가</button>
      <button onClick={numDec}>감소</button>
    </>
  );
};

export default Count;
