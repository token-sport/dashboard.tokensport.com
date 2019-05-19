import React from 'react';
import { Switch, Route } from 'react-router';

/* COMPONENTS */
import Live from '../components/LayoutLive';

const Routes = () => {
  return <Switch>
    <Route exact strict path="/live" component={Live} />
  </Switch>
};

export default Routes;