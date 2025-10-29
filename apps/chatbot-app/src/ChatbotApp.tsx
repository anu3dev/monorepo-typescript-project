import React, { useState, useRef, useEffect } from 'react';
import { Navigation, Footer } from '../../../packages/ui/src';
import './chatbotApp.scss';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
}

const ChatbotApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi Anurag! 👋 I'm your AI assistant. How can I help you today?",
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

    // Simple response logic - you can enhance this
    if (
      lowerMessage.includes('hello') ||
      lowerMessage.includes('hi') ||
      lowerMessage.includes('hey')
    ) {
      return 'Hello Anurag! Great to see you here. What would you like to chat about?';
    } else if (lowerMessage.includes('how are you')) {
      return "I'm doing great, thank you for asking! I'm here and ready to help you with anything you need.";
    } else if (
      lowerMessage.includes('portfolio') ||
      lowerMessage.includes('project')
    ) {
      return "Your portfolio looks amazing! I can see you've built a sophisticated monorepo with React, TypeScript, and a great design system. What specific project would you like to discuss?";
    } else if (lowerMessage.includes('help')) {
      return "I'm here to help! You can ask me about your projects, coding questions, or just have a friendly chat. What do you need assistance with?";
    } else if (lowerMessage.includes('weather')) {
      return "I don't have access to current weather data, but I hope you're having a great day! Is there something else I can help you with?";
    } else if (lowerMessage.includes('time')) {
      return `The current time is ${new Date().toLocaleTimeString()}. How can I assist you today?`;
    } else if (
      lowerMessage.includes('bye') ||
      lowerMessage.includes('goodbye')
    ) {
      return 'Goodbye Anurag! It was great chatting with you. Feel free to come back anytime! 👋';
    } else {
      const responses = [
        "That's interesting! Tell me more about that.",
        'I understand. Can you elaborate on that?',
        'Thanks for sharing that with me. What else is on your mind?',
        "That's a great point! I'd love to hear your thoughts on this.",
        'Absolutely! What would you like to explore further?',
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

    // Simulate typing delay
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
      1000 + Math.random() * 1000
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: 'Chat cleared! Hi again Anurag! How can I help you?',
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="chatbot-app">
      <Navigation />

      <main className="chatbot-main">
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <h1>🤖 AI Assistant</h1>
              <p>Chat with Anurag's AI - Powered by EMS</p>
            </div>
            <button
              className="clear-button"
              onClick={clearChat}
              title="Clear Chat"
            >
              🗑️ Clear
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-avatar">
                  {message.sender === 'user' ? '👤' : '🤖'}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot-message">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <div className="input-container">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message to Anurag's AI..."
                rows={1}
                className="message-input"
              />
              <button
                onClick={sendMessage}
                disabled={!inputText.trim() || isTyping}
                className="send-button"
                title="Send message"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChatbotApp;
