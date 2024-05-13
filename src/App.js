import { useSelector, useDispatch } from "react-redux";
import { setCurrentWidth } from "./redux/slices/ResponsiveSlice";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { useEffect } from "react";
import DefaultLayout from "./components/DefaultLayout";
import { DataCollection } from "./components/Data/DataCollection";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from "./firebase";
import { DataCart } from "./components/Data/DataCart";
import { DataProduct } from "./components/Data/DataProduct";

function App() {
  const dbRef = ref(getDatabase());

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

  // get(child(dbRef, `user/`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // useEffect(() => {
  //   DataCart.forEach((item) => {
  //     set(child(dbRef, `DataCart/${item.id}`), item);
  //   });
  //   DataProduct.forEach((item) => {
  //     set(child(dbRef, `DataProduct/${item.id}`), item);
  //   });
  // }, []);

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
