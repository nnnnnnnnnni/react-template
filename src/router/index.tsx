import {
  createElement,
  FC,
  lazy,
  memo,
  ReactElement,
  Suspense,
  useEffect,
} from "react";
import {
  useLocation,
  Navigate,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";

const Loading: FC = () => {
  return <div>Loading ......</div>;
};

const CSuspense: FC = memo(({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
});

const withTitle = (component?: ReactElement, title?: string): FC => {
  const Inner: FC = () => {
    useEffect(() => {
      document.title = title || "";
    });

    return component || null;
  };

  return Inner;
};

const componentHOC = (
  component?: ReactElement,
  title?: string,
  needLogin?: boolean
) => {
  const location = useLocation();

  if (needLogin && !localStorage.getItem("user")) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return <CSuspense>{createElement(withTitle(component, title))}</CSuspense>;
  }
};

const Err404 = lazy(() => import("../pages/error/404"));

const Home = lazy(() => import("../pages/public/home"));
const User = lazy(() => import("../pages/public/user"));
const About = lazy(() => import("../pages/public/about"));
const Login = lazy(() => import("../pages/public/login"));

const SiderBar = lazy(() => import("../pages/admin/sidebar"));
const AdminUser = lazy(() => import("../pages/admin/user"));

interface IConfig {
  path?: string;
  name: string;
  element?: ReactElement;
  index?: boolean;
  needLogin?: boolean;
  children?: IConfig[];
}

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

const genaterRouter = (config: IConfig[]): IConfig[] => {
  const _config = config.map((route) => {
    if (route.element) {
      route.element = componentHOC(route.element, route.name, route.needLogin);
    }
    if (route.children && route.children.length) {
      route.children = genaterRouter(route.children);
    }

    return route;
  });

  return _config;
};

export const App: FC = () => {
  const _config = config.map((route) => {
    if (route.element) {
      route.element = componentHOC(route.element, route.name, route.needLogin);
    }

    if (route.children && route.children.length) {
      route.children = genaterRouter(route.children);
    }

    return route;
  });

  const Element = useRoutes(_config);

  return Element;
};

export const RouterProvier: FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
