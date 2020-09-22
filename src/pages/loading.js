import React from 'react';
import styled from 'styled-components';

import LoadingGIF from '../assets/images/loading.gif';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = ({ match }) => {
  console.log(match);
  return (
    <LoadingWrapper>
      <img src={LoadingGIF} alt="loading-spinner" />
    </LoadingWrapper>
  );
};

export default Loading;
