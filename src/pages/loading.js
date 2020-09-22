import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import LoadingGIF from '../assets/images/loading.gif';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = ({ location }) => {
  const qs = queryString.parse(location.search);

  setTimeout(() => {
    window.open(qs.uri);
  }, 500);

  console.log(qs);
  return (
    <LoadingWrapper>
      <img src={LoadingGIF} alt="loading-spinner" />
    </LoadingWrapper>
  );
};

export default Loading;
