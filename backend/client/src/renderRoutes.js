import React from 'react';
import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const RenderRoutes = (routes, authed, authPath, extraProps = {}, switchProps = {}) => routes ? (
  <Fragment>

    {routes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        accsess={route.accsess}
        render={(props) => {

          if (!route.accsess || authed || route.path == authPath) {
            return (
              <route.layout>
                 <route.component {...props} {...extraProps} route={route} />
              </route.layout>

            )
          }
          const redirPath = authPath ? authPath : '/login'
          return <Redirect to={{ pathname: redirPath, state: { from: props.location } }} />
        }}
      />
    ))}
  </Fragment>
) : null

export default RenderRoutes;