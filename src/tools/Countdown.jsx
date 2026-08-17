import React, { useState } from 'react';

export default function Countdown() {
  const [time, setTime] = useState({ hours: 0, minutes: 5, seconds: 0 });
  const [remaining, setRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    const total = time.hours * 3600 + time.minutes * 60 + time.seconds;
    setRemaining(total);
    setIsRunning(true);
    const interval = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) { clearInterval(interval); setIsRunning(false); return 0; }
        return r - 1;
      });
    }, 1000);
  };

  const format = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ padding: '24px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc' }}>倒计时器</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>倒计时工具</p>
      
      {!isRunning && remaining === 0 && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          <input type="number" value={time.hours} onChange={(e) => setTime({...time, hours: parseInt(e.target.value) || 0})} style={{ width: '60px', padding: '8px', borderRadius: '6px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} placeholder="时" />
          <input type="number" value={time.minutes} onChange={(e) => setTime({...time, minutes: parseInt(e.target.value) || 0})} style={{ width: '60px', padding: '8px', borderRadius: '6px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} placeholder="分" />
          <input type="number" value={time.seconds} onChange={(e) => setTime({...time, seconds: parseInt(e.target.value) || 0})} style={{ width: '60px', padding: '8px', borderRadius: '6px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} placeholder="秒" />
        </div>
      )}
      
      <div style={{ fontSize: '64px', fontWeight: 700, color: '#3b82f6', fontFamily: 'monospace', marginBottom: '24px' }}>
        {format(remaining || time.hours * 3600 + time.minutes * 60 + time.seconds)}
      </div>
      
      <button onClick={start} disabled={isRunning} style={{ padding: '12px 32px', background: isRunning ? '#334155' : '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: isRunning ? 'not-allowed' : 'pointer' }}>
        {isRunning ? '进行中...' : '开始倒计时'}
      </button>
    </div>
  );
}
