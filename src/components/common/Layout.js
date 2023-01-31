import React from "react";
// Layout.js 공동 요소를 적용하기 위한 처리 컴포넌트
const layout = (props) => {
  return (
    <section className={`content ${props.title}`}>
      <figure></figure>
      <div className="innner">
        <h1>{props.title}</h1>
        {/* 
        실제 컴포턴트 내용 
        Prpos.children울 이용해서
        원하는 영역에 컴포넌트를 배치가능
        */}
        {props.children}
      </div>
    </section>
  );
};

export default layout;
