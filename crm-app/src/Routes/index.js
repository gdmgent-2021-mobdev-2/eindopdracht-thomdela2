import React from 'react';
import { Login, Register } from '../Authentication';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

const Home = () => (
  <>
    <p>Home</p>
  </>
)

export default Routes;
