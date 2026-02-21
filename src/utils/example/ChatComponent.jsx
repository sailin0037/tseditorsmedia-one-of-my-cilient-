/**
 * Example: ChatComponent.jsx - Using SmartScroll
 * Demonstrates how to integrate the scroll utilities
 */

import { useState, useRef, useEffect } from 'react';
import SmartScroll from './SmartScroll';
import './SmartScroll.css';

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const scrollContainerRef = useRef(null);
  const [isNearBottom, setIsNearBottom] = useState(true);

  const handleNewMessage = (content) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Check BEFORE appending
    const { shouldScroll } = SmartScroll.calculateScrollNeed(container);

    // Append message
    setMessages(prev => [...prev, { id: Date.now(), content }]);

    // Scroll AFTER appending if user was at bottom
    if (shouldScroll) {
      // Use queue for rapid messages
      SmartScroll.smartScrollAfterAppend(container, { useQueue: true });
    }
  };

  // Handle rapid consecutive messages
  const handleBatchMessages = (newMessages) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { shouldScroll } = SmartScroll.calculateScrollNeed(container);
    
    setMessages(prev => [...prev, ...newMessages]);
    
    if (shouldScroll) {
      // Single scroll after batch
      setTimeout(() => {
        SmartScroll.scrollToBottom(container, { useQueue: true });
      }, 0);
    }
  };

  // Track scroll position for UI feedback
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsNearBottom(SmartScroll.isAtBottom(container));
    }
  };

  // Handle dynamic content (images)
  const handleImageLoad = (e) => {
    SmartScroll.handleContentLoad(scrollContainerRef.current, e.target);
  };

  return (
    <div className="chat-container">
      <div
        ref={scrollContainerRef}
        className="smart-scroll-container"
        onScroll={handleScroll}
        style={{
          height: '400px',
          border: '1px solid #ccc',
          padding: '16px'
        }}
      >
        {messages.map(msg => (
          <div key={msg.id} className="message">
            {msg.content}
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      {!isNearBottom && (
        <button
          onClick={() => scrollToBottom(true)}
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '20px',
            padding: '8px 16px',
            background: '#06b6d4',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer'
          }}
        >
          ↓ New messages
        </button>
      )}

      <input
        type="text"
        placeholder="Type a message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            handleNewMessage(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}
