import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./scss/style.scss";

ReactDOM.render(
  // 1.App컴포넌트를 BrowserRouter로 감싼다
  // App안에서 라우터 기능을 활용하도록 함
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
