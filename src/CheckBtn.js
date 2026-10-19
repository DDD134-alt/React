import { useState } from "react";

const Checkbox = () => {
  const cars = ["그랜저", "싼타페", "제네시스", "코나", "투싼"];

  // 선택된 값을 담는 State 함수 생성, 근데 이제 배열(Array)을 곁들인... 배열 형태의 State
  const [checkedCars, setCheckedCars] = useState([]);

  // 체크 상황에 따라 실행될 핸들러 함수 (개별 체크 가능)
  const onChange = (e) => {
    // 체크 여부 Boolean(true/false)으로 확인
    const { value, checked } = e.target;

    if (checked) {
      // 체크한 목록 배열에 추가
      // ...checkedCars, value : 기존 상태를 전개 연산자로 풀어 놓은 뒤 새로운 정보를 추가하라는 뜻
      // 전개 연산자(SpreadOperator) : 기존 객체나 배열을 펼쳐서 복사하는 문법
      setCheckedCars([...checkedCars, value]);
    } else {
      // 체크 해제한 목록을 배열에서 찾아낸 후 그 목록 제거
      // filter : 체크가 되지 않은 목록만 빼내겠다는 뜻
      setCheckedCars(checkedCars.filter((car) => car !== value));
    }
  };

  // 전체 선택/해제 함수
  const isAllChecked = checkedCars.length === cars.length;

  // (조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드)
  // 전체 선택 체크박스의 checked 상태에 따라
  // 전체 선택을 체크(true)하면 [cars] 목록 배열을 setCheckedCars에 삽입하여 모두 선택
  // 전체 선택을 해제(false)하면 빈 [] 배열을 setCheckedCars에 삽입하여 모두 해제
  const onChangeAll = (e) => {
    setCheckedCars(e.target.checked ? [...cars] : []);
  };

  return (
    <>
      <h3>체크 박스</h3>
      <label>
        <input type="checkbox" checked={isAllChecked} onChange={onChangeAll} />
        전체 선택
      </label>
      <br />

      {cars.map((car) => (
        <label key={car} style={{ marginRight: "15px" }}>
          <input
            type="checkbox"
            value={car}
            checked={checkedCars.includes(car)} // 배열에 있으면 체크 상태
            onChange={onChange}
          />
          {car}
        </label>
      ))}
      <p>
        {checkedCars.length > 0
          ? `선택한 차량 (${checkedCars.length}대) : ${checkedCars.join(", ")}`
          : "운전해 보고 싶은 차량을 모두 선택하세요."}
      </p>
    </>
  );
};

export default Checkbox;
