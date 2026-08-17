import React, { useState } from 'react';
import { Copy, Check, Search } from 'lucide-react';
import './ToolTemplate.css';

export default function IpLookup() {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const lookup = async () => {
    setLoading(true);
    setTimeout(() => {
      setResult(`IP地址: ${ip || '127.0.0.1'}\n国家: 本地查询\n地区: -\n城市: -\nISP: -`);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">IP信息查询</h1><p className="tool-header-desc">查询IP地址信息</p></div>
      <div className="tool-config"><input type="text" className="tool-input" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="输入IP地址..." /></div>
      <div className="tool-actions"><button className="tool-btn primary" onClick={lookup} disabled={loading}>{loading ? '查询中...' : '查询'}</button></div>
      <div className="tool-result-section"><label className="tool-label">查询结果</label><textarea className="tool-textarea output" value={result} readOnly placeholder="点击查询获取IP信息..." /></div>
    </div>
  );
}
