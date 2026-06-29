import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Trophy, Target, TrendingUp, Calendar, Award, Star } from 'lucide-react';
import { useLearningPath } from '../contexts/LearningPathContext';
import { getSkillById, getRoadmapBySkillId } from '../data/skills';
import { Container, Row, Col, Card, Button, ProgressBar, Badge } from 'react-bootstrap';

export const DashboardPage = () => {
  const { recommendation, taskProgress } = useLearningPath();
  const navigate = useNavigate();

  if (!recommendation) {
    return (
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2 className="mb-4">No Active Learning Path</h2>
          <p className="text-muted mb-4">
            Take the assessment to get started with your learning journey
          </p>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </Container>
    );
  }

  const skill = getSkillById(recommendation.skillId);
  const roadmap = getRoadmapBySkillId(recommendation.skillId);

  if (!skill || !roadmap) return null;

  const progress = taskProgress[recommendation.skillId] || {
    completedTasks: [],
    totalTasks: roadmap.steps.flatMap(s => s.tasks).length,
    progress: 0,
  };

  const milestones = [
    {
      id: 1,
      title: 'Started Learning',
      description: 'Began your journey',
      achieved: true,
      icon: Star,
    },
    {
      id: 2,
      title: 'First Task Complete',
      description: 'Completed your first task',
      achieved: progress.completedTasks.length >= 1,
      icon: Target,
    },
    {
      id: 3,
      title: '25% Progress',
      description: 'Quarter of the way there',
      achieved: progress.progress >= 25,
      icon: TrendingUp,
    },
    {
      id: 4,
      title: 'Halfway Hero',
      description: 'Completed 50% of tasks',
      achieved: progress.progress >= 50,
      icon: Award,
    },
    {
      id: 5,
      title: '75% Champion',
      description: 'Almost there!',
      achieved: progress.progress >= 75,
      icon: Trophy,
    },
    {
      id: 6,
      title: 'Roadmap Complete',
      description: 'Finished all tasks',
      achieved: progress.progress >= 100,
      icon: Trophy,
    },
  ];

  const achievedMilestones = milestones.filter(m => m.achieved).length;

  return (
    <div className="hero-section py-5">
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold mb-3">
            <span className="gradient-text">Your Progress Dashboard</span>
          </h1>
          <p className="lead text-muted">Track your journey to mastering {skill.name}</p>
        </motion.div>

        <Row className="g-4 mb-4">
          <Col sm={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="shadow border-0 h-100">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Target className="text-primary" size={32} />
                    <h2 className="gradient-text fw-bold mb-0">
                      {progress.progress.toFixed(0)}%
                    </h2>
                  </div>
                  <h6 className="text-muted small mb-0">Overall Progress</h6>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col sm={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow border-0 h-100">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <TrendingUp className="text-success" size={32} />
                    <h2 className="text-success fw-bold mb-0">
                      {progress.completedTasks.length}
                    </h2>
                  </div>
                  <h6 className="text-muted small mb-0">Tasks Completed</h6>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col sm={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="shadow border-0 h-100">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Trophy className="text-warning" size={32} />
                    <h2 className="text-warning fw-bold mb-0">{achievedMilestones}</h2>
                  </div>
                  <h6 className="text-muted small mb-0">Milestones Unlocked</h6>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col sm={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="shadow border-0 h-100">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Calendar className="text-info" size={32} />
                    <h2 className="text-info fw-bold mb-0">{roadmap.steps.length}</h2>
                  </div>
                  <h6 className="text-muted small mb-0">Learning Steps</h6>
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
          <Card className="shadow border-0">
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-4">Learning Progress</h4>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>{skill.name} Mastery</span>
                  <span className="fw-bold text-primary">
                    {progress.completedTasks.length} / {progress.totalTasks} tasks
                  </span>
                </div>
                <ProgressBar now={progress.progress} style={{ height: '16px' }}>
                  <ProgressBar now={progress.progress} className="progress-gradient" />
                </ProgressBar>
              </div>

              <Row className="g-3">
                {roadmap.steps.map((step, index) => {
                  const stepTaskIds = step.tasks.map(t => t.id);
                  const completedStepTasks = stepTaskIds.filter(id =>
                    progress.completedTasks.includes(id)
                  ).length;
                  const stepProgress = (completedStepTasks / step.tasks.length) * 100;

                  return (
                    <Col key={step.id} md={6}>
                      <div className="p-3 rounded" style={{ backgroundColor: 'var(--bs-light)' }}>
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <div 
                            className="d-flex align-items-center justify-content-center fw-bold text-white rounded"
                            style={{
                              width: '32px',
                              height: '32px',
                              background: 'linear-gradient(135deg, #7c3aed, #ec4899)'
                            }}
                          >
                            {index + 1}
                          </div>
                          <h6 className="mb-0 fw-semibold">{step.title}</h6>
                        </div>
                        <div className="ms-5">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <span className="small text-muted">
                              {completedStepTasks} / {step.tasks.length} tasks
                            </span>
                            <span className="small fw-semibold text-primary">
                              {stepProgress.toFixed(0)}%
                            </span>
                          </div>
                          <ProgressBar now={stepProgress} style={{ height: '6px' }}>
                            <ProgressBar now={stepProgress} className="progress-gradient" />
                          </ProgressBar>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-4"
        >
          <Card className="shadow border-0">
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <Trophy className="text-warning" size={24} />
                Milestones & Achievements
              </h4>

              <Row className="g-3">
                {milestones.map((milestone, index) => (
                  <Col key={milestone.id} sm={6} lg={4}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                    >
                      <Card 
                        className={`h-100 border-2 ${
                          milestone.achieved
                            ? 'card-gradient border-primary'
                            : 'border-secondary'
                        }`}
                        style={{ opacity: milestone.achieved ? 1 : 0.5 }}
                      >
                        <Card.Body className="p-3">
                          <div className="d-flex gap-3 align-items-start">
                            <div className={milestone.achieved ? 'milestone-icon' : 'milestone-icon milestone-disabled'}>
                              <milestone.icon size={20} />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className={`mb-1 ${milestone.achieved ? 'fw-bold' : 'text-muted'}`}>
                                {milestone.title}
                              </h6>
                              <p className="text-muted small mb-0">{milestone.description}</p>
                            </div>
                            {milestone.achieved && (
                              <Badge bg="success" className="rounded-circle p-1">
                                ✓
                              </Badge>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
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
              <h3 className="fw-bold mb-3">Keep Going!</h3>
              <p className="mb-4 opacity-75 fs-5">
                {progress.progress < 100
                  ? `You're ${(100 - progress.progress).toFixed(0)}% away from completing your roadmap`
                  : 'Congratulations! You completed the roadmap. Time to start freelancing!'}
              </p>
              <Button
                onClick={() => navigate(`/roadmap/${recommendation.skillId}`)}
                size="lg"
                variant="light"
                className="px-5 py-3 rounded-pill fw-semibold"
              >
                Continue Learning
              </Button>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};
