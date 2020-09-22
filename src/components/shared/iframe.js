import React from 'react';

const Iframe = ({ id, videoId, height }) => {
  return (
    <iframe
      title={`대표 영상 ${id}`}
      style={{
        width: '100%',
        height: height || '100%',
      }}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
    />
  );
};

export default Iframe;
