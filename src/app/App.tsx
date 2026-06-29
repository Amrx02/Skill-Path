import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { LearningPathProvider } from './contexts/LearningPathContext';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LearningPathProvider>
          <ChatProvider>
            <RouterProvider router={router} />
          </ChatProvider>
        </LearningPathProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
