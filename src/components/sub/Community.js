import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";

const Community = () => {
  // 데모용 데이터 생성
  const initPost = [
    { title: "Hello 1", content: "Welocme To React!" },
    { title: "Hello 2", content: "Welocme To React!" },
    { title: "Hello 3", content: "Welocme To React!" },
    { title: "Hello 4", content: "Welocme To React!" },
    { title: "Hello 5", content: "Welocme To React!" },
  ];
  // 출력 목록 관리 state
  const [posts, setPosts] = useState(initPost);

  const input = useRef(null);
  const contents = useRef(null);
  // 각 항목을 useState 로 사용하면
  // 리랜더링이 많이 일어나므로 ref 로 활용한다.
  // ref로 value 를 참조하면 리랜더링을 줄인다.
  const createPost = () => {
    // 앞자리 및 뒷자리 공백을 제거하기 위해 trim() 사용
    if (
      input.current.value.trim() === "" ||
      contents.current.value.trim() === ""
    ) {
      resetPost();
      alert("제목과 본문을 입력하세요.");
    }
    // 새로운 포스트 등록
    // state 업데이트라서 화면 갱신

    setPosts([
      ...posts,
      { title: input.current.value, content: contents.current.value },
    ]);
    // 입력 저장후 초기화
    resetPost();
  };
  const resetPost = () => {
    input.current.value = "";
    contents.current.value = "";
  };
  // 디버깅
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Layout title={"Community"}>
      {/* 입력폼 */}
      <div className="inputBox">
        <form>
          <input type="text" placeholder="제목을 입력하세요" ref={input} />
          <br />
          <textarea
            cols="30"
            rows="5"
            placeholder="본문을 입력하세요."
            ref={contents}
          ></textarea>
          <div className="btnSet">
            {/* form 안쪽에 버튼은 type 을 정의한다. */}
            <button type="button" onClick={resetPost}>
              CANCEL
            </button>
            <button type="button" onClick={createPost}>
              WRITE
            </button>
          </div>
        </form>
      </div>
      <div className="showBox">
        {/* 목록을 출력할때 map(),key를 꼮 기억 */}
        {posts.map((item, index) => {
          // uuid: https://www.npmjs.com/package/uuid
          // 중복되지않는 key를 만들어주는 라이브러리
          return (
            <article key={index}>
              <div className="txt">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
              <div className="btnSet">
                <button>EDIT</button>
                <button>DELETE</button>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};
export default Community;
