import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { adminLaod } from './Actions/adminAuthAction';
const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const { access } = useSelector((state) => state.admin);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(async () => {
   await dispatch(adminLaod())
  }, [dispatch]);
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (access === false) {
            // history.push("/admin/login");
          } else {
            return <Component {...props} />
          }
        }}

      />
    </>
  )

  // return isAuthenticated ? (

  //   <Route  {...rest} render={props => (

  //     <Component {...props} />
  //   )} />

  // ) : (

  //   <Redirect to="/login" />
  // )
}
export default PrivateRoute;