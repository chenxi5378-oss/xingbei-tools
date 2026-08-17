import React, { useState } from 'react';

export default function JWTDecode() {
  const [token, setToken] = useState('');
  const [decoded, setDecoded] = useState(null);
  const [error, setError] = useState('');

  const decode = () => {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) throw new Error('Invalid JWT format');
      const header = JSON.parse(atob(parts[0]));
      const payload = JSON.parse(atob(parts[1]));
      setDecoded({ header, payload });
      setError('');
    } catch (e) {
      setError('解析失败: ' + e.message);
      setDecoded(null);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>JWT解码器</h1>
      <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>解析JWT Token内容</p>

      <textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="输入JWT Token..."
        rows={4}
        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', marginBottom: '16px' }}
      />

      <button onClick={decode} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
        解码
      </button>

      {error && <div style={{ color: '#ef4444', marginTop: '16px' }}>{error}</div>}

      {decoded && (
        <div style={{ marginTop: '24px' }}>
          <h3 style={{ color: '#94a3b8', marginBottom: '8px' }}>Header</h3>
          <pre style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', color: '#f8fafc', overflow: 'auto' }}>
            {JSON.stringify(decoded.header, null, 2)}
          </pre>
          <h3 style={{ color: '#94a3b8', marginTop: '16px', marginBottom: '8px' }}>Payload</h3>
          <pre style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', color: '#f8fafc', overflow: 'auto' }}>
            {JSON.stringify(decoded.payload, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
