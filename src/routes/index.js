import Home from "~/pages/Home";
import Collection from "~/pages/Collection";
import Cart from "~/pages/Cart";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import Checkout from "~/pages/Checkout";
import Product from "~/pages/Product";
import NotFound from "~/pages/NotFound";
import Profile from "~/pages/Profile";
import Test from "~/pages/Test";

import { RouteChildOfCollection } from "~/Data/DataCollection";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/account/login", component: Login },
  { path: "/account/signup", component: Signup },
  { path: "/account/profile", component: Profile },
  { path: "/checkout", component: Checkout },
  { path: "/product/:id", component: Product },
  {
    path: "/collections",
    component: Collection,
    ChildRoute: RouteChildOfCollection,
  },
  { path: "/test", component: Test },
  { path: "*", component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
