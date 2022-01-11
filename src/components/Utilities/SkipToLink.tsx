import React from 'react';

const SkipToLink = ({ href, skipTo = 'Content' }) => {
  return (
    <a href={href} className="sr-only focus:skip-link">
      Skip To {skipTo}
    </a>
  );
};

export default SkipToLink;
