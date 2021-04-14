/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ components, ...props }) => (
  <Route exact>
    {props.loggedIn
      ? components.map((Component) => (
        <Component {...props} />
      )) : <Redirect to={{ pathname: '/', signin: true }} />}
  </Route>
);

export default ProtectedRoute;
