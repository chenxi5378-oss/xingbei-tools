import React, { useState } from 'react';

export default function ColorGradient() {
  const [color1, setColor1] = useState('#3b82f6');
  const [color2, setColor2] = useState('#8b5cf6');
  const [angle, setAngle] = useState(135);

  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>CSS渐变生成器</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>生成CSS渐变代码</p>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>颜色1</label>
          <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} style={{ width: '60px', height: '40px', border: 'none', borderRadius: '8px', cursor: 'pointer' }} />
        </div>
        <div>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>颜色2</label>
          <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} style={{ width: '60px', height: '40px', border: 'none', borderRadius: '8px', cursor: 'pointer' }} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>角度: {angle}°</label>
          <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>

      <div style={{ height: '120px', borderRadius: '12px', marginBottom: '16px', background: gradient }} />

      <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#f8fafc' }}>
        background: {gradient};
      </div>
    </div>
  );
}
