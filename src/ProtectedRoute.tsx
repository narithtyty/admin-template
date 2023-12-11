import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

const ProtectedRoute = ({
  children,
  requiredRoles,
}: {
  children: React.ReactNode;
  requiredRoles?: string[];
}) => {
  const { token, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      // Redirect to login page if not logged in
      navigate('/login');
    } else if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(role)) {
      // Redirect to notfound page if the user doesn't have the required role
      navigate('/notfound');
    }
  }, [token, role, requiredRoles, navigate]);

  return token ? children : null;
};

export default ProtectedRoute;
