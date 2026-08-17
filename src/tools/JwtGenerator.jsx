import React, { useState } from 'react';

export default function JwtGenerator() {
  const [payload, setPayload] = useState('{}');
  const [secret, setSecret] = useState('');
  const [token, setToken] = useState('');

  const generate = () => {
    try {
      const header = { alg: 'HS256', typ: 'JWT' };
      const base64Header = btoa(JSON.stringify(header));
      const base64Payload = btoa(JSON.stringify(JSON.parse(payload)));
      setToken(`${base64Header}.${base64Payload}.DEMO_SIGNATURE`);
    } catch (e) {
      setToken('Error: ' + e.message);
    }
  };

  const copy = () => navigator.clipboard.writeText(token);

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>JWT生成器</h1>
      <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>生成JWT Token</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>Payload (JSON)</label>
        <textarea value={payload} onChange={(e) => setPayload(e.target.value)} rows={6} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
      </div>

      <button onClick={generate} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}>生成</button>

      {token && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ color: '#94a3b8' }}>Token</span>
            <button onClick={copy} style={{ padding: '6px 12px', background: 'transparent', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '6px', color: '#94a3b8', cursor: 'pointer' }}>复制</button>
          </div>
          <code style={{ color: '#f8fafc', fontSize: '12px', wordBreak: 'break-all' }}>{token}</code>
        </div>
      )}
    </div>
  );
}
