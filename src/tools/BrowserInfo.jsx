import React, { useState, useEffect } from 'react';

export default function BrowserInfo() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const ua = navigator.userAgent;
    setInfo({
      userAgent: ua,
      language: navigator.language,
      languages: navigator.languages?.join(', '),
      platform: navigator.platform,
      onLine: navigator.onLine,
      cookieEnabled: navigator.cookieEnabled,
      pdfViewerEnabled: navigator.pdfViewerEnabled,
      hardwareConcurrency: navigator.hardwareConcurrency,
      deviceMemory: navigator.deviceMemory,
      maxTouchPoints: navigator.maxTouchPoints,
      vendor: navigator.vendor
    });
  }, []);

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>浏览器信息</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>检测浏览器和系统信息</p>

      <div style={{ display: 'grid', gap: '12px' }}>
        {Object.entries(info).map(([key, value]) => (
          <div key={key} style={{ background: '#1e293b', padding: '16px', borderRadius: '8px' }}>
            <div style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '4px' }}>{key}</div>
            <div style={{ color: '#f8fafc', fontFamily: 'monospace', fontSize: '14px', wordBreak: 'break-all' }}>{String(value)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
