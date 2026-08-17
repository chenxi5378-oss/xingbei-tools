import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './ToolTemplate.css';

export default function DnsLookup() {
  const [domain, setDomain] = useState('');
  const [type, setType] = useState('A');
  const [result, setResult] = useState('');

  const lookup = () => {
    setResult(`${type}记录查询结果:\n${domain || 'example.com'} -> 192.168.1.1 (示例)`);
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">DNS查询</h1><p className="tool-header-desc">查询DNS记录</p></div>
      <div className="tool-config">
        <input type="text" className="tool-input" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="输入域名..." />
        <select className="tool-select" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="A">A</option>
          <option value="AAAA">AAAA</option>
          <option value="CNAME">CNAME</option>
          <option value="MX">MX</option>
          <option value="TXT">TXT</option>
          <option value="NS">NS</option>
        </select>
      </div>
      <div className="tool-actions"><button className="tool-btn primary" onClick={lookup}>查询</button></div>
      <div className="tool-result-section"><label className="tool-label">DNS记录</label><textarea className="tool-textarea output" value={result} readOnly /></div>
    </div>
  );
}
