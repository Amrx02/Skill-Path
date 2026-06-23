import { Navigate, Outlet, useLocation } from 'react-router';
import { Container, Spinner } from 'react-bootstrap';
import { useApp } from '../contexts/AppContext';

export const ProtectedRoute = () => {
  const { user, authLoading } = useApp();
  const location = useLocation();

  if (authLoading) {
    return (
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <Spinner animation="border" role="status" />
      </Container>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};
