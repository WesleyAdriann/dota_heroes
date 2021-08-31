import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from './Home'
import {Hero} from './Hero'


export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/:hero_name" component={Hero}/>
    </Switch>
  </BrowserRouter>
)