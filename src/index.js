import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
// Static elements
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/about' component={ AboutPage } />
      </Switch>
    </Router>    
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
