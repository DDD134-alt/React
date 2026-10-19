// 라디오 버튼 : 여러개중 단 한개를 선택하는 것

import { useState } from "react";

// const RadioBtn = () => {
//   const [selectValue, setSelectValue] = useState("");

//   // 이벤트 (Event, 사용자의 행동이나 시스템의 상태 변화) 핸들러 함수
//   function handleChange(event) {
//     setSelectValue(event.target.value);
//   }

//   return (
//     <div>
//       <div>
//         <label htmlFor="그랜저">
//           <input
//             type="radio"
//             name="car"
//             id="그랜저"
//             value="그랜저"
//             onChange={handleChange}
//           />
//           그랜저
//         </label>
//       </div>
//       <br />

//       <div>
//         <label htmlFor="싼타페">
//           <input
//             type="radio"
//             name="car"
//             id="싼타페"
//             value="싼타페"
//             onChange={handleChange}
//           />
//           싼타페
//         </label>
//       </div>
//       <br />

//       <div>
//         <label htmlFor="제네시스">
//           <input
//             type="radio"
//             name="car"
//             id="제네시스"
//             value="제네시스"
//             onChange={handleChange}
//           />
//           제네시스
//         </label>
//       </div>
//       <br />

//       <div>
//         <label htmlFor="코나">
//           <input
//             type="radio"
//             name="car"
//             id="코나"
//             value="코나"
//             onChange={handleChange}
//           />
//           코나
//         </label>
//       </div>
//       <br />

//       <div>
//         <label htmlFor="투싼">
//           <input
//             type="radio"
//             name="car"
//             id="투싼"
//             value="투싼"
//             onChange={handleChange}
//           />
//           투싼
//         </label>
//       </div>
//       <br />

//       <p>선택한 차량 : {selectValue}</p>
//     </div>
//   );
// };

// ============================== 아래는 선생님 답안지 ==============================

const RadioBtn = () => {
  const cars = ["그랜저", "싼타페", "제네시스", "코나", "투싼"]; // 배열로 목록 관리

  // 선택된 다 하나의 값이므로 state 한개로 충분
  const [selectedCar, setSelectedCar] = useState("");

  return (
    <>
      <p>라디오 버튼</p>
      {cars.map((car) => (
        <label key={car} style={{ marginRight: "12px" }}>
          <input
            type="radio"
            name="car"
            value={car}
            checked={selectedCar === car}
            onChange={(e) => setSelectedCar(e.target.value)}
          />
          {car}
        </label>
      ))}
      <h3>
        {selectedCar
          ? `선택한 차량: ${selectedCar}`
          : "운전하고 싶은 차량을 선택하세요."}
      </h3>
    </>
  );
};

export default RadioBtn;
