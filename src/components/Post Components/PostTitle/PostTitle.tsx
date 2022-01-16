import React from 'react';

interface IProps {
  title: string;
}

const PostTitle = ({ title }: IProps) => {
  return (
    <div>
      <h1 className=" text-brand-dark-500 dark:text-brand-light-500">
        {title}
      </h1>
    </div>
  );
};

export default PostTitle;
