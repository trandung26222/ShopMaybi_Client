import { useSelector, useDispatch } from "react-redux";
import { setCurrentWidth } from "./redux/slices/ResponsiveSlice";
import { setCurrentUser } from "./redux/slices/CurrentUserSlice";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { useEffect } from "react";
import { DataCollection } from "./Data/DataCollection";
import { auth } from "./firebase";
import DefaultLayout from "./Layout/DefaultLayout";
import { fetchDataProducts } from "./redux/fetchData/fetchDataProducts";
import { fetchCart } from "./redux/fetchData/fetchCart";
import { clearCurrentCart } from "./redux/slices/CurrentCartSlice";

function App() {
  var classNameApp =
    "App xl:text-[10px] lg:text-[9px] md:text-[8px]  xs:text-[7px]";
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

  useEffect(() => {
    dispatch(fetchDataProducts());
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setCurrentUser({
            has: true,
            username: user.displayName,
            uid: user.uid,
            email: user.email,
          })
        );
        localStorage.setItem("username", user.displayName);
        localStorage.setItem("phonenumber", user.phoneNumber);
        dispatch(fetchCart(user.uid));
      } else {
        dispatch(setCurrentUser({ has: false, uid: "", email: "" }));
        dispatch(clearCurrentCart());
      }
    });
  });

  // up data to FireBase
  // localStorage.setItem("isadddoc", "true");
  // useEffect(() => {
  //   const addDocument = async () => {
  //     try {
  //       DataProduct.forEach(async (item) => {
  //         await addDoc(collection(db, "DataProducts"), item);
  //       });
  //       DataCart.forEach(async (item) => {
  //         await addDoc(collection(db, "DataCarts"), item);
  //       });
  //       localStorage.setItem("isadddoc", "true");
  //     } catch (error) {
  //       console.error("Error adding document: ", error);
  //     }
  //   };
  //   if (localStorage.getItem("isadddoc") === "false") {
  //     addDocument();
  //   }
  // }, []);

  return (
    <div className={classNameApp}>
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
