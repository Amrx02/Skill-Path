import { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useChat } from '../contexts/ChatContext';
import { useLearningPath } from '../contexts/LearningPathContext';
import { useNavigate } from 'react-router';
import { skills } from '../data/skills';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
}

interface AssessmentState {
  step: number;
  interests: string[];
  strengths: string[];
  weaknesses: string[];
  dailyTime: string;
  goals: string[];
}

export const ChatWindow = () => {
  const { setIsChatOpen } = useChat();
  const { setAssessmentData, setRecommendation } = useLearningPath();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    step: 0,
    interests: [],
    strengths: [],
    weaknesses: [],
    dailyTime: '',
    goals: [],
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      addBotMessage(
        "Hey there! 👋 I'm here to help you discover the perfect skill to learn. Ready to find your path to earning your first dollar?",
        ['Yes, let\'s start!', 'Tell me more']
      );
    }, 500);
  }, []);

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: 'bot',
          text,
          options,
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: 'user',
        text,
      },
    ]);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    processResponse(option);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addUserMessage(inputValue);
    processResponse(inputValue);
    setInputValue('');
  };

  const processResponse = (response: string) => {
    const { step } = assessmentState;

    switch (step) {
      case 0:
        setAssessmentState((prev) => ({ ...prev, step: 1 }));
        addBotMessage(
          "Awesome! Let's start with your interests. What activities do you enjoy? (Select all that apply)",
          ['Creative work', 'Problem solving', 'Writing', 'Visual content', 'Technology', 'Storytelling']
        );
        break;

      case 1:
        const newInterests = [...assessmentState.interests, response];
        setAssessmentState((prev) => ({ ...prev, interests: newInterests }));
        
        if (newInterests.length >= 2) {
          setAssessmentState((prev) => ({ ...prev, step: 2 }));
          addBotMessage(
            "Great choices! Now, what are your strengths? (Select all that apply)",
            ['Attention to detail', 'Fast learner', 'Creative thinking', 'Logical reasoning', 'Communication', 'Patience']
          );
        } else {
          addBotMessage(
            "Pick one or more interests:",
            ['Creative work', 'Problem solving', 'Writing', 'Visual content', 'Technology', 'Storytelling']
          );
        }
        break;

      case 2:
        const newStrengths = [...assessmentState.strengths, response];
        setAssessmentState((prev) => ({ ...prev, strengths: newStrengths }));
        
        if (newStrengths.length >= 2) {
          setAssessmentState((prev) => ({ ...prev, step: 3 }));
          addBotMessage(
            "How much time can you dedicate daily to learning?",
            ['1-2 hours', '2-3 hours', '3-4 hours', '4+ hours']
          );
        } else {
          addBotMessage(
            "What are your strengths? (Pick more)",
            ['Attention to detail', 'Fast learner', 'Creative thinking', 'Logical reasoning', 'Communication', 'Patience']
          );
        }
        break;

      case 3:
        setAssessmentState((prev) => ({ ...prev, dailyTime: response, step: 4 }));
        addBotMessage(
          "Perfect! What's your main goal?",
          ['Earn quick income', 'Build a career', 'Learn for hobby', 'Start a business']
        );
        break;

      case 4:
        const finalGoals = [...assessmentState.goals, response];
        const finalAssessment = {
          ...assessmentState,
          goals: finalGoals,
          completed: true,
        };
        
        setAssessmentData(finalAssessment);
        const recommendation = generateRecommendation(finalAssessment);
        setRecommendation(recommendation);
        
        addBotMessage(
          `Based on your interests and goals, I recommend ${recommendation.skillName}! 🎉 Click below to see why this is perfect for you.`,
          ['Show me my recommendation!']
        );
        setAssessmentState((prev) => ({ ...prev, step: 5 }));
        break;

      case 5:
        navigate('/recommendation');
        setIsChatOpen(false);
        break;

      default:
        break;
    }
  };

  const generateRecommendation = (assessment: AssessmentState) => {
    const allResponses = [
      ...assessment.interests,
      ...assessment.strengths,
      ...assessment.goals,
    ].map(r => r.toLowerCase());

    let scores = skills.map(skill => {
      let score = 0;
      skill.keywords.forEach(keyword => {
        if (allResponses.some(response => response.includes(keyword))) {
          score += 1;
        }
      });
      return { skill, score };
    });

    scores.sort((a, b) => b.score - a.score);
    const topSkill = scores[0].skill;

    return {
      skillId: topSkill.id,
      skillName: topSkill.name,
      reason: `${topSkill.name} aligns perfectly with your interests in ${assessment.interests.slice(0, 2).join(' and ')}. With ${assessment.dailyTime} of daily practice, you can start earning in ${topSkill.timeToIncome}.`,
      timeToIncome: topSkill.timeToIncome,
      opportunities: [
        'Freelance platforms like Fiverr and Upwork',
        'Direct client outreach',
        'Building a personal brand',
        'Creating and selling templates/products',
      ],
      matchScore: Math.min(95, 70 + scores[0].score * 5),
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="chat-window"
    >
      <Card className="border-0 shadow-lg">
        <div className="chat-header d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0 fw-bold">SkillPath Assistant</h6>
            <small className="opacity-75">Let's find your perfect skill!</small>
          </div>
          <button
            onClick={() => setIsChatOpen(false)}
            className="btn btn-link text-white p-0"
            aria-label="Close chat"
          >
            <X size={24} />
          </button>
        </div>

        <div className="chat-messages">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`d-flex ${message.type === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-3`}
              >
                <div className={message.type === 'user' ? 'message-user' : 'message-bot'}>
                  <p className="mb-0 small">{message.text}</p>
                  {message.options && (
                    <div className="d-flex flex-column gap-2 mt-2">
                      {message.options.map((option, idx) => (
                        <Button
                          key={idx}
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleOptionClick(option)}
                          className="text-start"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="message-bot"
            >
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <Card.Footer className="bg-white">
          <Form onSubmit={handleSendMessage}>
            <InputGroup>
              <Form.Control
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
              />
              <Button type="submit" variant="primary" className="btn-gradient">
                <Send size={18} />
              </Button>
            </InputGroup>
          </Form>
        </Card.Footer>
      </Card>
    </motion.div>
  );
};
