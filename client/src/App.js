import React from 'react';
import Landing from './components/Landing'
import RecipeCards from './components/RecipeCards'
import RecipeCards2 from './components/RecipeCards2'
import NavigationBar from './components/NavigationBar'


function App() {
  return (
    <div className="App">

      <NavigationBar />
      <Landing />

      <RecipeCards />
      <RecipeCards2 />

    </div>
  );
}

export default App;
