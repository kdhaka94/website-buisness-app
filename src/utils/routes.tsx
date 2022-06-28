import { Home, Login, Logout } from "../pages";
import CreateUser from "../pages/CreateUser";
import PaymentInfo from "../pages/PaymentInfo";
import { TOKEN } from "./constants";

const isLoggedIn = !!localStorage.getItem(TOKEN)

export const ROUTES = [
  {
    path: '/', name: "Users", component: <Home />, show: isLoggedIn
  },
  {
    path: '/payment-info', name: "Payment Info", component: <PaymentInfo />, show: isLoggedIn
  },
  {
    path: '/create-user', name: "Create User", component: <CreateUser />, show: isLoggedIn
  },
  {
    path: '/', name: "Login", component: <Login />, show: !isLoggedIn
  },
  {
    path: '/logout', name: "Logout", component: <Logout />, show: isLoggedIn
  }
].filter(route => route.show)
