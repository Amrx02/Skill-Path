import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api, AuthUser } from '../services/api';

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
  user: AuthUser | null;
  token: string | null;
  authLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
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
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('skillpath_token'));
  const [authLoading, setAuthLoading] = useState(true);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const savedAssessment = localStorage.getItem('assessmentData');
    const savedRecommendation = localStorage.getItem('recommendation');
    const savedProgress = localStorage.getItem('taskProgress');

    const activeTheme = savedTheme || theme;
    setTheme(activeTheme);
    document.documentElement.classList.toggle('dark', activeTheme === 'dark');
    document.documentElement.setAttribute('data-bs-theme', activeTheme);
    document.body.setAttribute('data-bs-theme', activeTheme);
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


  useEffect(() => {
    const loadCurrentUser = async () => {
      if (!token) {
        setAuthLoading(false);
        return;
      }

      try {
        const data = await api.me();
        setUser(data.user);
      } catch {
        localStorage.removeItem('skillpath_token');
        setToken(null);
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    loadCurrentUser();
  }, [token]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    document.body.setAttribute('data-bs-theme', newTheme);
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


  const login = async (email: string, password: string) => {
    const data = await api.login({ email, password });
    localStorage.setItem('skillpath_token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const signup = async (name: string, email: string, password: string) => {
    const data = await api.signup({ name, email, password });
    localStorage.setItem('skillpath_token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('skillpath_token');
    setToken(null);
    setUser(null);
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
        user,
        token,
        authLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
