import { useSelector, useDispatch } from "react-redux";
import { setCurrentWidth } from "./redux/slices/ResponsiveSlice";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { useEffect } from "react";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  const dispatch = useDispatch();
  var currrentW = useSelector((s) => s.responsive.currentWidth);

  const setWidth = (e) => {
    dispatch(setCurrentWidth(e.target.innerWidth));
    document.documentElement.style.setProperty(
      "--vw",
      `${e.target.innerWidth}px`
    );
    const setProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setProperty();
  };
  useEffect(() => {
    const setProperty = () => {
      document.documentElement.style.setProperty(
        "--padding-header",
        `${currrentW * 0.1}px`
      );
    };
    setProperty();

    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  return (
    <div className="App xl:text-[10px] lg:text-[9px] md:text-[8px]  xs:text-[7px]">
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
