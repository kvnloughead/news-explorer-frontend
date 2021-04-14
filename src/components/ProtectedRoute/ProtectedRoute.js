/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const currentUserContext = useContext(CurrentUserContext);

  return (
    <Route exact>
      {
        () => (currentUserContext.loggedIn ? <Component {...props} /> : <Redirect to={{ pathname: './signin', signin: true }} />)
      }
    </Route>
  );
};

export default ProtectedRoute;
