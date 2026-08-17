import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function CronParser() {
  const [cron, setCron] = useState('0 0 * * *');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const parse = () => {
    const parts = cron.split(' ');
    if (parts.length !== 5) { setResult('无效的Cron表达式'); return; }
    const [minute, hour, day, month, weekday] = parts;
    setResult(`每分钟: ${minute}\n每小时: ${hour}\n每日: ${day}\n每月: ${month}\n每周: ${weekday}`);
  };

  const copyOutput = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">Cron解析器</h1><p className="tool-header-desc">解析Cron表达式</p></div>
      <div className="tool-config"><input type="text" className="tool-input" value={cron} onChange={(e) => setCron(e.target.value)} placeholder="分 时 日 月 周" /></div>
      <div className="tool-actions">
        <button className="tool-btn primary" onClick={parse}>解析</button>
        <button className="tool-copy-btn" onClick={copyOutput}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制'}</button>
      </div>
      <div className="tool-result-section"><label className="tool-label">解析结果</label><textarea className="tool-textarea output" value={result} readOnly /></div>
    </div>
  );
}
