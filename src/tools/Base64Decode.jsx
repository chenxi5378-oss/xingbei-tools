import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function Base64Decode() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const decode = () => {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
    } catch (e) {
      setOutput('解码失败: 无效的Base64字符串');
    }
  };

  const copyOutput = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header">
        <h1 className="tool-header-title">Base64解码</h1>
        <p className="tool-header-desc">Base64数据解码还原</p>
      </div>
      <div className="tool-actions">
        <button className="tool-btn primary" onClick={decode}>解码</button>
        <button className="tool-copy-btn" onClick={copyOutput}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? '已复制' : '复制结果'}
        </button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section">
          <label className="tool-label">Base64输入</label>
          <textarea className="tool-textarea" value={input} onChange={(e) => setInput(e.target.value)} placeholder="输入Base64字符串..." />
        </div>
        <div className="tool-output-section">
          <label className="tool-label">解码结果</label>
          <textarea className="tool-textarea output" value={output} readOnly placeholder="解码结果..." />
        </div>
      </div>
    </div>
  );
}
