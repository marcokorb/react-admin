import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import BaseLayout from 'src/layouts/BaseLayout';

import RouteWithLayout from './RouteWithLayout';

import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';

const LoggedInRouter = () => {

  // const { loading, error } = useAppState()
  // const appStateMethods = useAppStateMethods()

  // useEffect(() => {
  //   appStateMethods.request()
  // }, [appStateMethods])

  // if (loading) return <LinearProgress />
  // if (error) return <p>Error :(</p>

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
      <RouteWithLayout path={`/dashboard`} component={Dashboard} layout={BaseLayout} />
      <RouteWithLayout path={`/produtos`} component={Products} layout={BaseLayout} />
    </Switch>
  );
}

export default LoggedInRouter;