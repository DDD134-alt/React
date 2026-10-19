// Props : 프라퍼티스(속성'들') 키와 벨류의 묶음, 데이터를 전달하기 위한 기본적인 객체 묶음
// 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터
// 아래 props는 키워드가 아니라 임의명이라 다른 단어를 사용해도 무방

// 아래는 함수형 컴포넌트 생성 : 화살표 함수
// props : 객체로 이루어져 있음(키와 값으로 구성된 속성들이 존재)
// const WelcomeProp = (props) => {
//   return (
//     <>
//       {/* name을 선언하지 않아도 문제 없이 작동 가능 */}
//       <h3>인적사항</h3>
//       <p>이름 : {props.name}</p>
//       <p>성별 : {props.gender}</p>
//       <p>나이 : {props.age}</p>
//       <p>주소 : {props.addr}</p>
//     </>
//   );
// };

// 구조분해 또는 비구조화 할당 : {}
// const WelcomeProp = (props) => {
//   const {name, gender, age, addr} = props;
//   return (
//     <>
//       {/* name을 선언하지 않아도 문제 없이 작동 가능 */}
//       <h3>인적사항</h3>
//       <p>이름 : {name}</p>
//       <p>성별 : {gender}</p>
//       <p>나이 : {age}</p>
//       <p>주소 : {addr}</p>
//     </>
//   );
// };

// 구조분해 또는 비구조화 할당 중괄호{} 이렇게도 사용 가능!
// 부모 컴포넌트(App.js)에서 해당 속성을 빋지 못하면
// name = "없음" 처럼 기본값 인자 "없음" 출력
const WelcomeProp = ({
  name = "없음",
  gender = "사람",
  age = 0,
  addr = "지구",
}) => {
  return (
    <>
      {/* 부모 컴포넌트(App.js)에서 name을 선언하지 않아도 문제 없이 작동 가능 */}
      <h3>인적사항</h3>
      <p>이름 : {name}</p>
      <p>성별 : {gender}</p>
      <p>나이 : {age}</p>
      <p>주소 : {addr}</p>
    </>
  );
};

export default WelcomeProp;
