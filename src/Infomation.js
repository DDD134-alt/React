import { useState, useEffect } from "react";

// 이름 닉네임 주소를 입력 받아 출력해 보기

const Infomation = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [addr, setAddr] = useState("");

  useEffect(() => {
    console.log("렌더링 완료 이후 호출!!!");
    console.log("현재이름 : ", name);
  }, [name]);

  return (
    <>
      <label>
        이름
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>{" "}
      <br />
      <label>
        별명
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </label>{" "}
      <br />
      <label>
        주소
        <input value={addr} onChange={(e) => setAddr(e.target.value)} />
      </label>{" "}
      <br />
      <div>
        <p>이름 : {name}</p>
        <p>별명 : {nickname}</p>
        <p>주소 : {addr}</p>
      </div>
    </>
  );
};

export default Infomation;
