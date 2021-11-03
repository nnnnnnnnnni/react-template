import { ReactElement, lazy } from "react";

export interface IRoute {
    path: string;
    component: ReactElement;
    title?: string;
    children?: IRoute[];
    exact?: boolean;
}
const App = lazy(() => import('../pages/App'));
const Home = lazy(() => import('../pages/home'));
const User = lazy(() => import('../pages/user'));
const About = lazy(() => import('../pages/about'));

export const routeConfig: IRoute[] = [
    {
        path: '/',
        component: <Home />,
        title: '首页',
        exact: true,
    },
    {
        path: '/about',
        component: <About />,
        title: '关于',
        exact: true,
    },
    {
        path: '/user',
        component: <User />,
        title: '用户',
        exact: true,
    }
]