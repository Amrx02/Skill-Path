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

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  assessmentData: AssessmentData | null;
  setAssessmentData: (data: AssessmentData) => void;
  recommendation: SkillRecommendation | null;
  setRecommendation: (rec: SkillRecommendation) => void;
  taskProgress: TaskProgress;
  toggleTaskCompletion: (skillId: string, taskId: string, totalTasks: number) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [assessmentData, setAssessmentDataState] = useState<AssessmentData | null>(null);
  const [recommendation, setRecommendationState] = useState<SkillRecommendation | null>(null);
  const [taskProgress, setTaskProgress] = useState<TaskProgress>({});
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const savedAssessment = localStorage.getItem('assessmentData');
    const savedRecommendation = localStorage.getItem('recommendation');
    const savedProgress = localStorage.getItem('taskProgress');

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    if (savedAssessment) {
      setAssessmentDataState(JSON.parse(savedAssessment));
    }
    if (savedRecommendation) {
      setRecommendationState(JSON.parse(savedRecommendation));
    }
    if (savedProgress) {
      setTaskProgress(JSON.parse(savedProgress));
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

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
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        assessmentData,
        setAssessmentData,
        recommendation,
        setRecommendation,
        taskProgress,
        toggleTaskCompletion,
        isChatOpen,
        setIsChatOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
