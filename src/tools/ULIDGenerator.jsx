import React, { useState } from 'react';

export default function ULIDGenerator() {
  const [count, setCount] = useState(1);
  const [ulids, setUlids] = useState([]);

  const generate = () => {
    const results = [];
    for (let i = 0; i < count; i++) {
      const timestamp = Date.now().toString(32).toUpperCase().padStart(10, '0');
      const random = Array.from({length: 16}, () => '0123456789ABCDEFGHJKMNPQRSTVWXYZ'[Math.floor(Math.random() * 32)]).join('');
      results.push(timestamp + random);
    }
    setUlids(results);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>ULID生成器</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>生成按时间排序的唯一ID</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>数量: {count}</label>
        <input type="range" min="1" max="10" value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ width: '100%' }} />
      </div>

      <button onClick={generate} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>生成</button>

      {ulids.map((ulid, i) => (
        <div key={i} style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', marginBottom: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc' }}>
          {ulid}
        </div>
      ))}
    </div>
  );
}
