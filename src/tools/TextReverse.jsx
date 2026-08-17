import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function TextReverse() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const reversed = text.split('').reverse().join('');

  const copy = () => {
    navigator.clipboard.writeText(reversed);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>文本反转</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>反转文字顺序</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>原文</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="输入要反转的文字..." rows={4} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', resize: 'vertical' }} />
      </div>

      {text && (
        <div style={{ marginBottom: '16px' }}>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>反转结果</label>
          <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', color: '#f8fafc', fontSize: '16px' }}>
            {reversed}
          </div>
        </div>
      )}

      {text && (
        <button onClick={copy} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? '已复制' : '复制结果'}
        </button>
      )}
    </div>
  );
}
