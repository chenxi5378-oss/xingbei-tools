import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function JSONCompare() {
  const [json1, setJson1] = useState('');
  const [json2, setJson2] = useState('');
  const [result, setResult] = useState('');

  const compare = () => {
    try {
      const obj1 = JSON.parse(json1);
      const obj2 = JSON.parse(json2);
      const diff = findDiff(obj1, obj2);
      setResult(JSON.stringify(diff, null, 2));
    } catch (e) {
      setResult('JSON解析错误: ' + e.message);
    }
  };

  const findDiff = (a, b, path = '') => {
    const diff = {};
    const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]);
    keys.forEach(key => {
      const currentPath = path ? `${path}.${key}` : key;
      if (a?.[key] !== b?.[key]) {
        if (typeof a?.[key] === 'object' && typeof b?.[key] === 'object') {
          const nested = findDiff(a[key], b[key], currentPath);
          if (Object.keys(nested).length > 0) diff[key] = nested;
        } else {
          diff[key] = { old: a?.[key], new: b?.[key] };
        }
      }
    });
    return diff;
  };

  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>JSON对比</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>对比两个JSON对象差异</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>JSON A</label>
          <textarea value={json1} onChange={(e) => setJson1(e.target.value)} placeholder="输入第一个JSON" rows={10} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace', resize: 'vertical' }} />
        </div>
        <div>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>JSON B</label>
          <textarea value={json2} onChange={(e) => setJson2(e.target.value)} placeholder="输入第二个JSON" rows={10} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace', resize: 'vertical' }} />
        </div>
      </div>

      <button onClick={compare} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>对比</button>

      {result && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc', whiteSpace: 'pre-wrap' }}>
          {result}
        </div>
      )}
    </div>
  );
}
