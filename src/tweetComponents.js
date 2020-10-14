import React from 'react';

const Avatar = () => {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
};

const NameWithHandle = () => {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="name">@yourhandle</span>
    </span>
  );
};

const Message = () => {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  );
};

const Time = () => {
  return (
    <span className="time">3h Ago</span>
  );
};

const LikeButton = () => {
  return (
    <i className="fa fa-heart like-button" />
  );
};

const CommentButton = () => {
  return (
    <i className="far fa-comment" />
  );
};

const RetweetButton = () => {
  return (
    <i className="fa fa-retweet retweet-button" />
  );
};

const ShareButton = () => {
  return (
    <i className="fas fa-external-link-alt" />
  );
};


export {
  Avatar,
  NameWithHandle,
  Message,
  Time,
  LikeButton,
  CommentButton,
  RetweetButton,
  ShareButton,
};
