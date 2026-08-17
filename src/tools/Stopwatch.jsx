import React, { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime(t => t + 10), 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const format = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centis = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centis.toString().padStart(2, '0')}`;
  };

  const lap = () => setLaps([...laps, time]);
  const reset = () => { setIsRunning(false); setTime(0); setLaps([]); };

  return (
    <div style={{ padding: '24px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc' }}>秒表</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>计时器工具</p>
      
      <div style={{ fontSize: '48px', fontWeight: 700, color: '#3b82f6', fontFamily: 'monospace', marginBottom: '24px' }}>
        {format(time)}
      </div>
      
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
        <button onClick={() => setIsRunning(!isRunning)} style={{ padding: '12px 24px', background: isRunning ? '#ef4444' : '#22c55e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          {isRunning ? '暂停' : '开始'}
        </button>
        <button onClick={lap} disabled={!isRunning} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: isRunning ? 'pointer' : 'not-allowed' }}>计次</button>
        <button onClick={reset} style={{ padding: '12px 24px', background: '#64748b', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>重置</button>
      </div>
      
      {laps.length > 0 && (
        <div style={{ background: '#1e293b', borderRadius: '8px', padding: '16px', maxHeight: '200px', overflow: 'auto' }}>
          {laps.map((lap, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
              <span style={{ color: '#94a3b8' }}>计次 {i + 1}</span>
              <span style={{ color: '#f8fafc', fontFamily: 'monospace' }}>{format(lap)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
