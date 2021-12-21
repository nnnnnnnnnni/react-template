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
import { config } from "./config";

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

interface HOCProps {
  component?: ReactElement;
  title?: string;
  needLogin?: boolean;
}

const ComponentHOC: FC<HOCProps> = ({ component, title, needLogin }) => {
  const location = useLocation();

  return (
    <>
      {needLogin && !localStorage.getItem("user") ? (
        <Navigate to="/login" state={{ from: location.pathname }} />
      ) : (
        <CSuspense>{createElement(withTitle(component, title))}</CSuspense>
      )}
    </>
  );
};

export interface IConfig {
  path?: string;
  name: string;
  element?: ReactElement;
  index?: boolean;
  needLogin?: boolean;
  children?: IConfig[];
}



const genaterRouter = (config: IConfig[]): IConfig[] => {
  const _config = config.map((route) => {
    if (route.element) {
      route.element = (
        <ComponentHOC
          title={route.name}
          component={route.element}
          needLogin={route.needLogin}
        />
      );
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
      route.element = (
        <ComponentHOC
          title={route.name}
          component={route.element}
          needLogin={route.needLogin}
        />
      );
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
