import React, { useState } from 'react';

export default function DateDiff() {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [result, setResult] = useState(null);

  const calc = () => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d2 - d1);
    setResult({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor(diff / (1000 * 60))
    });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>日期间隔</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>计算两个日期之间的天数</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>日期1</label>
        <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>日期2</label>
        <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
      </div>

      <button onClick={calc} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>计算</button>

      {result && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px' }}>
          <div style={{ color: '#94a3b8', marginBottom: '8px' }}>间隔：</div>
          <div style={{ fontSize: '24px', color: '#f8fafc', fontWeight: 'bold' }}>{result.days} 天</div>
          <div style={{ color: '#64748b', marginTop: '8px' }}>{result.hours} 小时 / {result.minutes} 分钟</div>
        </div>
      )}
    </div>
  );
}
