import { Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Content from "./components/main/Content";
import Visual from "./components/main/Visual";
import Community from "./components/sub/Community";
import Department from "./components/sub/Department";
import Gallery from "./components/sub/Gallery";
import Join from "./components/sub/Join";
import Youtube from "./components/sub/Youtube";

function App() {
  return (
    <>
      <Header />
      {/* 호면별 링트에 의해 출력하기위해 라우트 사용 */}
      <Route exact path="/">
        <Visual />
        <Content />
      </Route>
      {/* 호면별 링트에 의해 출력하기위해 라우트 사용 */}
      {/* <Route path="/department">
        <Department />
      </Route> */}
      {/* 인라인 방식의 라우트 적용 */}
      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />
      <Footer />
    </>
  );
}

export default App;
