import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import RestaurantPage from './pages/restaurantpage/restaurantpage.component';
import LodgementPage from './pages/lodgementpage/lodgementpage.component';
import ContactPage from './pages/contactpage/contactpage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/restaurant' component={RestaurantPage} />
          <Route path='/lodgement' component={LodgementPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
    </div>
  );
}

export default App;
