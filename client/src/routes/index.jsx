import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from '../pages/profile';
import { Register } from '../pages';
import NavBar from '../layouts/navbar';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
