import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function TimestampConvert() {
  const [timestamp, setTimestamp] = useState(Date.now().toString().slice(0, 10));
  const [dateStr, setDateStr] = useState(new Date().toISOString().slice(0, 19).replace('T', ' '));
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const tsToDate = () => {
    const ts = parseInt(timestamp);
    if (!ts) { setResult('无效的时间戳'); return; }
    const date = new Date(ts * 1000);
    setResult(date.toLocaleString('zh-CN'));
  };

  const dateToTs = () => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) { setResult('无效的日期'); return; }
    setResult(Math.floor(date.getTime() / 1000).toString());
  };

  const copyResult = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">时间戳转换</h1><p className="tool-header-desc">Unix时间戳与日期互转</p></div>
      <div className="tool-io-grid">
        <div className="tool-input-section">
          <label className="tool-label">Unix时间戳</label>
          <input type="text" className="tool-input" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} placeholder="秒级时间戳" />
          <button className="tool-btn primary" onClick={tsToDate}>→ 转日期</button>
        </div>
        <div className="tool-input-section">
          <label className="tool-label">日期时间</label>
          <input type="text" className="tool-input" value={dateStr} onChange={(e) => setDateStr(e.target.value)} placeholder="YYYY-MM-DD HH:mm:ss" />
          <button className="tool-btn primary" onClick={dateToTs}>→ 转时间戳</button>
        </div>
      </div>
      <div className="tool-result-section">
        <label className="tool-label">结果</label>
        <div className="tool-result">
          <span>{result}</span>
          {result && <button className="tool-copy-btn" onClick={copyResult}>{copied ? <Check size={16} /> : <Copy size={16} />}</button>}
        </div>
      </div>
    </div>
  );
}
