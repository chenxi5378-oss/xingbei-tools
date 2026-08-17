import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './ToolTemplate.css';

export default function TextCompare() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');

  const compare = () => {
    if (text1 === text2) {
      setResult('✅ 两段文本完全相同');
    } else {
      const len1 = text1.length;
      const len2 = text2.length;
      setResult(`❌ 文本不同\n文本1长度: ${len1}\n文本2长度: ${len2}`);
    }
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header"><h1 className="tool-header-title">文本对比</h1><p className="tool-header-desc">比较两个文本差异</p></div>
      <div className="tool-actions"><button className="tool-btn primary" onClick={compare}>对比</button></div>
      <div className="tool-io-grid">
        <div className="tool-input-section"><label className="tool-label">文本 1</label><textarea className="tool-textarea" value={text1} onChange={(e) => setText1(e.target.value)} placeholder="输入第一段文本..." /></div>
        <div className="tool-input-section"><label className="tool-label">文本 2</label><textarea className="tool-textarea" value={text2} onChange={(e) => setText2(e.target.value)} placeholder="输入第二段文本..." /></div>
      </div>
      <div className="tool-result-section"><label className="tool-label">对比结果</label><textarea className="tool-textarea output" value={result} readOnly /></div>
    </div>
  );
}
