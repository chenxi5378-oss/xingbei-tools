import React, { useState } from 'react';

export default function SnowflakeID() {
  const [count, setCount] = useState(1);
  const [ids, setIds] = useState([]);
  const [workerId] = useState(Math.floor(Math.random() * 31));
  const [datacenterId] = useState(Math.floor(Math.random() * 31));

  let sequence = 0;
  let lastTimestamp = -1;

  const generateSnowflake = () => {
    const timestamp = Date.now();
    if (timestamp === lastTimestamp) {
      sequence = (sequence + 1) & 4095;
      if (sequence === 0) while (Date.now() <= timestamp) {}
    } else {
      sequence = 0;
    }
    lastTimestamp = timestamp;

    const id = ((BigInt(timestamp) - BigInt(1288834974657)) << BigInt(22)) |
               (BigInt(datacenterId) << BigInt(17)) |
               (BigInt(workerId) << BigInt(12)) |
               BigInt(sequence);
    return id.toString();
  };

  const generate = () => {
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(generateSnowflake());
    }
    setIds(results);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>雪花ID生成器</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>分布式唯一ID</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>数量: {count}</label>
        <input type="range" min="1" max="10" value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ width: '100%' }} />
      </div>

      <button onClick={generate} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}>生成</button>

      {ids.map((id, i) => (
        <div key={i} style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', marginBottom: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc' }}>
          {id}
        </div>
      ))}
    </div>
  );
}
