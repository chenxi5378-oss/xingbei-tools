import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function SqlFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const format = () => {
    let sql = input
      .replace(/\s+/g, ' ')
      .replace(/\s*,\s*/g, ', ')
      .replace(/\s*\(\s*/g, ' (')
      .replace(/\s*\)\s*/g, ') ')
      .replace(/\s*=\s*/g, ' = ')
      .replace(/\s+</g, ' <')
      .replace(/\s+>/g, ' >');
    
    const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'INSERT', 'UPDATE', 'DELETE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'ON', 'GROUP', 'BY', 'ORDER', 'HAVING', 'LIMIT', 'OFFSET', 'UNION', 'VALUES', 'SET'];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'gi');
      sql = sql.replace(regex, '\n' + kw);
    });
    
    setOutput(sql.trim());
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>SQL格式化</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>美化SQL语句</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <div style={{ color: '#94a3b8', marginBottom: '8px' }}>输入SQL</div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入SQL语句..."
            rows={15}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', fontFamily: 'monospace', resize: 'none' }}
          />
        </div>
        <div>
          <div style={{ color: '#94a3b8', marginBottom: '8px' }}>格式化结果</div>
          <textarea
            value={output}
            readOnly
            rows={15}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#0f172a', color: '#f8fafc', fontFamily: 'monospace', resize: 'none' }}
          />
        </div>
      </div>

      <button
        onClick={format}
        style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
      >
        格式化
      </button>
    </div>
  );
}
