/*
 * @Author: 刘利军
 * @Date: 2020-04-12 20:42:11
 * @LastEditors: 刘利军
 * @LastEditTime: 2020-04-12 23:42:31
 */
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import router from './router';

const routeWithSubRoutes = (route, index) => (
    <Route
        key={index}
        exact={route.exact || false}
        path={route.path}
        component={route.component}
    />
)

const getRouter = () => router.map((route, index) => routeWithSubRoutes(route, index));
const getLink = () => router.map((route, index) => <li key={index}><Link to={route.path}>{route.name}</Link></li>);

const BasicLayout = () =>
    <BrowserRouter>
        <ul>
            {getLink()}
        </ul>
        <Switch>
            {getRouter()}
        </Switch>
    </BrowserRouter>;
export default BasicLayout;