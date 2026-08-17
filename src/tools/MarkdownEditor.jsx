import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function MarkdownEditor() {
  const [input, setInput] = useState('# 标题\n\n**粗体文本**\n\n- 列表项1\n- 列表项2');
  const [copied, setCopied] = useState(false);

  const copyHtml = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">Markdown编辑器</h1><p className="tool-header-desc">实时预览编辑器</p></div>
      <div className="tool-actions">
        <button className="tool-copy-btn" onClick={copyHtml}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制' : '复制源码'}</button>
      </div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">Markdown源码</label><textarea className="tool-textarea" value={input} onChange={(e) => setInput(e.target.value)} placeholder="输入Markdown..." /></div>
        <div className="tool-output-section"><label className="tool-label">预览</label><div className="tool-preview markdown-body"><div dangerouslySetInnerHTML={{ __html: input.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/# (.*)/g, '<h1>$1</h1>').replace(/## (.*)/g, '<h2>$1</h2>').replace(/- (.*)/g, '<li>$1</li>').replace(/\n/g, '<br/>') }} /></div></div>
      </div>
    </div>
  );
}
