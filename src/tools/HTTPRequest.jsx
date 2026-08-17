import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function HTTPRequest() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    setLoading(true);
    try {
      const start = performance.now();
      const response = await fetch(url, {
        method,
        headers: headers ? JSON.parse(headers) : {},
        body: method !== 'GET' && body ? body : undefined
      });
      const end = performance.now();
      const text = await response.text();
      setResult(JSON.stringify({
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: text,
        time: Math.round(end - start) + 'ms'
      }, null, 2));
    } catch (e) {
      setResult('Error: ' + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>HTTP请求测试</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>发送HTTP请求并查看响应</p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <select value={method} onChange={(e) => setMethod(e.target.value)} style={{ padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px' }}>
          {['GET','POST','PUT','DELETE','PATCH'].map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://api.example.com/data" style={{ flex: 1, padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px' }} />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>Headers (JSON)</label>
        <textarea value={headers} onChange={(e) => setHeaders(e.target.value)} placeholder='{"Authorization":"Bearer token"}' rows={3} style={{ width: '100%', padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', fontFamily: 'monospace', resize: 'vertical' }} />
      </div>

      {method !== 'GET' && (
        <div style={{ marginBottom: '16px' }}>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>Body</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="请求体..." rows={4} style={{ width: '100%', padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', fontFamily: 'monospace', resize: 'vertical' }} />
        </div>
      )}

      <button onClick={send} disabled={loading} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>
        {loading ? '发送中...' : '发送请求'}
      </button>

      {result && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc', whiteSpace: 'pre-wrap', overflow: 'auto', maxHeight: '400px' }}>
          {result}
        </div>
      )}
    </div>
  );
}
