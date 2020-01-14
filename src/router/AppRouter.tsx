import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stores from '../pages/Stores';

import PrivateRoute from './PrivateRoute';
import LoggerInRouter from './LoggedInRouter';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Stores} />
        <PrivateRoute path="/" component={LoggerInRouter} />
      </Switch>
    </Router>
  );
}

export default AppRouter;