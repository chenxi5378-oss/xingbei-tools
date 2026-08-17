import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './ToolTemplate.css';

export default function WhoisLookup() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const lookup = () => {
    setLoading(true);
    setTimeout(() => {
      setResult(`域名: ${domain || 'example.com'}\n注册商: 示例注册商\n注册日期: 2020-01-01\n到期日期: 2025-01-01\nDNS服务器: ns1.example.com`);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">WHOIS查询</h1><p className="tool-header-desc">查询域名WHOIS信息</p></div>
      <div className="tool-config"><input type="text" className="tool-input" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="输入域名..." /></div>
      <div className="tool-actions"><button className="tool-btn primary" onClick={lookup} disabled={loading}>{loading ? '查询中...' : '查询'}</button></div>
      <div className="tool-result-section"><label className="tool-label">WHOIS信息</label><textarea className="tool-textarea output" value={result} readOnly /></div>
    </div>
  );
}
