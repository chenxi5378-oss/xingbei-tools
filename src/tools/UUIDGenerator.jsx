import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function UUIDGenerator() {
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(crypto.randomUUID());
    }
    setUuids(results);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>UUID生成器</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>生成通用唯一标识符</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>数量: {count}</label>
        <input type="range" min="1" max="20" value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ width: '100%' }} />
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button onClick={generate} style={{ flex: 1, padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>生成</button>
        {uuids.length > 0 && (
          <button onClick={copyAll} style={{ padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', cursor: 'pointer' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        )}
      </div>

      {uuids.map((uuid, i) => (
        <div key={i} style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', marginBottom: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc' }}>
          {uuid}
        </div>
      ))}
    </div>
  );
}
