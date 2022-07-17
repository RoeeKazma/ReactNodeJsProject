import logo from "./logo.svg";
import "./App.css";
import LifeCycleParent from "./components/lifecycleParent";
import LifeCycleParentFn from "./components/lifecycleParentFn";
import CounterEx from "./components/counterEx";
import { useState } from "react";
import PostsEx from "./components/postsEx";
import PostWithHooks from "./components/postWithHooks";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      {/* <LifeCycleParent /> */}

      {/* <button onClick={() => setIsVisible((iv) => !iv)}>visible</button>
      {isVisible && <CounterEx />} */}

      {/* <PostsEx /> */}

      {/* <LifeCycleParentFn /> */}

      <PostWithHooks />
    </div>
  );
}

export default App;
