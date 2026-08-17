import React, { useState } from 'react';

export default function UnitTemperature() {
  const [value, setValue] = useState(25);
  const [from, setFrom] = useState('c');
  const [result, setResult] = useState({ c: 25, f: 77, k: 298.15 });

  const convert = () => {
    const v = Number(value);
    let c, f, k;
    
    if (from === 'c') { c = v; f = v * 9/5 + 32; k = v + 273.15; }
    else if (from === 'f') { c = (v - 32) * 5/9; f = v; k = c + 273.15; }
    else if (from === 'k') { c = v - 273.15; f = c * 9/5 + 32; k = v; }
    
    setResult({ c, f, k });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>温度换算</h1>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} style={{ flex: 1, padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
        <select value={from} onChange={(e) => setFrom(e.target.value)} style={{ padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }}>
          <option value="c">摄氏度 (°C)</option>
          <option value="f">华氏度 (°F)</option>
          <option value="k">开尔文 (K)</option>
        </select>
      </div>
      <button onClick={convert} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}>换算</button>
      
      <div style={{ display: 'grid', gap: '12px' }}>
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>摄氏度</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>{result.c.toFixed(2)} °C</span>
        </div>
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>华氏度</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>{result.f.toFixed(2)} °F</span>
        </div>
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>开尔文</span>
          <span style={{ color: '#f8fafc', fontWeight: 500 }}>{result.k.toFixed(2)} K</span>
        </div>
      </div>
    </div>
  );
}
