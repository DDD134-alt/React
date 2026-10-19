// board 컴포넌트
const Board = ({ post }) => {
  // 같은 역할의 누락 에러 예방 구문
  // if (!post) return null; → 가드 클로즈(GuardClause, 예외조건처리문법) 전체 데이터 누락 시 에러 예방
  // post? → 옵셔널 체이닝 (OptionalChaining) 부분 방어가 필요할때 유용
  return (
    <>
      <p>------------------------------------------------------------</p>
      <p>제목 : {post?.title}</p>
      <p>내용 : {post?.content}</p>
      <p>작성자 : {post?.name}</p>
      <p>작성일 : {post?.regDate}</p>
      <p></p>
    </>
  );
};

// Board 컴포넌트를 내보내겠다는 뜻
export default Board;
