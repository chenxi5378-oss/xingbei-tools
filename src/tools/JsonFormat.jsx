import React, { useState } from 'react';
import { Copy, Check, FileJson, Trash2 } from 'lucide-react';
import './ToolTemplate.css';

export default function JsonFormat() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      if (!input.trim()) {
        setError('请输入JSON数据');
        setOutput('');
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError(`JSON解析错误: ${e.message}`);
      setOutput('');
    }
  };

  const minifyJson = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError(`JSON解析错误: ${e.message}`);
    }
  };

  const validateJson = () => {
    try {
      if (!input.trim()) {
        setError('请输入JSON数据');
        return;
      }
      JSON.parse(input);
      setError('');
      setOutput('✅ JSON格式有效');
    } catch (e) {
      setError(`❌ JSON格式无效: ${e.message}`);
      setOutput('');
    }
  };

  const copyOutput = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header">
        <FileJson size={28} className="tool-header-icon" />
        <div>
          <h1 className="tool-header-title">JSON格式化</h1>
          <p className="tool-header-desc">美化、压缩、验证JSON数据</p>
        </div>
      </div>

      <div className="tool-actions">
        <button className="tool-btn primary" onClick={formatJson}>格式化</button>
        <button className="tool-btn" onClick={minifyJson}>压缩</button>
        <button className="tool-btn" onClick={validateJson}>验证</button>
        <button className="tool-btn danger" onClick={clearAll}>
          <Trash2 size={16} /> 清空
        </button>
      </div>

      <div className="tool-io-grid">
        <div className="tool-input-section">
          <label className="tool-label">输入</label>
          <textarea
            className="tool-textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"name": "示例", "value": 123}'
            spellCheck={false}
          />
        </div>

        <div className="tool-output-section">
          <div className="tool-output-header">
            <label className="tool-label">输出</label>
            <button className="tool-copy-btn" onClick={copyOutput}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? '已复制' : '复制'}
            </button>
          </div>
          {error && <div className="tool-error">{error}</div>}
          <textarea
            className="tool-textarea output"
            value={output}
            readOnly
            placeholder="结果将显示在这里..."
          />
        </div>
      </div>
    </div>
  );
}
