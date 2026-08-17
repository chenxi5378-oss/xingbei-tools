import React, { useState } from 'react';

export default function CSVToJSON() {
  const [csv, setCsv] = useState('');
  const [json, setJson] = useState('');

  const convert = () => {
    try {
      const lines = csv.trim().split('\n');
      if (lines.length < 2) { setJson('CSV需要至少2行（表头+数据）'); return; }
      const headers = lines[0].split(',').map(h => h.trim());
      const data = [];
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const obj = {};
        headers.forEach((h, idx) => { obj[h] = values[idx] || ''; });
        data.push(obj);
      }
      setJson(JSON.stringify(data, null, 2));
    } catch (e) {
      setJson('转换错误: ' + e.message);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>CSV转JSON</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>CSV数据转JSON格式</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>CSV输入</label>
        <textarea value={csv} onChange={(e) => setCsv(e.target.value)} placeholder="name,age,city&#10;张三,25,北京&#10;李四,30,上海" rows={8} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace', resize: 'vertical' }} />
      </div>

      <button onClick={convert} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>转换</button>

      {json && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc', whiteSpace: 'pre-wrap' }}>
          {json}
        </div>
      )}
    </div>
  );
}
