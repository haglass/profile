import React, { useEffect } from "react";
import Layout from "../common/Layout";
const Community = () => {
  // jascript 코드자리
  // 컴포넌트가 마운트,업데이트(state변경),언마운트 시
  // 하고싶은일을 작성하는 Hook : userEffect
  useEffect(()=>{
    console.log("mount : 컴포넌트 생성")
    // axios,html요소 선택하는 작업 많이 함
    return ()=>{
      console.log("unmount : 컴포넌트 제거");
    }
  },[]);
  // jsx코드 자리 :주의 사항 return()
  return <Layout title={"Community"}>Community</Layout>;
};

export default Community;
