import React from 'react'
import { Route, Switch } from "react-router"
import NavBar from '../components/nav_bar'
import NotFound from "../pages/not_found";
import Recorder from "../pages/recorder";

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Recorder} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default routes