import React from 'react';
import { AnimatePresence } from 'framer-motion';

import './styles/main.css';
import { BrowserRouter as Router, Link, Route, Switch, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { PokemonSummary } from './pages/PokemonSummary';
import { TypeSummary } from './pages/TypeSummary';

const Routing = () => {
  const location = useLocation();

  return (
          <Route path="/type-summary/:type" component={TypeSummary} />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/summary/:pokemon" component={PokemonSummary} />
      </Switch>
    </AnimatePresence>
  )
}

export default () => (
  <Router>
    <nav><Link to="/">Home</Link></nav>
    <Routing />
  </Router>
);
