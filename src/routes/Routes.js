import Basket from "../pages/basket/basket";
import App from "../pages/App";
import Home from "../pages/home/home";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: "/",
        exact: true,
      },
      {
        component: Basket,
        path: "/basket",
      },
    ],
  },
];
