import React from 'react';
import { AnimatePresence } from 'framer-motion';

import './styles/main.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { PokemonSummary } from './pages/PokemonSummary';
import { TypeSummary } from './pages/TypeSummary';
import { StyledNavbar } from './components/NavBar/StyledNavbar.styles';
import { PokeBallButton } from './components/PokeBallButton';

const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/summary/:pokemon" component={PokemonSummary} />
        <Route path="/type-summary/:type" component={TypeSummary} />
      </Switch>
    </AnimatePresence>
  );
};

export default () => (
  <Router>
    <StyledNavbar>
      <PokeBallButton />
    </StyledNavbar>
    <Routing />
  </Router>
);
