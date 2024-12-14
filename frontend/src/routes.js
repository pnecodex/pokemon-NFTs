import react from 'react';
import AdminLogin from './Components/Admin/auth/login';
import Dashboard from './Components/Dashboard/Dashboard';
import admin from './layouts/admin';
import NFTs from './Components/NFTs/index';
import CreateMypoke from './Components/NFTs/CreateMypoke';
import UserLayout from './Components/FrontendLayout/layouts/Layout';
import Home from './Components/Home/Home';
import LootBox from './Components/LootBox/Lootbox';

import AllNFTs from './Components/AllNFTs/allNFTs';

const routes = [
  // { path: "/admin/login", access: true, exact: true, name: "Admin Login", layout: defaults, component:AdminLogin },
  // {path: "/marketplace", access: true,exact: true,name: "Dashboard",layout:marketplace,component:marketplace },
  { path: "/admin/dashboard", access: false, exact: true, name: "Dashboard", layout: admin, component: Dashboard },
  { path: "/admin/mypokes", access: false, exact: true, name: "nfts", layout: admin, component: NFTs },
  { path: "/admin/mypokes/create-poke", access: false, exact: true, name: "create-poke", layout: admin, component: CreateMypoke },
  { path: '/', access: true, exact: true, name: "home", layout: UserLayout, component: Home },
  { path: '/all-nfts', access: true, exact: true, name: "all nfts", layout: UserLayout, component:AllNFTs},
  { path: '/lootbox', access: true, exact: true, name: "lootbox", layout: UserLayout, component: LootBox },
  { path: '/refferal', access: true, exact: true, name: "refferal", layout: UserLayout, component: LootBox }
]

export default routes;


