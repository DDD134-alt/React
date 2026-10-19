// import { useState } from "react";

// const InputEvent = () => {
//   // input에 입력되는 값을 실시간으로 보관하는 State 상수
//   const [name, setName] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [age, setAge] = useState("");
//   const [addr, setAddr] = useState("");
//   const [email, setEmail] = useState("");

//   // 확인 버튼을 눌렀을때 출력되는 데이터를 보관하는 State 상수
//   // null의 초기값은 입력 데이터가 객체란 뜻
//   const [result, setResult] = useState(null);

//   // 확인버튼을 누를때 input에 입력된 값들(name, pwd, age, addr, email)을
//   // result 객체에 저장하는 함수 그 이름은 totalResult
//   const totalResult = () => {
//     setResult({ name, pwd, age, addr, email });
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="이름"
//         onChange={(e) => setName(e.target.value)}
//         value={name}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="비밀번호"
//         onChange={(e) => setPwd(e.target.value)}
//         value={pwd}
//       />
//       <br />
//       <input
//         type="number"
//         placeholder="나이"
//         onChange={(e) => setAge(e.target.value)}
//         value={age}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="주소"
//         onChange={(e) => setAddr(e.target.value)}
//         value={addr}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="이메일"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />
//       <br />

//       {/* 확인 버튼을 누르면 totalResult 함수가 실행되어
//           위에 적은 정보를 result 함수에 넣어줌 */}
//       <button onClick={totalResult}>확인</button>

//       {/* 조건부 렌더링(ConditionalRendering) : {함수이름 && (함수가 참일때 화면에 나오는 데이터)}
//           result 함수에 데이터가 존재한다면 소괄호 안에 정보가 출력됨 */}
//       {result && (
//         <div>
//           <p>이름 : {result.name}</p>
//           <p>비밀번호 : {result.pwd}</p>
//           <p>나이 : {result.age}</p>
//           <p>주소 : {result.addr}</p>
//           <p>이메일 : {result.email}</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default InputEvent;

// ============================== 아래는 선생님 답안지 ==============================

// 이름, 비밀번호, 나이, 주소, 이메일을 입력 받기
// 전부 입력 완료 되었을 때 확인 버튼 누르면 입력 받은 결과를 출력 하기

import { useState } from "react";

const InputEvent = () => {
  // 입력값마다 useState() 선언
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  // 확인 버튼을 눌렀을 때 결과 출력
  // useState("")   : 아직 문자열 형식의 데이터가 들어오지 않은 빈 값
  // useState(null) : 아직 어떤 형식의 데이터가 들어오는지도 알 수 없는 빈 값
  const [result, setResult] = useState(null);

  // 입력값마다 onChange 핸들러 따로 작성
  // Handler(Event Handler) : 특정 이벤트가 발생했을 때 이를 감지하고 처리하는(감지/처리,Callback) 함수
  // 사용자가 버튼을 클리하거나, 입력창에 글자를 입력하는등의 이밴트(e)가 발생했을때
  // 시스템이 이를 바로 감지해서 실행 할 수 있도록 지정해준 콜백 함수
  const onChangeName = (e) => setName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeAddress = (e) => setAddress(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  // 모든 값이 입력되었는지 확인 (공백만 입력한 경우도 미입력 처리)
  // .trim()으로 좌우 공란을 지운 후 데이터 값이 모두(&&, and 조건) 비어있지 않으면 참으로 출력
  const isAllFilled =
    name.trim() !== "" &&
    password.trim() !== "" &&
    age.trim() !== "" &&
    address.trim() !== "" &&
    email.trim() !== "";

  // 확인 버튼 클릭
  const onSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 새로 고침 방지

    if (!isAllFilled) {
      alert("모든 항목을 입력 해주세요.");
      return;
    }

    // 확인을 누른 시점의 값을 저장
    setResult({ name, password, age, address, email });
  };

  // 초기화 버튼 클릭
  const onReset = () => {
    setName("");
    setPassword("");
    setAge("");
    setAddress("");
    setEmail("");
    setResult(null);
  };

  return (
    <>
      <p>입력 연습 (각각의 useState)</p>

      <form onSubmit={onSubmit}>
        <div>
          <label>
            이름 :{" "}
            <input value={name} onChange={onChangeName} placeholder="이름" />
          </label>
        </div>
        <div>
          <label>
            비밀번호 :{" "}
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호"
            />
          </label>
        </div>
        <div>
          <label>
            나이 :{" "}
            <input
              type="number"
              value={age}
              onChange={onChangeAge}
              placeholder="나이"
              min="0"
            />
          </label>
        </div>
        <div>
          <label>
            주소 :{" "}
            <input
              value={address}
              onChange={onChangeAddress}
              placeholder="주소"
            />
          </label>
        </div>
        <div>
          <label>
            이메일 :{" "}
            <input
              type="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="example@email.com"
            />
          </label>
        </div>

        {/* type="submit" : 누르면 위의 onsubmit이 소환 
            이때, preventDefault으로 새로고침을 방지해야 정보가 날라가지 않음
            disabled={!isAllFilled} : 전부 입력해야 확인 버튼 활성화
            즉 빈칸이 있으면 (isAllFilled) disabled가 true가 되어 비활성화 된다 */}
        <button type="submit" disabled={!isAllFilled}>
          확인
        </button>
        <button type="button" onClick={onReset}>
          초기화
        </button>
      </form>

      {/* 결과 출력 */}
      {result && (
        <div>
          <h3>입력 결과</h3>
          <p>이름 : {result.name}</p>
          <p>비밀번호 : {"*".repeat(result.password.length)}</p>
          <p>나이 : {result.age}</p>
          <p>주소 : {result.address}</p>
          <p>이메일 : {result.email}</p>
        </div>
      )}
    </>
  );
};

export default InputEvent;
