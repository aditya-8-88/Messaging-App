import { useState } from 'react'
import '../css/ChatWindow.css'

function ChatWindow() {
  const [message, setMessage] = useState('')
  const [selectedChat, setSelectedChat] = useState(null)

  // Mock data for demonstration
  const chats = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'See you tomorrow!',
      time: '2:30 PM',
      unread: 2,
      avatar: 'SJ',
      online: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      lastMessage: 'Thanks for the update',
      time: '1:15 PM',
      unread: 0,
      avatar: 'MC',
      online: false
    },
    {
      id: 3,
      name: 'Emma Wilson',
      lastMessage: 'Perfect! Let\'s do it',
      time: '12:45 PM',
      unread: 5,
      avatar: 'EW',
      online: true
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      lastMessage: 'Can you send me the files?',
      time: 'Yesterday',
      unread: 0,
      avatar: 'AR',
      online: false
    }
  ]

  const messages = [
    { id: 1, text: 'Hey! How are you doing?', sent: false, time: '10:30 AM' },
    { id: 2, text: 'I\'m doing great! Just finished the project', sent: true, time: '10:32 AM' },
    { id: 3, text: 'That\'s awesome! Can you share the details?', sent: false, time: '10:33 AM' },
    { id: 4, text: 'Sure! I\'ll send it over in a few minutes', sent: true, time: '10:35 AM' },
    { id: 5, text: 'Perfect, thanks!', sent: false, time: '10:36 AM' },
    { id: 6, text: 'No problem at all. Let me know if you need anything else 😊', sent: true, time: '10:38 AM' }
  ]

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle sending message
      console.log('Sending message:', message)
      setMessage('')
    }
  }

  return (
    <div className="chat-container">
      {/* Left Sidebar - Chat List */}
      <div className="chat-sidebar">
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="user-profile">
            <div className="avatar-circle">You</div>
          </div>
          <div className="header-icons">
            <button className="icon-btn" title="New Chat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <button className="icon-btn" title="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search or start new chat"
              className="search-input"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="chat-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat === chat.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="chat-avatar">
                <div className="avatar-circle">{chat.avatar}</div>
                {chat.online && <div className="online-indicator"></div>}
              </div>
              <div className="chat-info">
                <div className="chat-header-row">
                  <h3 className="chat-name">{chat.name}</h3>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-preview-row">
                  <p className="chat-preview">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="unread-badge">{chat.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Chat Window */}
      <div className="chat-main">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="avatar-circle small">
                  {chats.find(c => c.id === selectedChat)?.avatar}
                </div>
                <div className="chat-header-text">
                  <h2 className="chat-header-name">
                    {chats.find(c => c.id === selectedChat)?.name}
                  </h2>
                  <p className="chat-header-status">
                    {chats.find(c => c.id === selectedChat)?.online ? 'online' : 'last seen today at 2:30 PM'}
                  </p>
                </div>
              </div>
              <div className="chat-header-actions">
                <button className="icon-btn" title="Search">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </button>
                <button className="icon-btn" title="More">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="messages-container">
              <div className="messages-wrapper">
                {messages.map((msg) => (
                  <div key={msg.id} className={`message ${msg.sent ? 'sent' : 'received'}`}>
                    <div className="message-bubble">
                      <p className="message-text">{msg.text}</p>
                      <span className="message-time">{msg.time}</span>
                      {msg.sent && (
                        <svg className="message-check" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M11.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="message-input-container">
              <button className="icon-btn" title="Emoji">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </button>
              <button className="icon-btn" title="Attach">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
              <form onSubmit={handleSendMessage} className="message-form">
                <input
                  type="text"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="message-input"
                />
                <button type="submit" className="send-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-state-content">
              <div className="empty-logo">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2 className="empty-title">Your Messages</h2>
              <p className="empty-description">
                Send and receive messages without keeping your phone online.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatWindow