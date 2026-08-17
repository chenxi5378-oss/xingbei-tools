import React, { useState } from 'react';
import { Search, Globe } from 'lucide-react';

export default function IPInfo() {
  const [ip, setIp] = useState('');
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = async () => {
    setLoading(true);
    try {
      const target = ip || '';
      const res = await fetch(`https://ipapi.co/${target}/json/`);
      const data = await res.json();
      setInfo(data);
    } catch (e) {
      setInfo({ error: e.message });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>IP信息查询</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>查询IP地址详细信息</p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="输入IP地址（留空查本机）" style={{ flex: 1, padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
        <button onClick={query} disabled={loading} style={{ padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          <Search size={16} />
        </button>
      </div>

      {info && !info.error && (
        <div style={{ display: 'grid', gap: '12px' }}>
          {[
            { label: 'IP地址', value: info.ip },
            { label: '城市', value: info.city },
            { label: '地区', value: info.region },
            { label: '国家', value: info.country_name },
            { label: '时区', value: info.timezone },
            { label: 'ISP', value: info.org },
            { label: 'ASN', value: info.asn }
          ].map(({ label, value }) => value && (
            <div key={label} style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#94a3b8' }}>{label}</span>
              <span style={{ color: '#f8fafc', fontFamily: 'monospace' }}>{value}</span>
            </div>
          ))}
        </div>
      )}

      {info?.error && <div style={{ color: '#ef4444' }}>{info.error}</div>}
    </div>
  );
}
