import React from 'react';
import { publicRoutes } from '../routes';
import { Switch, Route } from 'react-router-dom';

const App = props => {
  return (
    <Switch>
      {publicRoutes.map((route, idx) => (
        <Route
          key={idx}
          name={route.name}
          path={route.path}
          exact={route.exact}
          render={() => <route.component {...props} />}
        />
      ))}
    </Switch>
  );
};

export default App;
