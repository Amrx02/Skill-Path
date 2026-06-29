import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Target, TrendingUp, Users } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { skills } from '../data/skills';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';

export const LandingPage = () => {
  const { setIsChatOpen } = useChat();
  const { user } = useAuth();
  const navigate = useNavigate();

  const startAssessment = () => {
    if (!user) {
      navigate('/signup');
      return;
    }
    setIsChatOpen(true);
  };

  const features = [
    {
      icon: Target,
      title: 'Personalized Assessment',
      description: 'Answer a few questions and get skill recommendations tailored to you',
    },
    {
      icon: TrendingUp,
      title: 'Clear Learning Path',
      description: 'Step-by-step roadmaps with free resources and practical tasks',
    },
    {
      icon: Users,
      title: 'Real Opportunities',
      description: 'Learn skills that can generate income through freelancing',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="blob blob-purple"></div>
        <div className="blob blob-pink"></div>
        <div className="blob blob-blue"></div>
        
        <Container className="py-5 position-relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <Badge bg="light" text="dark" className="p-3 shadow">
                <Sparkles size={16} className="me-2 text-primary" />
                Your path to financial freedom starts here
              </Badge>
            </motion.div>

            <h1 className="display-3 fw-bold mb-4">
              <span className="gradient-text d-block">Discover Your Skills.</span>
              <span className="d-block my-2">Learn. Earn Your</span>
              <span className="gradient-text-green d-block">First Dollar.</span>
            </h1>

            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Feeling lost in traditional education? We help students discover practical skills
              that can generate real income through freelancing.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={startAssessment}
                size="lg"
                className="btn-gradient px-5 py-3 rounded-pill shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="ms-2" size={20} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5"
            >
              <Row className="justify-content-center">
                <Col xs={4} md={3}>
                  <h3 className="gradient-text fw-bold">4+</h3>
                  <p className="text-muted small">Skills to Learn</p>
                </Col>
                <Col xs={4} md={3}>
                  <h3 className="gradient-text fw-bold">100%</h3>
                  <p className="text-muted small">Free Resources</p>
                </Col>
                <Col xs={4} md={3}>
                  <h3 className="gradient-text fw-bold">1-6mo</h3>
                  <p className="text-muted small">To First Income</p>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-body">
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">How It Works</h2>
            <p className="lead text-muted">
              Three simple steps to discover your perfect skill and start earning
            </p>
          </motion.div>

          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-100 border-0 shadow-sm card-gradient">
                    <Card.Body className="p-4">
                      <div 
                        className="mb-4 d-inline-flex p-3 rounded-3"
                        style={{
                          background: 'linear-gradient(135deg, #7c3aed, #ec4899)'
                        }}
                      >
                        <feature.icon size={28} color="white" />
                      </div>
                      <h5 className="fw-bold mb-3">{feature.title}</h5>
                      <p className="text-muted">{feature.description}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Skills Preview Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--bs-light)' }}>
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Skills You Can Learn</h2>
            <p className="lead text-muted">
              Choose from high-demand skills with proven income potential
            </p>
          </motion.div>

          <Row className="g-4">
            {skills.map((skill, index) => (
              <Col key={skill.id} sm={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-100 border-0 shadow card-hover">
                    <Card.Body className="text-center p-4">
                      <div className="skill-icon">{skill.icon}</div>
                      <h5 className="fw-bold mb-2">{skill.name}</h5>
                      <p className="text-muted small mb-3">{skill.description}</p>
                      <div className="d-flex justify-content-between align-items-center small">
                        <span className="text-primary fw-semibold">{skill.timeToIncome}</span>
                        <span className="text-muted">{skill.difficulty}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5 text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #ec4899, #3b82f6)'
        }}
      >
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-5 fw-bold mb-4">Ready to Start Learning?</h2>
            <p className="lead mb-4" style={{ opacity: 0.9 }}>
              Take our 2-minute assessment and discover the perfect skill for you
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={startAssessment}
                size="lg"
                variant="light"
                className="px-5 py-3 rounded-pill shadow-lg fw-semibold"
              >
                Take the Assessment
                <ArrowRight className="ms-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};
