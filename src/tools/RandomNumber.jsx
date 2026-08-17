import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

export default function RandomNumber() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [exclude, setExclude] = useState('');
  const [results, setResults] = useState([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const excludeList = exclude.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    const generated = [];
    let attempts = 0;
    while (generated.length < count && attempts < 10000) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!excludeList.includes(num) && !generated.includes(num)) {
        generated.push(num);
      }
      attempts++;
    }
    setResults(generated);
  };

  const copyResults = () => {
    navigator.clipboard.writeText(results.join(', '));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>
          随机数字生成器
        </h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>
          生成随机数字，支持范围、排除、抽奖模式
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>最小值</label>
          <input type="number" value={min} onChange={(e) => setMin(parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>最大值</label>
          <input type="number" value={max} onChange={(e) => setMax(parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>生成数量</label>
        <input type="number" min="1" max="1000" value={count} onChange={(e) => setCount(parseInt(e.target.value) || 1)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>排除数字（用逗号分隔）</label>
        <input type="text" value={exclude} onChange={(e) => setExclude(e.target.value)} placeholder="例如: 4, 7, 13" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button onClick={generate} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
          <RefreshCw size={16} /> 生成
        </button>
        {results.length > 0 && (
          <button onClick={copyResults} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '8px', fontSize: '14px', cursor: 'pointer' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? '已复制' : '复制'}
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {results.map((num, index) => (
              <div key={index} style={{ padding: '8px 16px', background: '#3b82f6', borderRadius: '8px', fontSize: '18px', fontWeight: 600, color: 'white' }}>
                {num}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
