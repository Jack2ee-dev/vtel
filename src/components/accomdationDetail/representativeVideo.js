import React from 'react';

import Iframe from '../../components/shared/iframe';

const RepresentativeVideo = ({
  id,
  representativeVideoId,
}) => {
  return (
    <Iframe
      id={id}
      videoId={representativeVideoId}
      height="300px"
    />
  );
};

export default RepresentativeVideo;
