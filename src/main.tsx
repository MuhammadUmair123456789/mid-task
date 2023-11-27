// TeacherPoll.js
import React, { useState } from 'react';

const TeacherPoll = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <h2>Teacher Poll</h2>
      <p>Do you like this teacher?</p>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleDislike}>Dislike ({dislikes})</button>
    </div>
  );
};

export default TeacherPoll;
