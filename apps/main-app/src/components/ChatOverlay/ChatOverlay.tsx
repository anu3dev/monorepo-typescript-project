import React, { useState, useRef, useEffect } from 'react';
import './ChatOverlay.scss';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatOverlayProps {
  onClose: () => void;
}

const ChatOverlay: React.FC<ChatOverlayProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! 👋 I'm Anurag's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes('hello') ||
      lowerMessage.includes('hi') ||
      lowerMessage.includes('hey')
    ) {
      return "Hello! Great to see you on Anurag's portfolio. What would you like to know about his work?";
    } else if (
      lowerMessage.includes('portfolio') ||
      lowerMessage.includes('project')
    ) {
      return 'Anurag has built some amazing projects! This portfolio showcases his expertise in React, TypeScript, and modern web development. Which project interests you most?';
    } else if (
      lowerMessage.includes('skills') ||
      lowerMessage.includes('technology')
    ) {
      return "Anurag specializes in full-stack development with React, TypeScript, Node.js, and modern DevOps practices. He's passionate about creating scalable, user-friendly applications.";
    } else if (
      lowerMessage.includes('contact') ||
      lowerMessage.includes('hire')
    ) {
      return "You can reach Anurag through LinkedIn or GitHub (links in the footer). He's always open to discussing new opportunities and interesting projects!";
    } else if (lowerMessage.includes('experience')) {
      return 'Anurag has 9+ years of experience in software development, specializing in modern web technologies and building enterprise-grade applications.';
    } else {
      const responses = [
        "That's interesting! Is there anything specific about Anurag's work you'd like to know more about?",
        "I'd be happy to help! Feel free to ask about Anurag's projects, skills, or experience.",
        "Great question! What aspect of Anurag's portfolio would you like to explore?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: generateBotResponse(inputText),
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      800 + Math.random() * 800
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-overlay">
      <div className="chat-overlay__backdrop" onClick={onClose} />
      <div className="chat-overlay__container">
        <div className="chat-overlay__header">
          <div className="chat-overlay__title">
            <h3>🤖 Chat with Anurag's AI</h3>
            <p>Ask me anything about Anurag's work!</p>
          </div>
          <button
            className="chat-overlay__close"
            onClick={onClose}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        <div className="chat-overlay__messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chat-message ${message.sender === 'user' ? 'chat-message--user' : 'chat-message--bot'}`}
            >
              <div className="chat-message__avatar">
                {message.sender === 'user' ? '👤' : '🤖'}
              </div>
              <div className="chat-message__content">
                <div className="chat-message__text">{message.text}</div>
                <div className="chat-message__time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-message chat-message--bot">
              <div className="chat-message__avatar">🤖</div>
              <div className="chat-message__content">
                <div className="chat-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-overlay__input">
          <div className="chat-input-container">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Anurag's work..."
              className="chat-input"
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim() || isTyping}
              className="chat-send-btn"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatOverlay;
