import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NotMatch from './component/NotMatch/NotMatch';
import FriendDetails from './component/FriendDetail/FriendDetails';

function App() {
  
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
         <Home/>
        </Route>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route exact path="/friend/:FriendId">
          <FriendDetails/>
        </Route>
        <Route path="*">
         <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
