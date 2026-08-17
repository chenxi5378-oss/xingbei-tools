import React, { useState } from 'react';

export default function UnitConvert() {
  const [category, setCategory] = useState('length');
  const [from, setFrom] = useState(0);
  const [result, setResult] = useState('');

  const units = {
    length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, ft: 0.3048, in: 0.0254 },
    weight: { kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495 },
    temp: { C: 'c', F: 'f', K: 'k' }
  };

  const convert = () => {
    const val = parseFloat(from);
    if (isNaN(val)) { setResult(''); return; }
    if (category === 'temp') {
      // Simplified
      setResult(`${val}°C = ${(val * 9/5 + 32).toFixed(2)}°F`);
    } else {
      setResult(`${val} ${category === 'length' ? 'm' : 'kg'} = ${val} (示例)`);
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '16px' }}>单位换算器</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', background: '#1e293b', color: '#f8fafc' }}>
        <option value="length">长度</option>
        <option value="weight">重量</option>
        <option value="temp">温度</option>
      </select>
      <input type="number" value={from} onChange={(e) => setFrom(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', background: '#1e293b', color: '#f8fafc' }} />
      <button onClick={convert} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', borderRadius: '8px' }}>转换</button>
      {result && <div style={{ marginTop: '16px', color: '#f8fafc' }}>{result}</div>}
    </div>
  );
}
