import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FC, Suspense, memo, cloneElement } from 'react';
import { IRoute } from './config';
import * as _ from 'lodash';

export const CSuspense: FC = memo(({ children }) => {
    return (
        <Suspense fallback={<div>loading.......</div>}>
            {children}
        </Suspense>
    )
})

interface RouterViewProps {
    config?: IRoute[]
}

export const RouterProvider: FC<RouterViewProps> = ({ config }) => {
    const _config = _.cloneDeep(config as IRoute[]);
    const _routes = _config.map((route, index) => {
        return <Route path={route.path} render={(props) => (
            <CSuspense>{cloneElement(route.component, props)}</CSuspense>
        )} key={index}></Route>
    })

    return (
        <Router>
            {_routes}
        </Router>
    )
}