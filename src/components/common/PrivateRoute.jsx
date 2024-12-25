import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, userRole, requiredRole }) => {
  return userRole === requiredRole ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
