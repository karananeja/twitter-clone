import React, { useEffect, useState } from 'react';
import { AutoAwesomeOutlined } from '@mui/icons-material';
import TweetBox from './TweetBox';
import Post from './Post';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import FlipMove from 'react-flip-move';
import '../css/Feed.css';

const Feed = () => {
  const [{ user }] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
        <div className='feed__icon'>
          <AutoAwesomeOutlined />
        </div>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map(({ text, image, displayName, avatar }, index) => (
          <Post
            key={index}
            displayName={displayName}
            verified={user?.emailVerified}
            avatar={avatar}
            text={text}
            image={image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
