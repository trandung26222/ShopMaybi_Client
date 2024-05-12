import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";
import { linkcollections } from "../components/Data/DataCollection";

const publicRoutes = [
  { path: "/", component: Home },
  // { path: "/collections/:name", component: Collection },
  { path: "/cart", component: Cart },
  { path: "/account/login", component: Login },
  { path: "/account/signup", component: Signup },
  { path: "/checkout", component: Checkout },
  { path: "/product/:id", component: Product },
  {
    path: "/collections/:name",
    component: Collection,
    isValidName: function (name) {
      return linkcollections.includes(name);
    },
  },

  { path: "*", component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
