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

function App() {
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
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />
      <Footer />
    </>
  );
}

export default App;
