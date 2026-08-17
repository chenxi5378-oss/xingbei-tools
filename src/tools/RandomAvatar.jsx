import React, { useState } from 'react';
import { RefreshCw, Download } from 'lucide-react';

export default function RandomAvatar() {
  const [seed, setSeed] = useState(Date.now());
  const [size, setSize] = useState(200);
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;

  const generate = () => setSeed(Date.now());

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>随机头像生成</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>生成随机卡通头像</p>

      <div style={{ background: '#1e293b', borderRadius: '12px', padding: '32px', textAlign: 'center', marginBottom: '16px' }}>
        <img src={avatarUrl} alt="avatar" style={{ width: size, height: size, borderRadius: '50%', background: '#334155' }} />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>尺寸: {size}px</label>
        <input type="range" min="100" max="400" value={size} onChange={(e) => setSize(Number(e.target.value))} style={{ width: '100%' }} />
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={generate} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          <RefreshCw size={16} /> 重新生成
        </button>
        <a href={avatarUrl} download="avatar.svg" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: '#22c55e', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
          <Download size={16} /> 下载
        </a>
      </div>
    </div>
  );
}
