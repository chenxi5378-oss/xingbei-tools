import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

export default function RandomPicker() {
  const [items, setItems] = useState('');
  const [pickCount, setPickCount] = useState(1);
  const [results, setResults] = useState([]);
  const [copied, setCopied] = useState(false);

  const pick = () => {
    const itemList = items.split('\n').filter(i => i.trim());
    if (itemList.length === 0) return;
    
    const shuffled = [...itemList].sort(() => Math.random() - 0.5);
    setResults(shuffled.slice(0, Math.min(pickCount, shuffled.length)));
  };

  const copyResults = () => {
    navigator.clipboard.writeText(results.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>
          随机选择器
        </h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>
          从列表中随机选择一个或多个选项
        </p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
          选项列表（每行一个）
        </label>
        <textarea
          value={items}
          onChange={(e) => setItems(e.target.value)}
          placeholder="例如：\n吃火锅\n吃烧烤\n吃日料\n吃西餐"
          rows={6}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            background: '#1e293b',
            color: '#f8fafc',
            fontSize: '14px',
            resize: 'vertical',
          }}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
          选择数量
        </label>
        <input
          type="number"
          min="1"
          max="100"
          value={pickCount}
          onChange={(e) => setPickCount(parseInt(e.target.value) || 1)}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            background: '#1e293b',
            color: '#f8fafc',
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button onClick={pick} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
          <RefreshCw size={16} /> 随机选择
        </button>
        {results.length > 0 && (
          <button onClick={copyResults} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '8px', fontSize: '14px', cursor: 'pointer' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? '已复制' : '复制结果'}
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#f8fafc', marginBottom: '16px' }}>
            选中结果
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {results.map((item, index) => (
              <div key={index} style={{ padding: '12px 16px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '8px', fontSize: '16px', color: '#f8fafc' }}>
                <span style={{ color: '#3b82f6', fontWeight: 600, marginRight: '8px' }}>#{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
