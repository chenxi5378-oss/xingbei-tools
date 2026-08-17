import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function PercentageCalc() {
  const [mode, setMode] = useState('percent');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    const v1 = parseFloat(value1);
    const v2 = parseFloat(value2);
    if (isNaN(v1) || isNaN(v2)) { setResult('请输入有效数字'); return; }
    
    let res;
    switch(mode) {
      case 'percent': res = (v1 / v2 * 100).toFixed(2) + '%'; break;
      case 'percentOf': res = (v1 * v2 / 100).toFixed(2); break;
      case 'increase': res = (v1 * (1 + v2 / 100)).toFixed(2); break;
      case 'decrease': res = (v1 * (1 - v2 / 100)).toFixed(2); break;
      case 'change': res = ((v2 - v1) / v1 * 100).toFixed(2) + '%'; break;
      default: res = '';
    }
    setResult(res);
  };

  const copyResult = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const modes = [
    { id: 'percent', name: '占比计算', label1: '部分值', label2: '总值', desc: '计算部分占总值的百分比' },
    { id: 'percentOf', name: '求百分比值', label1: '总值', label2: '百分比', desc: '计算某值的百分之几是多少' },
    { id: 'increase', name: '增加百分比', label1: '原值', label2: '增加百分比', desc: '计算增加后的值' },
    { id: 'decrease', name: '减少百分比', label1: '原值', label2: '减少百分比', desc: '计算减少后的值' },
    { id: 'change', name: '变化百分比', label1: '原值', label2: '新值', desc: '计算变化幅度' },
  ];

  const currentMode = modes.find(m => m.id === mode);

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>百分比计算器</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>计算百分比变化、百分比增减、占比等，支持正逆向计算</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>计算类型</label>
        <select value={mode} onChange={(e) => { setMode(e.target.value); setResult(''); }} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }}>
          {modes.map(m => <option key={m.id} value={m.id}>{m.name} - {m.desc}</option>)}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>{currentMode.label1}</label>
          <input type="number" value={value1} onChange={(e) => setValue1(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>{currentMode.label2}</label>
          <input type="number" value={value2} onChange={(e) => setValue2(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
        </div>
      </div>

      <button onClick={calculate} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', marginBottom: '16px' }}>计算</button>

      {result && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '20px', border: '1px solid rgba(148, 163, 184, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '14px', color: '#94a3b8' }}>结果</span>
            <div style={{ fontSize: '28px', fontWeight: 600, color: '#f8fafc' }}>{result}</div>
          </div>
          <button onClick={copyResult} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'transparent', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '6px', color: '#94a3b8', cursor: 'pointer' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? '已复制' : '复制'}
          </button>
        </div>
      )}
    </div>
  );
}
