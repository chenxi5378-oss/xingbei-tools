import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import CryptoJS from 'crypto-js';
import './ToolTemplate.css';

export default function AesDecrypt() {
  const [cipher, setCipher] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const decrypt = () => {
    if (!key) { setOutput('请输入密钥'); return; }
    try {
      const bytes = CryptoJS.AES.decrypt(cipher, key);
      setOutput(bytes.toString(CryptoJS.enc.Utf8) || '解密失败');
    } catch { setOutput('解密失败'); }
  };

  const copyOutput = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">AES解密</h1><p className="tool-header-desc">AES对称解密</p></div>
      <div className="tool-config"><input type="text" className="tool-input" value={key} onChange={(e) => setKey(e.target.value)} placeholder="输入密钥..." /></div>
      <div className="tool-actions">
        <button className="tool-btn primary" onClick={decrypt}>解密</button>
        <button className="tool-copy-btn" onClick={copyOutput}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制明文'}</button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">密文</label><textarea className="tool-textarea" value={cipher} onChange={(e) => setCipher(e.target.value)} placeholder="输入要解密的密文..." /></div>
        <div className="tool-output-section"><label className="tool-label">明文</label><textarea className="tool-textarea output" value={output} readOnly placeholder="解密后的明文..." /></div>
      </div>
    </div>
  );
}
