import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { FloatingChatButton } from './FloatingChatButton';
import { ChatWindow } from './ChatWindow';
import { useApp } from '../contexts/AppContext';

export const Layout = () => {
  const { isChatOpen, theme } = useApp();

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
