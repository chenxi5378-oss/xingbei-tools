import React, { useState } from 'react';

const traditionalMap = {
  '简': '簡', '体': '體', '个': '個', '么': '麼', '了': '瞭', '于': '於', '从': '從', '以': '以', '伟': '偉', '来': '來',
  '国': '國', '图': '圖', '圆': '圓', '地': '地', '场': '場', '块': '塊', '坛': '壇', '坏': '壊', '够': '夠', '头': '頭',
  '夹': '夾', '夸': '誇', '夺': '奪', '奋': '奮', '奥': '奧', '奸': '姦', '妆': '妝', '妇': '婦', '妈': '媽', '妖': '妖',
  '姜': '薑', '字': '字', '学': '學', '宁': '寧', '宝': '寳', '实': '實', '宠': '寵', '家': '傢', '宽': '寬', '对': '對',
  '寻': '尋', '导': '導', '层': '層', '尽': '盡', '岁': '歲', '岛': '島', '帅': '帥', '师': '師', '带': '帶', '干': '幹',
  '并': '並', '应': '應', '广': '廣', '开': '開', '异': '異', '张': '張', '弯': '彎', '强': '強', '当': '當', '录': '錄'
};

const simplifiedMap = Object.fromEntries(Object.entries(traditionalMap).map(([k, v]) => [v, k]));

export default function ChineseConvert() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('s2t');

  const convert = () => {
    const map = mode === 's2t' ? traditionalMap : simplifiedMap;
    let res = '';
    for (const char of text) {
      res += map[char] || char;
    }
    setResult(res);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>简繁转换</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>简体字与繁体字互转</p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <button onClick={() => setMode('s2t')} style={{ flex: 1, padding: '8px', background: mode === 's2t' ? '#3b82f6' : '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '6px', cursor: 'pointer' }}>简体 → 繁体</button>
        <button onClick={() => setMode('t2s')} style={{ flex: 1, padding: '8px', background: mode === 't2s' ? '#3b82f6' : '#1e293b', color: '#f8fafc', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '6px', cursor: 'pointer' }}>繁体 → 简体</button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="输入文字..." rows={4} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc', resize: 'vertical' }} />
      </div>

      <button onClick={convert} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>转换</button>

      {result && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', color: '#f8fafc' }}>
          {result}
        </div>
      )}
    </div>
  );
}
