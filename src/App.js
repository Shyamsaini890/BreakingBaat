import {
  // BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { useState } from "react";
import Menu from "./components/Menu";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import LoadingBar from "react-top-loading-bar";

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [showMenu, setShowMenu] = useState(true);
  const [state, setState] = useState(0);

  const setProgress = (progess) => {
    setState(progess);
  };
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Navbar
        handleMenu={handleMenu}
        showMenus={showMenu ? <HiOutlineMenuAlt3 /> : <HiOutlineX />}
        textSize={showMenu ? "text-lg" : "text-xl"}
      />
      <LoadingBar
        color="#f11946"
        height={3}
        progress={state}
        // onLoaderFinished={() => setProgress(0)}
      />

      {!showMenu ? (
        <Menu handleMenu={handleMenu} />
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                category="technology"
              />
            }
          />

          {/* Add other routes here */}
        </Routes>
      )}
    </>
  );
}

export default App;
