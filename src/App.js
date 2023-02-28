import AppContainer from './UI/AppContainer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import "./index.css"
import ProfilePage from './UI/ProfilePage.js';
import { NavBar } from './UI/AppContainer';


function App() {
  return (
    <Router>
      <NavBar/>
    <Routes>
        <Route path='/' element={<AppContainer/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;


// recently viewed page
// profile page with saved recipes and a rating system
// add a "has cooked" icon with the saved recipes
// make it multipage
// 