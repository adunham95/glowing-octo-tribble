import React from 'react';

interface IProps {
  title: string;
}

const PostTitle = ({ title }: IProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default PostTitle;
