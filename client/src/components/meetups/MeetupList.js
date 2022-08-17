import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import { Paper,Typography } from '@material-ui/core';

import { useSelector } from 'react-redux';



  const MeetupList = ({ setCurrentId, user }) => {
  const posts = useSelector((state) => state.posts);
  
  if (!user?.email) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <ul className={classes.list}>
      {posts.map((post) => (
        <MeetupItem
          post={post} 
          setCurrentId={setCurrentId}
        />
      ))}
    </ul>
  );
//}
}

export default MeetupList;
