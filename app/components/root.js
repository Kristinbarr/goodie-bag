import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllCandies from "./AllCandies";
import Navbar from './Navbar'
import Home from './Home'

const Root = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/candies' component={AllCandies} />
          <Route path='/' component={Home} />
        </Switch>

      </div>
    </Router>
  );
};

export default Root;
