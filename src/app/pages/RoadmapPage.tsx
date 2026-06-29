import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Download, ExternalLink, Clock, BookOpen, CheckCircle2 } from 'lucide-react';
import { useLearningPath } from '../contexts/LearningPathContext';
import { getSkillById, getRoadmapBySkillId } from '../data/skills';
import { Container, Row, Col, Card, Button, ProgressBar, Accordion, Form, Badge } from 'react-bootstrap';

export const RoadmapPage = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const { taskProgress, toggleTaskCompletion } = useLearningPath();

  if (!skillId) {
    navigate('/');
    return null;
  }

  const skill = getSkillById(skillId);
  const roadmap = getRoadmapBySkillId(skillId);

  if (!skill || !roadmap) {
    return (
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2 className="mb-4">Roadmap Not Found</h2>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </Container>
    );
  }

  const allTasks = roadmap.steps.flatMap(step => step.tasks);
  const totalTasks = allTasks.length;
  const completedTasks = taskProgress[skillId]?.completedTasks || [];
  const progressPercentage = taskProgress[skillId]?.progress || 0;

  const handleTaskToggle = (taskId: string) => {
    toggleTaskCompletion(skillId, taskId, totalTasks);
  };

  const downloadChecklist = () => {
    const checklistText = roadmap.steps
      .map(
        (step) =>
          `${step.title}\n${step.tasks.map((task) => `☐ ${task.title}`).join('\n')}\n`
      )
      .join('\n');

    const blob = new Blob([checklistText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${skill.name}-checklist.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
            <span className="gradient-text">{skill.name} Roadmap</span>
          </h1>
          <p className="lead text-muted mb-4">Your step-by-step path to mastery</p>

          <Card className="shadow-lg border-0 mx-auto" style={{ maxWidth: '600px' }}>
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Overall Progress</span>
                <span className="fw-bold text-primary">
                  {completedTasks.length} / {totalTasks} tasks
                </span>
              </div>
              <ProgressBar 
                now={progressPercentage} 
                className="mb-2" 
                style={{ height: '12px' }}
              >
                <ProgressBar 
                  now={progressPercentage} 
                  className="progress-gradient"
                />
              </ProgressBar>
              <p className="text-muted small mb-0">{progressPercentage.toFixed(0)}% Complete</p>
            </Card.Body>
          </Card>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3"
          >
            <Button
              onClick={downloadChecklist}
              variant="outline-primary"
              className="gap-2"
            >
              <Download size={18} />
              Download Checklist
            </Button>
          </motion.div>
        </motion.div>

        <div className="mb-4">
          {roadmap.steps.map((step, stepIndex) => {
            const stepTasks = step.tasks;
            const completedStepTasks = stepTasks.filter(task =>
              completedTasks.includes(task.id)
            ).length;
            const stepProgress = (completedStepTasks / stepTasks.length) * 100;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stepIndex * 0.1 }}
                className="mb-4"
              >
                <Card className="shadow border-0">
                  <Card.Body className="p-4">
                    <Row className="align-items-start mb-3">
                      <Col xs="auto">
                        <div 
                          className="d-flex align-items-center justify-content-center fw-bold text-white rounded-3"
                          style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, #7c3aed, #ec4899)'
                          }}
                        >
                          {stepIndex + 1}
                        </div>
                      </Col>
                      <Col>
                        <h4 className="fw-bold mb-2">{step.title}</h4>
                        <p className="text-muted mb-2">{step.description}</p>
                        <div className="d-flex align-items-center gap-2 text-primary small">
                          <Clock size={16} />
                          <span>{step.duration}</span>
                        </div>
                      </Col>
                    </Row>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="small text-muted">Step Progress</span>
                        <span className="small fw-semibold text-primary">
                          {completedStepTasks} / {stepTasks.length}
                        </span>
                      </div>
                      <ProgressBar now={stepProgress} style={{ height: '8px' }}>
                        <ProgressBar now={stepProgress} className="progress-gradient" />
                      </ProgressBar>
                    </div>

                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <BookOpen className="me-2 text-primary" size={20} />
                          Learning Resources ({step.resources.length})
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flex flex-column gap-2">
                            {step.resources.map((resource, idx) => (
                              <a
                                key={idx}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-flex justify-content-between align-items-center p-3 rounded text-decoration-none card-gradient"
                              >
                                <div className="d-flex align-items-center gap-3">
                                  <Badge bg={resource.free ? 'success' : 'warning'}>
                                    {resource.free ? 'Free' : 'Paid'}
                                  </Badge>
                                  <span className="text-body">{resource.title}</span>
                                </div>
                                <ExternalLink size={16} className="text-muted" />
                              </a>
                            ))}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <CheckCircle2 className="me-2 text-primary" size={20} />
                          Practical Tasks ({completedStepTasks}/{stepTasks.length})
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flex flex-column gap-3">
                            {step.tasks.map((task) => {
                              const isCompleted = completedTasks.includes(task.id);
                              return (
                                <div
                                  key={task.id}
                                  className="d-flex gap-3 p-3 rounded"
                                  style={{ backgroundColor: 'var(--bs-light)' }}
                                >
                                  <Form.Check
                                    type="checkbox"
                                    checked={isCompleted}
                                    onChange={() => handleTaskToggle(task.id)}
                                    className="mt-1"
                                  />
                                  <div className="flex-grow-1">
                                    <h6 
                                      className={`mb-1 ${isCompleted ? 'text-decoration-line-through text-muted' : 'fw-semibold'}`}
                                    >
                                      {task.title}
                                    </h6>
                                    <p className="text-muted small mb-0">{task.description}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card 
            className="text-white text-center shadow-lg border-0"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)'
            }}
          >
            <Card.Body className="p-5">
              <h3 className="fw-bold mb-3">Track Your Progress</h3>
              <p className="mb-4 opacity-75 fs-5">
                Visit your dashboard to see your achievements and milestones
              </p>
              <Button
                onClick={() => navigate('/dashboard')}
                size="lg"
                variant="light"
                className="px-5 py-3 rounded-pill fw-semibold"
              >
                Go to Dashboard
              </Button>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};
