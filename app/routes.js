/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import BowlingPage from './containers/BowlingPage';
import OptionPage from './containers/OptionPage';
import AboutPage from './containers/AboutPage';

export default () => (
  <App>
    <Switch>
      <Route path="/start" component={BowlingPage} />
      <Route path="/option" component={OptionPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
