import React, { useState } from 'react';

export default function UserAgentParser() {
  const [ua, setUa] = useState(navigator.userAgent);
  const [parsed, setParsed] = useState(null);

  const parse = () => {
    const result = {
      browser: 'Unknown',
      os: 'Unknown',
      device: 'Desktop',
      mobile: /Mobile|Android|iPhone|iPad/.test(ua)
    };

    if (/Chrome/.test(ua)) result.browser = 'Chrome';
    else if (/Firefox/.test(ua)) result.browser = 'Firefox';
    else if (/Safari/.test(ua)) result.browser = 'Safari';
    else if (/Edge/.test(ua)) result.browser = 'Edge';

    if (/Windows/.test(ua)) result.os = 'Windows';
    else if (/Mac/.test(ua)) result.os = 'macOS';
    else if (/Linux/.test(ua)) result.os = 'Linux';
    else if (/Android/.test(ua)) result.os = 'Android';
    else if (/iOS|iPhone|iPad/.test(ua)) result.os = 'iOS';

    if (/iPhone/.test(ua)) result.device = 'iPhone';
    else if (/iPad/.test(ua)) result.device = 'iPad';
    else if (/Android/.test(ua)) result.device = 'Android Device';

    setParsed(result);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>UA解析</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>解析User Agent字符串</p>

      <div style={{ marginBottom: '16px' }}>
        <textarea value={ua} onChange={(e) => setUa(e.target.value)} rows={3} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace', fontSize: '12px', resize: 'vertical' }} />
      </div>

      <button onClick={parse} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}>解析</button>

      {parsed && (
        <div style={{ display: 'grid', gap: '12px' }}>
          {Object.entries(parsed).map(([key, value]) => (
            <div key={key} style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#94a3b8' }}>{key}</span>
              <span style={{ color: '#f8fafc', fontWeight: 500 }}>{String(value)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
