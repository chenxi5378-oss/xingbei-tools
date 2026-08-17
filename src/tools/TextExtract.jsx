import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function TextExtract() {
  const [text, setText] = useState('');
  const [type, setType] = useState('email');
  const [results, setResults] = useState([]);
  const [copied, setCopied] = useState(false);

  const patterns = {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    phone: /1[3-9]\d{9}/g,
    url: /https?:\/\/[^\s]+/g,
    ipv4: /\b(?:25[0-5]|2[0-4]\d|[01]?\d\d?)(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)){3}\b/g
  };

  const extract = () => {
    const matches = text.match(patterns[type]) || [];
    setResults([...new Set(matches)]);
  };

  const copyResults = () => {
    navigator.clipboard.writeText(results.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>文本提取</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>提取邮箱、电话、链接等</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>文本内容</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="粘贴包含邮箱、电话、链接等的文本..." rows={6} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', resize: 'vertical' }} />
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        {[
          { key: 'email', label: '邮箱' },
          { key: 'phone', label: '手机号' },
          { key: 'url', label: '链接' },
          { key: 'ipv4', label: 'IP地址' }
        ].map(({ key, label }) => (
          <button key={key} onClick={() => setType(key)} style={{ padding: '8px 16px', background: type === key ? '#3b82f6' : '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '6px', cursor: 'pointer' }}>
            {label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button onClick={extract} style={{ flex: 1, padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>提取</button>
        {results.length > 0 && (
          <button onClick={copyResults} style={{ padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', cursor: 'pointer' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px' }}>
          <div style={{ color: '#94a3b8', marginBottom: '12px' }}>找到 {results.length} 个结果：</div>
          {results.map((r, i) => (
            <div key={i} style={{ padding: '8px', background: '#0f172a', borderRadius: '6px', marginBottom: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc' }}>
              {r}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
