import React, { useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Details from './components/Details';
import { auth } from './firebase'
import { useSelector } from 'react-redux'
import { selectUserName } from './features/user/userSlice'

  
function App() {

  const user = useSelector(selectUserName); 

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      }
    });
  },[user]);
  
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          {!user ? (
            <Route exact path='/'>
              <Login />
            </Route> 
          ) : (
            <>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/details/:id'>
                <Details />
              </Route>
            </>
          )}
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
