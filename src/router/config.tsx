import { ReactElement, lazy } from "react";

export interface IRoute {
    path: string;
    component: ReactElement;
    title?: string;
    children?: IRoute[];
    exact?: boolean;
}
const Home = lazy(() => import('../pages/public/home'));
const User = lazy(() => import('../pages/public/user'));
const About = lazy(() => import('../pages/public/about'));

const SiderBar = lazy(() => import('../pages/admin/sidebar'));
const AdminUser = lazy(() => import('../pages/admin/user'));

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
    },
    {
        path: '/admin',
        component: <SiderBar />,
        title: '管理页',
        exact: false,
        children: [
            {
                path: '/admin/adminuser',
                component: <AdminUser />,
                title: '管理页-用户',
                exact: false,
            }
        ]
    }
]