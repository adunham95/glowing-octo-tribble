import React from 'react';

interface IProps {
  pageContext: {
    title: string,
    description?: string,
    height?: number,
    width?: number,
  };
}

const SocialCard = ({
  pageContext: {
    title = 'Test Title',
    description = '',
    height = 1200,
    width = 628,
  },
}: IProps) => {
  return (
    <div style={{ width, height }} className="bg-blue-500 text-8xl">
      <div className="bg-purple-500 flex items-center text-white px-2 pt-2 pb-3">
        <span>Adrian's Blog</span>
      </div>
      <div className="p-2">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default SocialCard;
