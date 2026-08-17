import React, { useState } from 'react';

export default function JSONToCSV() {
  const [json, setJson] = useState('');
  const [csv, setCsv] = useState('');

  const convert = () => {
    try {
      const data = JSON.parse(json);
      if (!Array.isArray(data) || data.length === 0) { setCsv('需要JSON数组'); return; }
      const headers = Object.keys(data[0]);
      const rows = data.map(obj => headers.map(h => JSON.stringify(obj[h] || '')).join(','));
      setCsv([headers.join(','), ...rows].join('\n'));
    } catch (e) {
      setCsv('转换错误: ' + e.message);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>JSON转CSV</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>JSON数据转CSV格式</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>JSON输入</label>
        <textarea value={json} onChange={(e) => setJson(e.target.value)} placeholder="[{&quot;name&quot;:&quot;张三&quot;,&quot;age&quot;:25}]" rows={8} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace', resize: 'vertical' }} />
      </div>

      <button onClick={convert} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>转换</button>

      {csv && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc', whiteSpace: 'pre-wrap' }}>
          {csv}
        </div>
      )}
    </div>
  );
}
