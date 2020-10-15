import React from 'react';

const Avatar = ({ hash }) => {
  let url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
    />
  );
};

const NameWithHandle = ({ author }) => {
  const { handle, name } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="name">{`@${handle}`}</span>
    </span>
  );
};

const Message = ({ message }) => {
  return (
    <div className="message">
      { message}
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
