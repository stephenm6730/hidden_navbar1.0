import React, { useState, useEffect } from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';


import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';

const NewMeetupPage = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);


  return (
    <section>
      <h1>Add Blog Post</h1>
      <NewMeetupForm currentId={currentId} setCurrentId={setCurrentId}/>
    </section>
  );
}

export default NewMeetupPage;
