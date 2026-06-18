import { motion } from 'motion/react';
import { ExternalLink, BookOpen, Users, Wrench, Lightbulb } from 'lucide-react';
import { articles, creators, tools, freelancingTips } from '../data/resources';
import { Container, Row, Col, Card, Badge, Tabs, Tab } from 'react-bootstrap';

export const ResourcesPage = () => {
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
            <span className="gradient-text">Learning Resources</span>
          </h1>
          <p className="lead text-muted">
            Curated articles, creators, tools, and tips to accelerate your learning journey
          </p>
        </motion.div>

        <Tabs defaultActiveKey="articles" className="mb-5 justify-content-center">
          <Tab 
            eventKey="articles" 
            title={
              <span className="d-flex align-items-center gap-2">
                <BookOpen size={18} />
                <span>Articles</span>
              </span>
            }
          >
            <Row className="g-4 mt-2">
              {articles.map((article, index) => (
                <Col key={article.id} md={6} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="h-100 shadow border-0 card-hover">
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <Badge bg="primary" className="badge-gradient">
                            {article.category}
                          </Badge>
                          <span className="text-muted small">{article.readTime}</span>
                        </div>
                        <h5 className="fw-bold mb-3">{article.title}</h5>
                        <p className="text-muted small mb-3">{article.description}</p>
                        <div className="d-flex align-items-center text-primary small fw-semibold">
                          Read Article
                          <ExternalLink className="ms-2" size={16} />
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab 
            eventKey="creators" 
            title={
              <span className="d-flex align-items-center gap-2">
                <Users size={18} />
                <span>Creators</span>
              </span>
            }
          >
            <Row className="g-4 mt-2">
              {creators.map((creator, index) => (
                <Col key={creator.id} md={6} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <a 
                      href={creator.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <Card className="h-100 shadow border-0 card-hover">
                        <Card.Body className="p-4">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div 
                              className="d-flex align-items-center justify-content-center rounded-circle text-white fw-bold fs-4"
                              style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, #7c3aed, #ec4899)'
                              }}
                            >
                              {creator.name.charAt(0)}
                            </div>
                            <div>
                              <h6 className="mb-0 fw-bold">{creator.name}</h6>
                              <small className="text-muted">{creator.platform}</small>
                            </div>
                          </div>
                          <Badge bg="info" className="mb-3">{creator.category}</Badge>
                          <p className="text-muted small mb-3">{creator.description}</p>
                          <div className="d-flex align-items-center text-primary small fw-semibold">
                            Visit Channel
                            <ExternalLink className="ms-2" size={16} />
                          </div>
                        </Card.Body>
                      </Card>
                    </a>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab 
            eventKey="tools" 
            title={
              <span className="d-flex align-items-center gap-2">
                <Wrench size={18} />
                <span>Tools</span>
              </span>
            }
          >
            <Row className="g-4 mt-2">
              {tools.map((tool, index) => (
                <Col key={tool.id} md={6} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <a 
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <Card className="h-100 shadow border-0 card-hover">
                        <Card.Body className="p-4">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <Badge bg="secondary">{tool.category}</Badge>
                            {tool.free && (
                              <Badge bg="success">Free</Badge>
                            )}
                          </div>
                          <h5 className="fw-bold mb-3">{tool.name}</h5>
                          <p className="text-muted small mb-3">{tool.description}</p>
                          <div className="d-flex align-items-center text-primary small fw-semibold">
                            Visit Tool
                            <ExternalLink className="ms-2" size={16} />
                          </div>
                        </Card.Body>
                      </Card>
                    </a>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab 
            eventKey="tips" 
            title={
              <span className="d-flex align-items-center gap-2">
                <Lightbulb size={18} />
                <span>Tips</span>
              </span>
            }
          >
            <Row className="g-4 mt-2">
              {freelancingTips.map((tip, index) => (
                <Col key={tip.id} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="shadow border-0">
                      <Card.Body className="p-4">
                        <div className="d-flex gap-3">
                          <div 
                            className="d-flex align-items-center justify-content-center rounded flex-shrink-0"
                            style={{
                              width: '50px',
                              height: '50px',
                              background: 'linear-gradient(135deg, #7c3aed, #ec4899)'
                            }}
                          >
                            <Lightbulb className="text-white" size={24} />
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="fw-bold mb-0">{tip.title}</h6>
                              <Badge bg="warning" text="dark" className="ms-2">
                                {tip.category}
                              </Badge>
                            </div>
                            <p className="text-muted small mb-0">{tip.description}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5"
        >
          <Card 
            className="text-white text-center shadow-lg border-0"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)'
            }}
          >
            <Card.Body className="p-5">
              <h3 className="fw-bold mb-3">Want More Resources?</h3>
              <p className="mb-2 opacity-75 fs-5">
                Join our community to get weekly updates on new tools, tips, and opportunities
              </p>
              <p className="small opacity-75">
                Coming soon: Newsletter with exclusive content for skill learners
              </p>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};
