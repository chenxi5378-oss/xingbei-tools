import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function UrlEncode() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encode = () => setOutput(encodeURIComponent(input));
  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">URL编码</h1><p className="tool-header-desc">对URL进行编码</p></div>
      <div className="tool-actions">
        <button className="tool-btn primary" onClick={encode}>编码</button>
        <button className="tool-copy-btn" onClick={copyOutput}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制结果'}</button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">输入</label><textarea className="tool-textarea" value={input} onChange={(e) => setInput(e.target.value)} placeholder="输入要编码的内容..." /></div>
        <div className="tool-output-section"><label className="tool-label">编码结果</label><textarea className="tool-textarea output" value={output} readOnly placeholder="编码结果..." /></div>
      </div>
    </div>
  );
}
