import React, { useState } from 'react';

export default function UnitLength() {
  const units = { m: 1, km: 1000, cm: 0.01, mm: 0.001, inch: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.34 };
  const [value, setValue] = useState(1);
  const [from, setFrom] = useState('m');
  const [to, setTo] = useState('km');
  const result = (value * units[from] / units[to]).toFixed(6);

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>长度换算</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>长度单位互转</p>
      <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} style={{ flex: 1, padding: '12px', background: '#0f172a', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
          <select value={from} onChange={(e) => setFrom(e.target.value)} style={{ padding: '12px', background: '#0f172a', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }}>
            {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '16px' }}>↓</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ flex: 1, padding: '12px', background: '#0f172a', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace' }}>{result}</div>
          <select value={to} onChange={(e) => setTo(e.target.value)} style={{ padding: '12px', background: '#0f172a', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }}>
            {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
