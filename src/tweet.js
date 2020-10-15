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

import tweetData from './tweetData';

const Tweet = () => {
  const { message, gravatar, author, likes,
    retweets, timestamp } = tweetData;

  return (
    <div className="tweet">
      <Avatar hash={gravatar} />
      <div className="content">
        <NameWithHandle author={author} /><Time time={timestamp} />
        <Message message={message} />
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