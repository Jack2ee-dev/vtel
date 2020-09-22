import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import ROUTES from './routes';

// import Navbar from './components/navbar/navbar';

const AppWrapper = styled.div`
  max-width: 420px;
  width: 100%;
`;

function App() {
  const SwitchRoutes = () => (
    <Switch>
      {ROUTES.map((prop, key) => (
        <Route
          path={prop.path}
          key={key}
          exact={prop.exact}
          component={prop.container}
        />
      ))}
    </Switch>
  );

  return (
    <AppWrapper>
      {/* <Navbar /> */}
      <SwitchRoutes />
    </AppWrapper>
  );
}

export default App;
