import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Analytics from 'react-router-ga';

import ROUTES from './routes';
import { GOOGLE_ANALYTICS } from './constants';

const AppWrapper = styled.div`
  max-width: 420px;
  width: 100%;
`;

function App() {
  const SwitchRoutes = () => (
    <Analytics id={GOOGLE_ANALYTICS.ID}>
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
    </Analytics>
  );

  return (
    <AppWrapper>
      <SwitchRoutes />
    </AppWrapper>
  );
}

export default App;
