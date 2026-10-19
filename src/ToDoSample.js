import { useState, useEffect } from "react";
import "./App.css";

const sample = [
  { id: 1, text: "HTML 연습" },
  { id: 2, text: "CSS 복습" },
  { id: 3, text: "자바스크립트 이해" },
  { id: 4, text: "리액트 프로잭트" },
];

const ToDoSample = () => {
  // () => () 소괄호(또는 생략)는 암시적 반환(ImplicitReturn, 자동으로 값을 반환해 주는 방식)이 일어남
  // () => {} 중괄호는 명시적 반환(ExplicitReturn, 개발자가 직접 키워드를 적어서 값을 내보내는 방식)이 일어남
  const [todoData, setTodoData] = useState(() => {
    // 웹 브라우저의 저장소에서 키 이름이 todos 값을 가져옴
    const storeTodos = localStorage.getItem("todos");

    // 값이 있으면 내놓고, 없으면 초기값(sample)을 내놓아라
    return storeTodos ? JSON.parse(storeTodos) : sample;
  });

  // 상태관리 (렌더링 조건을 만들기 위해 사용)
  const [inputText, setInputText] = useState(""); // 입력에 대한 상태 관리
  const [nextId, setNextId] = useState(5); // 아이디 증가에 대한 상태 관리

  // 렌더링(useState) 다음에 뭘할지(useEffect)에 대한 구문
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  }, [todoData]);

  const onClick = () => {
    // 여기에서 렌더링이 일어날 때, 기존 배열을 수정하는 방식이 아닌
    // 새로운 배열 주소(Reference)를 감지해 렌더링이 일어나는 방식이다
    // 이는 상수(const) 성질을 가지고 있기 때문
    // 수정된 내용을 감지하고 렌더링이 일어나는건 아니지만, 내용 자체를 비교하는 방식도 있다
    const nextTodos = [...todoData, { id: nextId, text: inputText }];
    setNextId(nextId + 1); // 아이디를 1씩 증가시킴
    setTodoData(nextTodos);
    setInputText(""); // input 창을 지원 줌
  };

  const onEnter = (e) => {
    // 한글 입력 중(조합 중)에는 엔터 이벤트가 중복 실행되는 것을 방지합니다.
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") onClick();
  };

  const onRemove = (id) => {
    // filter(todo => todo.id !== id) 더블클릭한 아이디와 같지 않은 아이디만 반환해란 뜻
    const nextTodos = todoData.filter((todo) => todo.id !== id);
    setTodoData(nextTodos);
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        // 어떤 이벤트가 일어날때 (e.target.value) 여기에 등록해줘~ 느낌
        // 따라서 이건 호출이 아닌 등록하란 문법
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={onEnter}
      />
      {/* 이또한 등록, onClick = {onClick()}이처럼 괄호가 있으면 호출, 
          아래는 onClick = {() => onClick()}가 생략된 모양새 */}
      <button onClick={onClick}>추가!</button>
      <ul>
        {todoData &&
          todoData.map((todo) => (
            <li key={todo.id} onDoubleClick={() => onRemove(todo.id)}>
              {todo.text}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ToDoSample;
