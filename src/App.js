import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Hats from './pages/hats/hats.component';
import Shop from './pages/shop/shop.component';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
