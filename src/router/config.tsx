import { lazy } from "react";
import { IConfig } from ".";

const Err404 = lazy(() => import("../pages/error/404"));

const Home = lazy(() => import("../pages/public/home"));
const User = lazy(() => import("../pages/public/user"));
const About = lazy(() => import("../pages/public/about"));
const Login = lazy(() => import("../pages/public/login"));

const SiderBar = lazy(() => import("../pages/admin/sidebar"));
const AdminUser = lazy(() => import("../pages/admin/user"));

export const config: IConfig[] = [
  {
    path: "/",
    name: "首页",
    element: <Home />,
  },
  {
    path: "/login",
    name: "登陆",
    element: <Login />,
  },
  {
    path: "/user",
    name: "用户",
    element: <User />,
  },
  {
    path: "/about",
    name: "关于",
    element: <About />,
  },
  {
    path: "/admin",
    name: "关于",
    element: <SiderBar />,
    needLogin: true,
    children: [
      {
        index: true,
        name: "null page",
        element: <div>null page</div>,
      },
      {
        path: "user",
        name: "管理-用户",
        element: <AdminUser />,
      },
    ],
  },
  {
    path: "/*",
    name: "404",
    element: <Err404 />,
  },
];