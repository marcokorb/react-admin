import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Stores from './pages/Stores';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/stores" component={Stores} />
    </Switch>
  );
}

export default Routes;