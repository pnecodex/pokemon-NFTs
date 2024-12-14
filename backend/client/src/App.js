import React, { Component, Fragment, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';
import PrivateRoute from './PrivateRoute';
import Admin from './layouts/admin';
import RenderRoutes from './renderRoutes';
import Dashboard from './Components/Dashboard/Dashboard';
import Create from './Components/product/Create';
const authed = false;
const authPath = '/login';
class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Suspense fallback={<h1>Loading Pleas Wait...</h1>}> */}
        <BrowserRouter>
          <Switch>

            {/* <Admin> */}
            {/* <Route exact path='/dashboard' component={Dashboard} layout={Admin}  />   */}
            {/* <Route exact path='/create' component={Create} layout={Admin}  />   */}
            {/* </Admin> */}








            {/* {routes.map(({adminLayout,path,component,access,exact},index)=>{ */}
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
            {/* {RenderRoutes(routes,authed,authPath)}    */}
            {/* <AdminLayout path='/dashboard' layout={Layout} component={Dashboard} /> */}
          </Switch>
        </BrowserRouter>
        {/* </Suspense> */}
      </Fragment>
    );
  }
}

export default App;
