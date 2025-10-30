import React, { useState, useRef, useEffect } from 'react';
import { openAIService } from '@ems/api';
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      return await openAIService.sendMessage(userMessage);
    } catch (error) {
      console.error('Error generating response:', error);
      return "I apologize, but I'm having trouble processing your request right now. Please try again later.";
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

    const currentInput = inputText; // Store the input before clearing
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Get AI response
      const responseText = await generateBotResponse(currentInput);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
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
