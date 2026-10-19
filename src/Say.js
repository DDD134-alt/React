import { useState } from "react";

const Say = () => {
  // const [현재 상태 값(상수), 상태를 변경하는 세터 함수(SetterFunction)]
  // setMessage를 통해 새로운 값이 들어올때마다
  // Say 컴포넌트 자체가 리렌더링되며 새로운 const message 상수가 다시 만들어지는 원리
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="이름입력"
        // e : 이벤트 객체, input에 데이터가 입력될때마다 onChange가 발생,
        // 이때 e.target.value로 입력된 데이터 setName를 name으로 업뎃
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {/* onClick : 버튼이 눌러졌을 때 이벤트 발생
          콜백 함수(Callback Function) : 평소에는 대기 상태로 있다가 
          onClick이 발동될때 ()함수 생성, 그 후 화살표 함수(=>)로 setMessage 호출 */}
      <button onClick={() => setMessage("안녕하세요")}>입장</button>
      <button onClick={() => setMessage("안녕히가세요")}>퇴장</button>
      <button onClick={() => setMessage(`웰컴, 환영합니다! ${name}님!`)}>
        웰컴
      </button>
      <button onClick={() => setMessage("")}>지우기</button>

      {/* style={{ key: value }}를 써야 하지만, 
          ES6 단축 속성명(Shorthand Property, 키와 변수명이 같을 때 값을 생략함)으로 
          {{ key }} 형태로 줄여서 사용한 것 */}
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <button style={{ color: "purple" }} onClick={() => setColor("purple")}>
        보라색
      </button>
      <button style={{ color: "yellow" }} onClick={() => setColor("yellow")}>
        노란색
      </button>
    </>
  );
};

export default Say;
