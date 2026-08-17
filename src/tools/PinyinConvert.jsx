import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function PinyinConvert() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const pinyinMap = {
    '一': 'yi', '二': 'er', '三': 'san', '四': 'si', '五': 'wu', '六': 'liu', '七': 'qi', '八': 'ba', '九': 'jiu', '十': 'shi',
    '百': 'bai', '千': 'qian', '万': 'wan', '亿': 'yi', '零': 'ling', '个': 'ge', '的': 'de', '是': 'shi', '我': 'wo', '你': 'ni',
    '他': 'ta', '她': 'ta', '它': 'ta', '们': 'men', '们': 'men', '在': 'zai', '有': 'you', '和': 'he', '与': 'yu', '或': 'huo'
  };

  const convert = () => {
    let pinyin = '';
    for (const char of text) {
      pinyin += pinyinMap[char] || char;
    }
    setResult(pinyin);
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>拼音转换</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>汉字转拼音（基础版）</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>输入汉字</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="输入汉字..." rows={4} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', resize: 'vertical' }} />
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button onClick={convert} style={{ flex: 1, padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>转换</button>
        {result && (
          <button onClick={copy} style={{ padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', cursor: 'pointer' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        )}
      </div>

      {result && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '16px', color: '#f8fafc' }}>
          {result}
        </div>
      )}
    </div>
  );
}
