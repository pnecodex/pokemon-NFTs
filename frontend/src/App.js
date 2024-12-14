import React, { Component, Fragment, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';
import PrivateRoute from './PrivateRoute';
import { adminLogin } from './Actions';
import Login from './Components/Admin/auth/login';
function SuspensLoading(params) {
  return (
    <div className="text-center mt-5">
      <div className="spinner-border text-center text-info"></div>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <Fragment>
        <Suspense fallback={SuspensLoading}>
          <BrowserRouter>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <PrivateRoute
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    access={route.access}
                    component={(props) => (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    )}
                  />
                )
              })}
              <Route path="/admin/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </Fragment>
    );
  }
}

export default App;
