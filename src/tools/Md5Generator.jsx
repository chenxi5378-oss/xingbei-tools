import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import CryptoJS from 'crypto-js';
import './ToolTemplate.css';

export default function Md5Generator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => setOutput(CryptoJS.MD5(input).toString());
  const copyOutput = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">MD5生成器</h1><p className="tool-header-desc">生成MD5哈希值</p></div>
      <div className="tool-actions">
        <button className="tool-btn primary" onClick={generate}>生成</button>
        <button className="tool-copy-btn" onClick={copyOutput}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制结果'}</button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">输入文本</label><textarea className="tool-textarea" value={input} onChange={(e) => setInput(e.target.value)} placeholder="输入要哈希的文本..." /></div>
        <div className="tool-output-section"><label className="tool-label">MD5结果</label><textarea className="tool-textarea output" value={output} readOnly placeholder="32位MD5哈希值..." /></div>
      </div>
    </div>
  );
}
