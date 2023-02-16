import { Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Content from "./components/main/Content";
import Visual from "./components/main/Visual";
import Community from "./components/sub/Community";
import Department from "./components/sub/Department";
import Gallery from "./components/sub/Gallery";
import Join from "./components/sub/Join";
import Location from "./components/sub/Location";
import Youtube from "./components/sub/Youtube";
import Schedule from "./components/sub/Schedule";

import Login from "./components/sub/Login";
import Logout from "./components/sub/Logout";
function App() {
  // 카카오로그인 기능
  // 등록된 앱의 JavaScript key
  const jsKey = process.env.REACT_APP_KAKAO;

  // SDK는 한 번만 초기화해야 한다.
  // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
  if (!window.Kakao.isInitialized()) {
    // JavaScript key를 인자로 주고 SDK 초기화
    window.Kakao.init(jsKey);
    // SDK 초기화 여부를 확인하자.
    console.log(window.Kakao.isInitialized());
  }
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header type={"main"} />
          <Visual />
          <Content />
        </Route>

        {/* <Header type={"Sub"} /> */}
        <Route path="/" render={() => <Header type={"sub"} />} />
      </Switch>

      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Footer />
    </>
  );
}

export default App;
