import Basket from './pages/basket/basket'
import App from "./App";
import Home from "./pages/home/home";

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path:'/',
        exact:true
      },
      {
        component: Basket,
        path:'/basket'
      }
    ]

  }
]
