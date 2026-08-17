import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function Base64Encode() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
    } catch (e) {
      setOutput('编码失败: ' + e.message);
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
        <div>
          <h1 className="tool-header-title">Base64编码</h1>
          <p className="tool-header-desc">文本转Base64编码</p>
        </div>
      </div>

      <div className="tool-actions">
        <button className="tool-btn primary" onClick={encode}>编码</button>
        <button className="tool-copy-btn" onClick={copyOutput}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? '已复制' : '复制结果'}
        </button>
      </div>

      <div className="tool-io-grid">
        <div className="tool-input-section">
          <label className="tool-label">输入文本</label>
          <textarea className="tool-textarea" value={input} onChange={(e) => setInput(e.target.value)} placeholder="输入要编码的文本..." />
        </div>
        <div className="tool-output-section">
          <label className="tool-label">Base64结果</label>
          <textarea className="tool-textarea output" value={output} readOnly placeholder="编码结果..." />
        </div>
      </div>
    </div>
  );
}
