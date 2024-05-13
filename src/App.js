import { useSelector, useDispatch } from "react-redux";
import { setCurrentWidth } from "./redux/slices/ResponsiveSlice";
import { setCurrentUser } from "./redux/slices/CurrentUserSlice";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import DefaultLayout from "./components/DefaultLayout";
import { DataCollection } from "./components/Data/DataCollection";
import { getDatabase, ref } from "firebase/database";
import { DataCart } from "./components/Data/DataCart";
import { DataProduct } from "./components/Data/DataProduct";
import { auth } from "./firebase";

function App() {
  // const dbRef = ref(getDatabase());

  const dispatch = useDispatch();
  var currrentW = useSelector((s) => s.responsive.currentWidth);

  const setWidth = (e) => {
    dispatch(setCurrentWidth(e.target.innerWidth));
    document.documentElement.style.setProperty(
      "--vw",
      `${e.target.innerWidth}px`
    );
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

  // useEffect(() => {
  //   DataCart.forEach((item) => {
  //     set(child(dbRef, `DataCart/${item.id}`), item);
  //   });
  //   DataProduct.forEach((item) => {
  //     set(child(dbRef, `DataProduct/${item.id}`), item);
  //   });
  // }, []);

  var [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div className="App xl:text-[10px] lg:text-[9px] md:text-[8px]  xs:text-[7px]">
      <Routes>
        {/* <Route
          path="/"
          element={user ? <Navigate to="/afterlogin" /> : <Login />}
        ></Route> */}

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
                !route.ChildRoute && (
                  <Layout>
                    <Page />
                  </Layout>
                )
              }
            >
              {route.ChildRoute &&
                route.ChildRoute.map((item, index) => (
                  <Route
                    key={item}
                    path={item}
                    element={
                      <Layout>
                        <Page props={DataCollection[index]} />
                      </Layout>
                    }
                  />
                ))}
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
