import React from 'react';
import moment from 'moment';

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

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
};

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {
        count > 0 &&
        <span className="like-count">
          {count}
        </span>
      }
    </span>
  );
};

const CommentButton = () => {
  return (
    <i className="far fa-comment" />
  );
};

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      {
        count > 0 &&
        <span className="retweet-count">
          {count}
        </span>
      }
    </span>
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
