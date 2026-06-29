import { useNavigate } from 'react-router';
import { useLearningPath } from '../contexts/LearningPathContext';
import { motion } from 'motion/react';
import { ArrowRight, Clock, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';
import { getSkillById } from '../data/skills';
import { Container, Row, Col, Card, Button, ProgressBar, ListGroup } from 'react-bootstrap';

export const RecommendationPage = () => {
  const { recommendation } = useLearningPath();
  const navigate = useNavigate();

  if (!recommendation) {
    return (
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2 className="mb-4">No Recommendation Yet</h2>
          <p className="text-muted mb-4">
            Take the assessment first to get your personalized skill recommendation
          </p>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </Container>
    );
  }

  const skill = getSkillById(recommendation.skillId);
  if (!skill) return null;

  return (
    <div className="hero-section py-5">
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <div className="skill-icon">{skill.icon}</div>
          <h1 className="display-4 fw-bold mb-3">
            <span className="gradient-text">{skill.name}</span>
          </h1>
          <p className="lead text-muted mb-4">Your Perfect Skill Match</p>

          <Card className="d-inline-block shadow-lg border-0">
            <Card.Body className="px-5 py-3">
              <div className="d-flex align-items-center gap-3">
                <span className="text-muted small">Match Score:</span>
                <ProgressBar 
                  now={recommendation.matchScore} 
                  className="flex-grow-1"
                  style={{ width: '150px', height: '8px' }}
                />
                <span className="fw-bold text-primary">{recommendation.matchScore}%</span>
              </div>
            </Card.Body>
          </Card>
        </motion.div>

        <Row className="g-4 mb-4">
          <Col lg={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-lg border-0">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-3 d-flex align-items-center gap-2">
                    <TrendingUp className="text-primary" size={24} />
                    Why This Skill is Perfect for You
                  </h4>
                  <p className="lead mb-0">{recommendation.reason}</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4 mb-4">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-100 shadow border-0 card-gradient">
                <Card.Body className="p-4">
                  <Clock className="text-primary mb-3" size={32} />
                  <h5 className="fw-bold mb-2">Time to First Income</h5>
                  <h3 className="gradient-text fw-bold mb-2">{recommendation.timeToIncome}</h3>
                  <p className="text-muted small mb-0">With consistent practice</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-100 shadow border-0" style={{ backgroundColor: '#d1fae5' }}>
                <Card.Body className="p-4">
                  <DollarSign className="text-success mb-3" size={32} />
                  <h5 className="fw-bold mb-2">Beginner Income Range</h5>
                  <h3 className="text-success fw-bold mb-2">$200-$1000/mo</h3>
                  <p className="text-muted small mb-0">Freelancing part-time</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-4"
        >
          <Card className="shadow-lg border-0">
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-4">Where You Can Work</h4>
              <ListGroup variant="flush">
                {recommendation.opportunities.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <ListGroup.Item className="d-flex align-items-center gap-3 border-0 py-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span>{opportunity}</span>
                    </ListGroup.Item>
                  </motion.div>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card 
            className="text-white text-center shadow-lg border-0"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)'
            }}
          >
            <Card.Body className="p-5">
              <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
              <p className="mb-4 opacity-75 fs-5">
                Follow our step-by-step roadmap to master {skill.name} and start earning
              </p>
              <Button
                onClick={() => navigate(`/roadmap/${skill.id}`)}
                size="lg"
                variant="light"
                className="px-5 py-3 rounded-pill shadow fw-semibold"
              >
                View Learning Roadmap
                <ArrowRight className="ms-2" size={20} />
              </Button>
            </Card.Body>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-4"
        >
          <p className="text-muted small">
            This recommendation is based on your interests, strengths, and goals. You can always
            explore other skills in the Resources section.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};
