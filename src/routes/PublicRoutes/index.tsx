import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = () => {
  const userLogged = localStorage.getItem('@USERLOGGED');

  return userLogged ? <Navigate to='/dashboard' /> : <Outlet />;
};
