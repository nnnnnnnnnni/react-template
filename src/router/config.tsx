import { FC, lazy, memo, ReactElement, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";

const CSuspense: FC = memo(({ children }) => {
    return (
        <Suspense fallback={<div>loading.......</div>}>
            {children}
        </Suspense>
    )
});

interface Componentprops {
    component: ReactElement | JSX.Element;
    title?: string;
    needLogin?: boolean;
}

const Common: FC<Componentprops> = ({ component, title, needLogin }) => {
    const location = useLocation();
    useEffect(() => {
        document.title = title || '';
    });

    if(needLogin && !localStorage.getItem('user')) {
        return <Navigate to='/login' state={{from: location}}></Navigate>
    } else {
        return <CSuspense>{component}</CSuspense>;
    }
}

const Err404 = lazy(() => import('../pages/error/404'));

const Home = lazy(() => import('../pages/public/home'));
const User = lazy(() => import('../pages/public/user'));
const About = lazy(() => import('../pages/public/about'));
const Login = lazy(() => import('../pages/public/login'));

const SiderBar = lazy(() => import('../pages/admin/sidebar'));
const AdminUser = lazy(() => import('../pages/admin/user'));

export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Common component={<Home />} title='首页' />} />
                <Route path='/login' element={<Common component={<Login />} title='登陆' />} />
                <Route path='/user' element={<Common component={<User />} title='用户' />} />
                <Route path='/about' element={<Common component={<About />} title='关于' />} />
                <Route path='/admin' element={<Common component={<SiderBar />} title='管理' needLogin={true} />} >
                    <Route index={true} element={<Common component={<div>null page</div>} title='null-page' />} />
                    <Route path='user' element={<Common component={<AdminUser />} title='管理-用户' />} />
                </Route>
                <Route path='/*' element={<Common component={<Err404 />} title='404' />} />
            </Routes>
        </BrowserRouter>
    )
}