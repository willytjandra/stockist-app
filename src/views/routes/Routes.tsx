import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Shell } from 'views/components/Shell';
import { Dashboard } from './dashboard/Dashboard';
import { NotFound } from './notFound/NotFound';

export const Routes: React.FC = () => (
  <Shell>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Shell>
);
