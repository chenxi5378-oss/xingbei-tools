import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

export default function BaseConverter() {
  const [input, setInput] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [results, setResults] = useState({});

  const convert = () => {
    if (!input) return;
    try {
      const decimal = parseInt(input, fromBase);
      if (isNaN(decimal)) throw new Error('Invalid number');
      setResults({
        '2': decimal.toString(2),
        '8': decimal.toString(8),
        '10': decimal.toString(10),
        '16': decimal.toString(16).toUpperCase(),
      });
    } catch {
      setResults({});
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>进制转换器</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>2/8/10/16进制互转</p>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入数字"
          style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }}
        />
        <select
          value={fromBase}
          onChange={(e) => setFromBase(parseInt(e.target.value))}
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }}
        >
          <option value="2">2进制</option>
          <option value="8">8进制</option>
          <option value="10">10进制</option>
          <option value="16">16进制</option>
        </select>
      </div>

      <button
        onClick={convert}
        style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}
      >
        转换
      </button>

      {Object.keys(results).length > 0 && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '20px' }}>
          {Object.entries(results).map(([base, value]) => (
            <div key={base} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
              <span style={{ color: '#94a3b8' }}>{base}进制</span>
              <span style={{ color: '#f8fafc', fontFamily: 'monospace' }}>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
