import React from 'react';
import {
  Avatar,
  NameWithHandle,
  Message,
  Time,
  LikeButton,
  CommentButton,
  RetweetButton,
  ShareButton,
} from './tweetComponents';

const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /><Time />
        <Message />
        <div className="buttons">
          <LikeButton />
          <CommentButton />
          <RetweetButton />
          <ShareButton />
        </div>
      </div>
    </div>
  );
}

export default Tweet;