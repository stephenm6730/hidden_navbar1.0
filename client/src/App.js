import React,{Provider, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import NewLayout from './components/layout/NewLayout';
import NewCheckoutPage from './pages/Checkout';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import MainNavigation from './components/layout/MainNavigation';
import AuthRoute from './components/Auth/AuthRoute';
import MeetupList from './components/meetups/MeetupList';
import NewMeetupForm from './components/meetups/NewMeetupForm';
import { Navigate } from "react-router-dom";





function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("name")));
  const [currentId, setCurrentId] = useState(0);
  
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("name"));
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  

  // if (!authenticated) {
  //   console.log("!authenticated")
  //   return <Navigate to="/" />;
  // }

  return (
    
      
    <div>
     <Routes>
        <Route path="/" element={<Auth setCurrentId={setCurrentId} user={user} setUser={setUser}/>}/>
        <Route path="/Home/*" element={<Home currentId={currentId} setCurrentId={setCurrentId} user={user} setUser={setUser}/>}/>        
          </Routes>
        </div>
        
        
  );
}


export default App;
