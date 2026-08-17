import React, { useState } from 'react';
import yaml from 'js-yaml';

export default function JSONToYAML() {
  const [json, setJson] = useState('');
  const [yamlText, setYamlText] = useState('');

  const convert = () => {
    try {
      const data = JSON.parse(json);
      setYamlText(yaml.dump(data));
    } catch (e) {
      setYamlText('转换错误: ' + e.message);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>JSON转YAML</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>JSON转YAML格式</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>JSON输入</label>
        <textarea value={json} onChange={(e) => setJson(e.target.value)} placeholder='{&quot;name&quot;: &quot;张三&quot;}' rows={8} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace', resize: 'vertical' }} />
      </div>

      <button onClick={convert} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>转换</button>

      {yamlText && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc', whiteSpace: 'pre-wrap' }}>
          {yamlText}
        </div>
      )}
    </div>
  );
}
