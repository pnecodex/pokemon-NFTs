import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
const AdminLayout = ({ component: Component, layout: Layout, ...rest }) => (
  
  <Route {...rest} render={props => (
    <Layout>
    {console.log(props)}
      <Component {...props} />
    </Layout>
  )} />
)
export default AdminLayout;