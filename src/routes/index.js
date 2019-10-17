import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import AddNote from '../pages/AddNote';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cadastro" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/addnote" component={AddNote} isPrivate />
      <Route path="/perfil" component={Profile} isPrivate />
    </Switch>
  );
}
