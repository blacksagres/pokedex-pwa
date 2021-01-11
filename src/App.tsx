import React from 'react';
import { AnimatePresence } from 'framer-motion';

import './styles/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { PokemonSummary } from './pages/PokemonSummary';
import { useLocation } from 'react-use';
import { TypeSummary } from './pages/TypeSummary';

export default () => {
  const location = useLocation();

  return (
    <Router>
      <AnimatePresence>
        <Switch location={location} key={location}>
          <Route exact path="/" component={Home} />
          <Route path="/summary/:pokemon" component={PokemonSummary} />
          <Route path="/type-summary/:type" component={TypeSummary} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
};
