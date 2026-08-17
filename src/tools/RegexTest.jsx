import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function RegexTest() {
  const [pattern, setPattern] = useState('[a-z]+');
  const [flags, setFlags] = useState('g');
  const [text, setText] = useState('Hello World');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const matches = text.match(regex);
      setResult(matches ? matches.join('\n') : '无匹配');
      setError('');
    } catch (e) {
      setError(e.message);
      setResult('');
    }
  };

  const replace = () => {
    try {
      const regex = new RegExp(pattern, flags);
      setResult(text.replace(regex, '[匹配]'));
      setError('');
    } catch (e) {
      setError(e.message);
    }
  };

  const copyResult = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">正则表达式测试</h1><p className="tool-header-desc">在线测试正则表达式</p></div>
      <div className="tool-config">
        <input className="tool-input" value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="正则表达式" />
        <input className="tool-input small" value={flags} onChange={(e) => setFlags(e.target.value)} placeholder="标志" />
      </div>
      <div className="tool-actions">
        <button className="tool-btn primary" onClick={testRegex}>匹配</button>
        <button className="tool-btn" onClick={replace}>替换</button>
        <button className="tool-copy-btn" onClick={copyResult}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制'}</button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">测试文本</label><textarea className="tool-textarea" value={text} onChange={(e) => setText(e.target.value)} /></div>
        <div className="tool-output-section">
          <label className="tool-label">结果</label>
          {error && <div className="tool-error">{error}</div>}
          <textarea className="tool-textarea output" value={result} readOnly />
        </div>
      </div>
    </div>
  );
}
