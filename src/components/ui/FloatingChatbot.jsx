import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import cubixcito from '../../assets/images/cubixcito.png';
import './FloatingChatbot.css';

export default function FloatingChatbot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([{ sender: 'bot', text: t('chatbot.greeting') }]);
  }, [t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: inputValue }];
    setMessages(newMessages);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: t('chatbot.reply') },
      ]);
    }, 1000);
  };

  return (
    <div className="floating-chatbot-container">
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <img src={cubixcito} alt="Cubix" className="cubixcito-icon-header" />
            <div>
              <h3>{t('chatbot.title')}</h3>
              <span className="chatbot-dot"></span>
            </div>
          </div>
          <button type="button" className="close-btn" onClick={toggleChat} aria-label={t('chatbot.close')}>
            &times;
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-bubble ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-area" onSubmit={handleSend}>
          <input
            type="text"
            placeholder={t('chatbot.placeholder')}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="send-btn" aria-label={t('chatbot.send')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>

      <button
        type="button"
        className="chatbot-toggle-btn"
        onClick={toggleChat}
        aria-label={isOpen ? t('chatbot.close') : t('chatbot.open')}
      >
        <img src={cubixcito} alt="Cubix" className="cubixcito-icon-btn" />
      </button>
    </div>
  );
}
