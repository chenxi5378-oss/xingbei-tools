import React, { useState } from 'react';

const UNITS = {
  length: { m: 1, km: 0.001, cm: 100, mm: 1000, inch: 39.37, ft: 3.28, yd: 1.09, mi: 0.000621 },
  weight: { kg: 1, g: 1000, mg: 1000000, lb: 2.20462, oz: 35.274, ton: 0.001 },
  temperature: { C: 'temp' }
};

export default function UnitConverter() {
  const [category, setCategory] = useState('length');
  const [from, setFrom] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('cm');
  const [result, setResult] = useState('');

  const convert = () => {
    if (!from) return;
    const val = parseFloat(from);
    if (isNaN(val)) { setResult('无效数字'); return; }

    if (category === 'temperature') {
      let celsius = val;
      if (fromUnit === 'F') celsius = (val - 32) * 5 / 9;
      if (fromUnit === 'K') celsius = val - 273.15;
      
      let res = celsius;
      if (toUnit === 'F') res = celsius * 9 / 5 + 32;
      if (toUnit === 'K') res = celsius + 273.15;
      setResult(res.toFixed(2));
    } else {
      const base = val / UNITS[category][fromUnit];
      const res = base * UNITS[category][toUnit];
      setResult(res.toFixed(4));
    }
  };

  const units = category === 'length' ? ['m', 'km', 'cm', 'mm', 'inch', 'ft', 'yd', 'mi'] :
                category === 'weight' ? ['kg', 'g', 'mg', 'lb', 'oz', 'ton'] :
                ['C', 'F', 'K'];

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>单位换算</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>长度、重量、温度换算</p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        {['length', 'weight', 'temperature'].map((c) => (
          <button key={c} onClick={() => { setCategory(c); setFromUnit(units[0]); setToUnit(units[1]); }} style={{ flex: 1, padding: '8px', background: category === c ? '#3b82f6' : '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '6px', cursor: 'pointer' }}>
            {c === 'length' ? '长度' : c === 'weight' ? '重量' : '温度'}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <input type="number" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="数值" style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
        </div>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={{ padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }}>
          {units.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '16px', color: '#64748b' }}>→</div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ flex: 1, padding: '12px', background: '#1e293b', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace' }}>
          {result || '-'}
        </div>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={{ padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }}>
          {units.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <button onClick={convert} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>换算</button>
    </div>
  );
}
