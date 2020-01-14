import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from '../pages/Home';

import BaseLayout from 'src/layouts/BaseLayout';

import RouteWithLayout from './RouteWithLayout';

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
      <Route exact path="/" render={() => <Redirect to="/sales/dashboard" />} />
      <RouteWithLayout path={`/sales`} component={Home} layout={BaseLayout} />
    </Switch>
  )
}

export default LoggedInRouter;