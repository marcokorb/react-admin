import React from 'react';
import {
  Route,
  RouteProps,
  Redirect,
} from 'react-router-dom';

// See https://reacttraining.com/react-router/web/example/auth-workflow
const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }: RouteProps) => {
  
  if (!Component) {
    return <Route {...rest} />
  }

  return (
    <Route
      {...rest}
      render={props =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute;