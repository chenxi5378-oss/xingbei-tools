import React, { useState, useEffect, useRef } from 'react';
import { Send, Plug } from 'lucide-react';

export default function WebSocketTest() {
  const [url, setUrl] = useState('wss://echo.websocket.org');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const wsRef = useRef(null);

  const connect = () => {
    try {
      const ws = new WebSocket(url);
      ws.onopen = () => { setConnected(true); setMessages(prev => [...prev, { type: 'system', text: '已连接' }]); };
      ws.onmessage = (e) => { setMessages(prev => [...prev, { type: 'received', text: e.data }]); };
      ws.onclose = () => { setConnected(false); setMessages(prev => [...prev, { type: 'system', text: '已断开' }]); };
      ws.onerror = () => { setMessages(prev => [...prev, { type: 'error', text: '连接错误' }]); };
      wsRef.current = ws;
    } catch (e) {}
  };

  const disconnect = () => { wsRef.current?.close(); };

  const sendMessage = () => {
    if (wsRef.current && message) {
      wsRef.current.send(message);
      setMessages(prev => [...prev, { type: 'sent', text: message }]);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>WebSocket测试</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>测试WebSocket连接</p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="ws://example.com/socket" style={{ flex: 1, padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
        {!connected ? (
          <button onClick={connect} style={{ padding: '12px', background: '#22c55e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>连接</button>
        ) : (
          <button onClick={disconnect} style={{ padding: '12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>断开</button>
        )}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="输入消息..." style={{ flex: 1, padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
        <button onClick={sendMessage} disabled={!connected} style={{ padding: '12px', background: connected ? '#3b82f6' : '#64748b', color: 'white', border: 'none', borderRadius: '8px', cursor: connected ? 'pointer' : 'not-allowed' }}>
          <Send size={16} />
        </button>
      </div>

      <div style={{ background: '#1e293b', borderRadius: '8px', padding: '12px', height: '300px', overflow: 'auto' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ padding: '8px', marginBottom: '4px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px', background: m.type === 'sent' ? '#3b82f6' : m.type === 'received' ? '#22c55e' : m.type === 'error' ? '#ef4444' : '#64748b', color: 'white' }}>
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}
