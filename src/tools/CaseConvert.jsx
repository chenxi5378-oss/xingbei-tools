import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function CaseConvert() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const toUpper = () => setOutput(input.toUpperCase());
  const toLower = () => setOutput(input.toLowerCase());
  const toCapitalize = () => setOutput(input.replace(/\b\w/g, c => c.toUpperCase()));

  const copyOutput = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">大小写转换</h1><p className="tool-header-desc">文本大小写转换</p></div>
      <div className="tool-actions">
        <button className="tool-btn" onClick={toUpper}>大写</button>
        <button className="tool-btn" onClick={toLower}>小写</button>
        <button className="tool-btn" onClick={toCapitalize}>首字母大写</button>
        <button className="tool-copy-btn" onClick={copyOutput}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制'}</button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">输入</label><textarea className="tool-textarea" value={input} onChange={(e) => setInput(e.target.value)} placeholder="输入要转换的文本..." /></div>
        <div className="tool-output-section"><label className="tool-label">结果</label><textarea className="tool-textarea output" value={output} readOnly /></div>
      </div>
    </div>
  );
}
