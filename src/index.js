import React from 'react';
import ReactDOM from 'react-dom';
// import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const IndexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <IndexWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IndexWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
