import React, { useState } from 'react';

export default function PasswordStrength() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({ score: 0, label: '', color: '' });

  const analyze = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^a-zA-Z0-9]/.test(pwd)) score++;
    
    let label, color;
    if (pwd.length === 0) { label = ''; color = ''; }
    else if (score <= 2) { label = '弱'; color = '#ef4444'; }
    else if (score <= 4) { label = '中等'; color: '#f59e0b'; }
    else if (score <= 5) { label = '强'; color: '#22c55e'; }
    else { label = '非常强'; color: '#3b82f6'; }
    
    setStrength({ score, label, color });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>密码强度检测</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>检测密码强度，分析安全性，提供改进建议</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <input type="text" value={password} onChange={(e) => { setPassword(e.target.value); analyze(e.target.value); }} placeholder="输入要检测的密码" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', fontSize: '16px' }} />
      </div>

      {strength.label && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '14px', color: '#94a3b8' }}>强度评级</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: strength.color }}>{strength.label}</span>
          </div>
          <div style={{ height: '8px', background: '#0f172a', borderRadius: '4px', marginBottom: '16px' }}>
            <div style={{ height: '100%', width: `${(strength.score / 6) * 100}%`, background: strength.color, borderRadius: '4px', transition: 'all 0.3s' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { test: password.length >= 8, text: '至少8个字符' },
              { test: /[a-z]/.test(password), text: '包含小写字母' },
              { test: /[A-Z]/.test(password), text: '包含大写字母' },
              { test: /[0-9]/.test(password), text: '包含数字' },
              { test: /[^a-zA-Z0-9]/.test(password), text: '包含特殊符号' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: item.test ? '#22c55e' : '#64748b' }}>
                <span>{item.test ? '✓' : '○'}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
