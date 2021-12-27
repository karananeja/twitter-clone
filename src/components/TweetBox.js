import React, { useState } from 'react';
import { Avatar, Button } from '@mui/material';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';
import '../css/TweetBox.css';

const TweetBox = () => {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState('');
  const [imageInput, setImageInput] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      text: input,
      image: imageInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      displayName: user.displayName,
      avatar: user.photoURL,
    });
    setInput('');
    setImageInput('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src={user?.photoURL} alt={user?.displayName} />
          <input
            type='text'
            placeholder="What's happening?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <input
          type='text'
          value={imageInput}
          className='tweetBox__imageInput'
          onChange={(e) => setImageInput(e.target.value)}
          placeholder='Optional: Enter image URL'
        />
        <Button className='tweetBox__tweet' onClick={sendTweet} type='submit'>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
