import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";
import Product from "../pages/Product";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/collections", component: Collection },
  { path: "/cart", component: Cart },
  { path: "/account/login", component: Login },
  { path: "/account/register", component: Signup },
  { path: "/checkout", component: Checkout },
  { path: "/product/:id", component: Product },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
