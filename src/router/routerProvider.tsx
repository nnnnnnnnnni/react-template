import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FC, Suspense, memo, cloneElement, useMemo } from 'react';
import { IRoute } from './config';

export const CSuspense: FC = memo(({ children }) => {
    return (
        <Suspense fallback={<div>loading.......</div>}>
            {children}
        </Suspense>
    )
})

interface RouterViewProps {
    config: IRoute[];
    index?: number;
}

const RouterView: FC<RouterViewProps> = ({ config, index }) => {
    const _index = index || 0;
    return (
        <Switch>
            {config.map((route, i) => (
                <Route path={route.path} key={_index * 10 + i} exact={route.exact} render={(props) => {
                    if (route.children && route.children.length) {
                        return (
                            <>
                                {cloneElement(route.component, { ...props })}
                                {RouterView({ config: route.children, index: _index * 10 })}
                            </>
                        );
                    } else {
                        return cloneElement(route.component, { ...props });
                    }
                }} />
            ))}
        </Switch>
    )
}

export const RouterProvider: FC<RouterViewProps> = ({ config }) => {
    const _routes = useMemo(() => (
        <Router>
            <CSuspense>
                <RouterView config={config} index={0} />
            </CSuspense>
        </Router>
    ), [config])
    return _routes
}