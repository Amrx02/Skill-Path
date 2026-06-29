import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useChat } from '../contexts/ChatContext';

export const FloatingChatButton = () => {
  const { isChatOpen, setIsChatOpen } = useChat();

  if (isChatOpen) return null;

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsChatOpen(true)}
      className="floating-btn"
      aria-label="Open chat"
    >
      <MessageCircle size={28} />
      <motion.span
        className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        !
      </motion.span>
    </motion.button>
  );
};
