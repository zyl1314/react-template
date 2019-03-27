import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DynamicRoute from './libs/dynamic';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('./routes/Home/index')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('./routes/List/index')
  }
];

export default () => (
  <HashRouter>
    <Switch>
      {
        routes.map(r => (
          <Route
            key={r.name}
            name={r.name}
            path={r.path}
            exact={true}
            render={() => <DynamicRoute load={r.component} />}
          />
        ))
      }
    </Switch>
  </HashRouter>
);
