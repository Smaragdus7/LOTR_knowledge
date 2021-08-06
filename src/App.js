import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Catalog from './Catalog';
import './App.css';

const Home = () => (
  <div>
    <h1>This is Home</h1>
  </div>
);

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/catalog"><Catalog /></Route>
      </Switch>
    </div>
  );
}