import { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onInsert = () => {
    const nextList = [...list, parseInt(number)];
    setList(nextList);
    setNumber("");
  };

  return (
    <>
      <label>
        정수입력{" "}
        <input value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list && list.map((e, index) => <li key={index}>{e}</li>)}
        {/* 대신 불러주는 이 없이 작성 한 사람이 바로 불러오는거라 등록이라 할 수 있음 
            [list] 의존성 배열의 값이 바뀔 때만 getAverage 연산이 다시 실행됨, 
            인풋창 입력 등으로 리렌더링이 일어나더라도 list가 안 바뀌면 이전에 계산해 둔 값을 재사용 */}
        <p>평균값 : {useMemo(() => getAverage(list), [list])}</p>
      </ul>
    </>
  );
};

export default Average;
