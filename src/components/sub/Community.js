import React, { useEffect } from "react";
import Layout from "../common/Layout";


const Community = () => {

  useEffect(()=>{
    console.log("mount : 컴포넌트 생성")
    return ()=>{
    
    }
  },[]);
  // jsx코드 자리 :주의 사항 return()
  return <Layout title={"Community"}>Community</Layout>;
};

export default Community;
