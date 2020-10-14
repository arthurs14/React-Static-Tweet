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

const tweetData = {
  mesage: 'I like playing Apex Legends with the bois.',
  gravatar: 'xyz',
  author: {
    handle: 'arthur14',
    name: 'Arthur'
  },
  likes: 2,
  retweets: 0,
  timestamp: '2020-10-14 4:50:04',
};

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