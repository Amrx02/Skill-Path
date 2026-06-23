import { FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Lock, Mail, GraduationCap } from 'lucide-react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useApp } from '../contexts/AppContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: string } | null)?.from || '/dashboard';

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-section min-vh-100 d-flex align-items-center py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={5}>
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="border-0 shadow-lg auth-card">
                <Card.Body className="p-4 p-md-5">
                  <div className="text-center mb-4">
                    <div className="auth-icon mx-auto mb-3">
                      <GraduationCap size={34} />
                    </div>
                    <h1 className="h3 fw-bold mb-2">Welcome back</h1>
                    <p className="text-muted mb-0">Login to continue your learning path.</p>
                  </div>

                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="loginEmail">
                      <Form.Label>Email</Form.Label>
                      <div className="auth-input-wrap">
                        <Mail size={18} />
                        <Form.Control
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="loginPassword">
                      <Form.Label>Password</Form.Label>
                      <div className="auth-input-wrap">
                        <Lock size={18} />
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Your password"
                          required
                        />
                      </div>
                    </Form.Group>

                    <Button type="submit" className="btn-gradient w-100 py-3 rounded-pill" disabled={loading}>
                      {loading ? 'Logging in...' : 'Login'}
                    </Button>
                  </Form>

                  <p className="text-center text-muted mt-4 mb-0">
                    No account? <Link to="/signup" className="fw-semibold">Create one</Link>
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
