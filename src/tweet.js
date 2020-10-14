import React from 'react';
import Avatar from './avatar';
import Message from './message';
import NameWithHandle from './nameWithHandle';

const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Message />
      </div>
    </div>
  );
}

export default Tweet;