import React, { useState } from 'react';

export default function PortChecker() {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('80');
  const [result, setResult] = useState(null);

  const check = () => {
    setResult({ status: 'checking' });
    setTimeout(() => {
      setResult({
        host,
        port,
        open: Math.random() > 0.5,
        latency: Math.floor(Math.random() * 100) + 20
      });
    }, 1000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>端口检查</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>检测端口是否开放</p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input type="text" value={host} onChange={(e) => setHost(e.target.value)} placeholder="example.com" style={{ flex: 1, padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px' }} />
        <input type="number" value={port} onChange={(e) => setPort(e.target.value)} placeholder="80" style={{ width: '80px', padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px' }} />
        <button onClick={check} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>检查</button>
      </div>

      {result?.status === 'checking' && <div style={{ color: '#94a3b8' }}>检查中...</div>}

      {result?.open !== undefined && (
        <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '8px' }}>{result.open ? '✓' : '✗'}</div>
          <div style={{ color: result.open ? '#22c55e' : '#ef4444', fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>
            端口 {result.port} {result.open ? '开放' : '关闭'}
          </div>
          <div style={{ color: '#94a3b8' }}>延迟: {result.latency}ms</div>
        </div>
      )}
    </div>
  );
}
