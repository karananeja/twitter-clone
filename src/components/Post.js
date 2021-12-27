import React, { forwardRef } from 'react';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  IosShare,
  Repeat,
  VerifiedUser,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import '../css/Post.css';

const Post = forwardRef(
  ({ displayName, verified, text, image, avatar }, ref) => {
    return (
      <div className='post' ref={ref}>
        <div className='post__avatar'>
          <Avatar src={avatar} alt={displayName} />
        </div>
        <div className='post__body'>
          <div className='post__header'>
            <div className='post__headerText'>
              <h3>
                {displayName}{' '}
                <span className='post__headerSpecial'>
                  {verified && <VerifiedUser className='post__badge' />}@
                  {displayName}
                </span>
              </h3>
            </div>
            <div className='post__headerDescription'>
              <p>{text}</p>
            </div>
          </div>
          {image && <img src={image} alt='post image' />}
          <div className='post__footer'>
            <ChatBubbleOutline fontSize='small' />
            <Repeat fontSize='small' />
            <FavoriteBorder fontSize='small' />
            <IosShare fontSize='small' />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
