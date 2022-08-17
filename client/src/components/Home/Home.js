import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import NewMeetupForm from '../meetups/NewMeetupForm.js';
import MeetupList from '../meetups/MeetupList.js';
import AllMeetupsPage from '../../pages/AllMeetups';
import Layout from '../layout/NewLayout';
import Navbar from '../Navbar/Navbar';
import Auth from '../Auth/Auth.js';


const Home = (props ) => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("name")));
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
   useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  
  console.log("home")

  return (
    
    
    
    
<div>
            <Navbar user={props.user} setUser={props.setUser} />
            <Routes>
             <Route path="Blog" element={<MeetupList currentId={props.currentId} setCurrentId={props.setCurrentId} user={props.user} setUser={props.setUser}/>}/> 
            
            <Route path="CreatePost" element={<NewMeetupForm currentId={props.currentId} setCurrentId={props.setCurrentId} user={props.user} setUser={props.setUser}/>}/>
           
            </Routes>
            </div>          
             
      
      
        
      
  );
};

export default Home;
