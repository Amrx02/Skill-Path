import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { FloatingChatButton } from './FloatingChatButton';
import { ChatWindow } from './ChatWindow';
import { useChat } from '../contexts/ChatContext';
import { useTheme } from '../contexts/ThemeContext';

export const Layout = () => {
  const { isChatOpen } = useChat();
  const { theme } = useTheme();

  return (
    <div data-bs-theme={theme} style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FloatingChatButton />
      {isChatOpen && <ChatWindow />}
    </div>
  );
};
