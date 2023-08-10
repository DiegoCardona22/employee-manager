// @packages
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// @scripts
import { AuthState } from '../types/auth';

const PublicRoute = () => {
  const { auth } = useSelector((state: AuthState) => state.authReducer);

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
