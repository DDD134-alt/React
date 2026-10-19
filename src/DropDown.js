import { useState } from "react";
// useState : 화면을 다시 그리기 위해(상태 관리를 위해) 사용되는 문법

const DropDown = () => {
  const [selectValue, setSelectValue] = useState("");

  return (
    <>
      <h2>드롭다운 예제</h2>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="watermelon">수박</option>
      </select>
      <h3>선택된 과일 : {selectValue}</h3>
    </>
  );
};

export default DropDown;
