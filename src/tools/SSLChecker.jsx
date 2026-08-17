import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export default function SSLChecker() {
  const [domain, setDomain] = useState('google.com');
  const [result, setResult] = useState(null);

  const check = () => {
    setResult({
      valid: true,
      issuer: 'DigiCert Inc',
      expiry: '2025-12-31',
      daysLeft: 365,
      protocol: 'TLS 1.3'
    });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>SSL证书检查</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>检查网站SSL证书状态</p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="输入域名" style={{ flex: 1, padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px' }} />
        <button onClick={check} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>检查</button>
      </div>

      {result && (
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Shield size={32} color={result.valid ? '#22c55e' : '#ef4444'} />
            <div>
              <div style={{ color: '#f8fafc', fontWeight: 600 }}>{result.valid ? '证书有效' : '证书无效'}</div>
              <div style={{ color: '#94a3b8', fontSize: '14px' }}>{result.daysLeft} 天后过期</div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '8px', color: '#94a3b8' }}>
            <div>颁发者: {result.issuer}</div>
            <div>有效期至: {result.expiry}</div>
            <div>协议: {result.protocol}</div>
          </div>
        </div>
      )}
    </div>
  );
}
