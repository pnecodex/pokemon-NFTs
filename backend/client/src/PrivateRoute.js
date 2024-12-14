import React from 'react';
import  { Route, Redirect,useNavigate} from 'react-router-dom';
const PrivateRoute = ({ component: Component, layout: Layout, history,...rest}) => {
   const access = true;
  return access ? (

    <Route  {...rest} render={props => (
      
      <Component {...props} />
    )} />

  ) : (
    <Redirect to="/login" />
    // navigate('.../')
  )
}
export default PrivateRoute;