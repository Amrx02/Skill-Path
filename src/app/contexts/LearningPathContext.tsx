import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface AssessmentData {
  interests: string[];
  strengths: string[];
  weaknesses: string[];
  dailyTime: string;
  goals: string[];
  completed: boolean;
}

export interface SkillRecommendation {
  skillId: string;
  skillName: string;
  reason: string;
  timeToIncome: string;
  opportunities: string[];
  matchScore: number;
}

export interface TaskProgress {
  [skillId: string]: {
    completedTasks: string[];
    totalTasks: number;
    progress: number;
  };
}

interface LearningPathContextType {
  assessmentData: AssessmentData | null;
  setAssessmentData: (data: AssessmentData) => void;
  recommendation: SkillRecommendation | null;
  setRecommendation: (rec: SkillRecommendation) => void;
  taskProgress: TaskProgress;
  toggleTaskCompletion: (skillId: string, taskId: string, totalTasks: number) => void;
}

const LearningPathContext = createContext<LearningPathContextType | undefined>(undefined);

export const useLearningPath = () => {
  const context = useContext(LearningPathContext);
  if (!context) {
    throw new Error('useLearningPath must be used within LearningPathProvider');
  }
  return context;
};

export const LearningPathProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [assessmentData, setAssessmentDataState] = useState<AssessmentData | null>(null);
  const [recommendation, setRecommendationState] = useState<SkillRecommendation | null>(null);
  const [taskProgress, setTaskProgress] = useState<TaskProgress>({});

  useEffect(() => {
    const savedAssessment = localStorage.getItem('assessmentData');
    const savedRecommendation = localStorage.getItem('recommendation');
    const savedProgress = localStorage.getItem('taskProgress');

    if (savedAssessment) setAssessmentDataState(JSON.parse(savedAssessment));
    if (savedRecommendation) setRecommendationState(JSON.parse(savedRecommendation));
    if (savedProgress) setTaskProgress(JSON.parse(savedProgress));
  }, []);

  const setAssessmentData = (data: AssessmentData) => {
    setAssessmentDataState(data);
    localStorage.setItem('assessmentData', JSON.stringify(data));
  };

  const setRecommendation = (rec: SkillRecommendation) => {
    setRecommendationState(rec);
    localStorage.setItem('recommendation', JSON.stringify(rec));
  };

  const toggleTaskCompletion = (skillId: string, taskId: string, totalTasks: number) => {
    setTaskProgress(prev => {
      const skillProgress = prev[skillId] || { completedTasks: [], totalTasks, progress: 0 };
      const isCompleted = skillProgress.completedTasks.includes(taskId);

      const updatedCompletedTasks = isCompleted
        ? skillProgress.completedTasks.filter(id => id !== taskId)
        : [...skillProgress.completedTasks, taskId];

      const progress = (updatedCompletedTasks.length / totalTasks) * 100;

      const newProgress = {
        ...prev,
        [skillId]: {
          completedTasks: updatedCompletedTasks,
          totalTasks,
          progress,
        },
      };

      localStorage.setItem('taskProgress', JSON.stringify(newProgress));
      return newProgress;
    });
  };

  return (
    <LearningPathContext.Provider
      value={{
        assessmentData,
        setAssessmentData,
        recommendation,
        setRecommendation,
        taskProgress,
        toggleTaskCompletion,
      }}
    >
      {children}
    </LearningPathContext.Provider>
  );
};