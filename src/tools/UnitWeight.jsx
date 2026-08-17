import React, { useState } from 'react';

export default function UnitWeight() {
  const [value, setValue] = useState(1);
  const [from, setFrom] = useState('kg');
  const [to, setTo] = useState('g');
  const [result, setResult] = useState(1000);

  const units = {
    kg: { name: '千克', factor: 1000 },
    g: { name: '克', factor: 1 },
    mg: { name: '毫克', factor: 0.001 },
    t: { name: '吨', factor: 1000000 },
    lb: { name: '磅', factor: 453.592 },
    oz: { name: '盎司', factor: 28.3495 },
    jin: { name: '斤', factor: 500 },
    liang: { name: '两', factor: 50 }
  };

  const convert = () => {
    const grams = value * units[from].factor;
    setResult(grams / units[to].factor);
  };

  React.useEffect(() => { convert(); }, [value, from, to]);

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>重量换算</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>重量单位换算工具</p>

      <div style={{ marginBottom: '16px' }}>
        <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', marginBottom: '12px' }} />
        <div style={{ display: 'flex', gap: '12px' }}>
          <select value={from} onChange={(e) => setFrom(e.target.value)} style={{ flex: 1, padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }}>
            {Object.entries(units).map(([key, u]) => <option key={key} value={key}>{u.name}</option>)}
          </select>
          <span style={{ color: '#94a3b8', alignSelf: 'center' }}>→</span>
          <select value={to} onChange={(e) => setTo(e.target.value)} style={{ flex: 1, padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }}>
            {Object.entries(units).map(([key, u]) => <option key={key} value={key}>{u.name}</option>)}
          </select>
        </div>
      </div>

      <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', fontWeight: 600, color: '#f8fafc' }}>{result.toFixed(4)}</div>
        <div style={{ color: '#94a3b8', marginTop: '8px' }}>{units[to].name}</div>
      </div>
    </div>
  );
}
