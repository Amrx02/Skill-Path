import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Lock, Mail, User, GraduationCap } from 'lucide-react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useApp } from '../contexts/AppContext';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      await signup(name, email, password);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
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
                    <h1 className="h3 fw-bold mb-2">Create account</h1>
                    <p className="text-muted mb-0">Start your personalized skill discovery journey.</p>
                  </div>

                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="signupName">
                      <Form.Label>Name</Form.Label>
                      <div className="auth-input-wrap">
                        <User size={18} />
                        <Form.Control
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signupEmail">
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

                    <Form.Group className="mb-4" controlId="signupPassword">
                      <Form.Label>Password</Form.Label>
                      <div className="auth-input-wrap">
                        <Lock size={18} />
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Minimum 6 characters"
                          required
                        />
                      </div>
                    </Form.Group>

                    <Button type="submit" className="btn-gradient w-100 py-3 rounded-pill" disabled={loading}>
                      {loading ? 'Creating account...' : 'Sign up'}
                    </Button>
                  </Form>

                  <p className="text-center text-muted mt-4 mb-0">
                    Already have an account? <Link to="/login" className="fw-semibold">Login</Link>
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
