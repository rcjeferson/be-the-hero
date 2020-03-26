import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Logon } />
        <Route path="/register" component={ Register } />
        <Route path="/profile" component={ Profile } />
        <Route path="/incident/new" component={ NewIncident } />
      </Switch>
    </BrowserRouter>
  );
}