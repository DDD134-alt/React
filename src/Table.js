// 테이블 요소에 이벤트 추가하기

import { useState, useEffect } from "react";
import "./App.css";

const rowData = [
  { id: 100, name: "카즈하", age: 23, addr: "오사카" },
  { id: 100, name: "안유진", age: 23, addr: "대전" },
  { id: 100, name: "장원영", age: 23, addr: "서울" },
  { id: 100, name: "유나유", age: 23, addr: "수원" },
  { id: 100, name: "이서이", age: 23, addr: "인천" },
];

const Table = () => {
  // 데이터가 서버에서 오기 전에 틀을 먼저 그리도록 설정
  const [members, setMembers] = useState("");

  useEffect(() => {
    // 서버에 대한 데이터를 비동기로 요청함(비동기여야 화면이 안 멈춤)
    setMembers(rowData);
  }, []); // 마운트(접붙인다) 한 번 그려놓고 데이터를 긁어서 새로 데려온 데이터만 다시 렌더링

  return (
    <table>
      <tr>
        <th>아이디</th>
        <th>이름</th>
        <th>나이</th>
      </tr>

      {members &&
        members.map((member) => (
          <tr key={member.id} onClick={() => console.log(member.name)}>
            <td>{member.name}</td>
            <td>{member.age}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </table>
  );
};

export default Table;
