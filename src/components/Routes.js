import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/register'
import Forgot from '../pages/ForgotPassword'
import Contact from '../pages/ContactUs'
import AdminDashBoard from '../pages/AdminDashBoard'
import UserDashBoard from '../pages/UserDashBoard'
import BlogPage from '../pages/BlogPage'
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/login' component={LoginPage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/admin' component={AdminDashBoard} />
        <Route path='/account' component={UserDashBoard} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/contact' component={Contact} />
        <Route path='/details/:id' component={Contact} /> */}
      </Switch>
    );
  }
}
  
  export default Routes;
  