import { useDispatch } from "react-redux";
import { setCurrentWidth } from "./redux/slices/ResponsiveSlice";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { useEffect } from "react";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  const dispatch = useDispatch();
  const setWidth = (e) => {
    dispatch(setCurrentWidth(e.target.innerWidth));
    document.documentElement.style.setProperty(
      "--vw",
      `${e.target.innerWidth}px`
    );
    document.documentElement.style.setProperty(
      "--padding-header",
      `${0.1 * e.target.innerWidth}px`
    );

    //--padding-header
  };
  useEffect(() => {
    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route) => {
          let Layout = DefaultLayout;
          if (route.layout === null) {
            Layout = Fragment;
          }
          if (route.layout) {
            Layout = route.layout;
          }
          var Page = route.component;

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
