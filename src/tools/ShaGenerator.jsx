import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import CryptoJS from 'crypto-js';
import './ToolTemplate.css';

export default function ShaGenerator() {
  const [input, setInput] = useState('');
  const [algorithm, setAlgorithm] = useState('SHA256');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let hash;
    switch(algorithm) {
      case 'SHA1': hash = CryptoJS.SHA1(input); break;
      case 'SHA256': hash = CryptoJS.SHA256(input); break;
      case 'SHA512': hash = CryptoJS.SHA512(input); break;
      default: hash = CryptoJS.SHA256(input);
    }
    setOutput(hash.toString());
  };

  const copyOutput = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">SHA生成器</h1><p className="tool-header-desc">SHA-1/256/512哈希计算</p></div>
      <div className="tool-config">
        <select className="tool-select" value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="SHA1">SHA-1</option>
          <option value="SHA256">SHA-256</option>
          <option value="SHA512">SHA-512</option>
        </select>
      </div>
      <div className="tool-actions">
        <button className="tool-btn primary" onClick={generate}>生成</button>
        <button className="tool-copy-btn" onClick={copyOutput}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制结果'}</button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">输入文本</label><textarea className="tool-textarea" value={input} onChange={(e) => setInput(e.target.value)} placeholder="输入要哈希的文本..." /></div>
        <div className="tool-output-section"><label className="tool-label">SHA结果</label><textarea className="tool-textarea output" value={output} readOnly placeholder="哈希结果..." /></div>
      </div>
    </div>
  );
}
