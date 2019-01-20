import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home/index';
import List from './routes/List/index';

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/list" component={List} />
    </Switch>
  </HashRouter>
)
