import React from 'react';
import Landing from './components/Landing'
import RecipeCards from './components/RecipeCards'
import RecipeCards2 from './components/RecipeCards2'
import NavigationBar from './components/NavigationBar'
import Test from './components/Test'
import BlueberryCrumbCake from './components/Desserts/BlueberryCrumbCake'

import MainPage from "./components"; ///< index.jsx will be automatically imported 
import UsersPage from './components/users'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (

    <Router>
      <Route exact path="/" component={MainPage} />

      <Switch>
        <Route path="/users" component={UsersPage} />

        <Route path="/test" component={Test} />
        <Route path="/blueberrycrumbcake" component={BlueberryCrumbCake} />



      </Switch>
    </Router>


  );
}

export default App;
