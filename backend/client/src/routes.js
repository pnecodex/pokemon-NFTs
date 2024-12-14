import react from 'react';
import AdminLogin from './Components/Admin/auth/login';
import Dashboard from './Components/Dashboard/Dashboard';
import admin from './layouts/admin';

function defaults(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
const routes = [
  { path: "/dashboard", access: true, exact: true, name: "Dashboard", layout: admin, component: Dashboard },
  // {path: "/marketplace", access: true,exact: true,name: "Dashboard",layout:marketplace,component:marketplace },
  { path: "/login", access: true, exact: true, name: "login", layout: defaults, component:AdminLogin },

]

export default routes;


