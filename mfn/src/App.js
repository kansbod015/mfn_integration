import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Detailed } from './pages/Detailed'


export const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/news:news_id">
          <Detailed />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}