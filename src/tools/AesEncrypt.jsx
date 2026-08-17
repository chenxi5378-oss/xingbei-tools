import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import CryptoJS from 'crypto-js';
import './ToolTemplate.css';

export default function AesEncrypt() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encrypt = () => {
    if (!key) { setOutput('请输入密钥'); return; }
    setOutput(CryptoJS.AES.encrypt(text, key).toString());
  };

  const copyOutput = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">AES加密</h1><p className="tool-header-desc">AES对称加密</p></div>
      <div className="tool-config"><input type="text" className="tool-input" value={key} onChange={(e) => setKey(e.target.value)} placeholder="输入密钥..." /></div>
      <div className="tool-actions">
        <button className="tool-btn primary" onClick={encrypt}>加密</button>
        <button className="tool-copy-btn" onClick={copyOutput}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制密文'}</button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">明文</label><textarea className="tool-textarea" value={text} onChange={(e) => setText(e.target.value)} placeholder="输入要加密的文本..." /></div>
        <div className="tool-output-section"><label className="tool-label">密文</label><textarea className="tool-textarea output" value={output} readOnly placeholder="加密后的密文..." /></div>
      </div>
    </div>
  );
}
