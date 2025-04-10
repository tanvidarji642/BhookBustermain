import { Navigate, Outlet } from 'react-router-dom';

const AdminPrivateRoutes = () => {
  const isAdmin = localStorage.getItem('adminToken');

  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminPrivateRoutes; 