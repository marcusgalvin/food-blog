import React from "react";
import { Link } from "react-router-dom";
import RecipeCards from './RecipeCards'
// import Landing from './components/Landing'
// import RecipeCards2 from './components/RecipeCards2'
// import NavigationBar from './components/NavigationBar'

//Functional Component 
const MainPage = () => {
  return (
    <div>
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Main Page</small>
      <Link to="/users">Show List of Users</Link>

      {/* <NavigationBar />
      <Landing /> */}
      <RecipeCards />
      {/* <RecipeCards2 /> */}

    </div>
  );
};

export default MainPage;