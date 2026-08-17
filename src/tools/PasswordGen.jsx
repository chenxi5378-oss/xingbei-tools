import React, { useState } from 'react';

export default function PasswordGen() {
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generate = () => {
    let chars = '';
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '16px' }}>密码生成器</h1>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8' }}>长度: {length}</label>
        <input type="range" min="8" max="64" value={length} onChange={(e) => setLength(parseInt(e.target.value))} style={{ width: '100%' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <label style={{ color: '#f8fafc' }}><input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} /> 大写字母</label>
        <label style={{ color: '#f8fafc' }}><input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} /> 小写字母</label>
        <label style={{ color: '#f8fafc' }}><input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} /> 数字</label>
        <label style={{ color: '#f8fafc' }}><input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} /> 特殊符号</label>
      </div>

      <button onClick={generate} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>生成密码</button>

      {password && (
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', wordBreak: 'break-all', fontFamily: 'monospace', color: '#f8fafc' }}>
          {password}
        </div>
      )}
    </div>
  );
}
