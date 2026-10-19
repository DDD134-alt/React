// 기사제목
// 내용
// 작성일
// 작성자
// Props로 전달받아 표시하기
// 기본값 설정 사용
// 구조 분해 사용

// const Article = ({
//   title = "제목미정",
//   content = "공란",
//   date = "언젠가",
//   writer = "누군가",
// }) => {
//   return (
//     <>
//       <h3>{title}</h3>
//       <p>{content}</p>
//       <p>작성일 : {date}</p>
//       <p>글쓴이 : {writer}</p>
//     </>
//   );
// };

// // Article을 내보내겠다는 뜻
// export default Article;

// data 사용시 이렇게!
const Article = ({
  data,
  title = "제목미정",
  content = "내용없음",
  date = "언젠가",
  writer = "누군가",
}) => {
  // 1. 만약 data 객체로 통째로 넘어왔다면 그것을 쓰고,
  //    개별 속성(title, content 등)으로 넘어왔다면 모아서 쓰겠다는 뜻
  const articleData = data ? data : { title, content, date, writer };

  // 2. 데이터가  있다면 articleData 여기에 담아 출력
  //    없다면 개별 기본값("제목미정", "내용없음" 등) 데이터 출력
  return (
    <>
      <h3>{articleData.title}</h3>
      <p>{articleData.content}</p>
      <p>작성일 : {articleData.date}</p>
      <p>글쓴이 : {articleData.writer}</p>
    </>
  );
};

// Article을 내보내겠다는 뜻
export default Article;
