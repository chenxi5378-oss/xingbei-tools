import React, { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#3b82f6');
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    const rgbVal = hexToRgb(newColor);
    if (rgbVal) setRgb(rgbVal);
  };

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>颜色选择器</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>取色器和颜色格式转换</p>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '12px', background: color, border: '1px solid rgba(148, 163, 184, 0.2)' }} />
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>选择颜色</label>
          <input type="color" value={color} onChange={handleColorChange} style={{ width: '100%', height: '40px', borderRadius: '8px', border: 'none', cursor: 'pointer' }} />
        </div>
      </div>

      <div style={{ background: '#1e293b', borderRadius: '12px', padding: '20px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
        {[
          { label: 'HEX', value: color },
          { label: 'RGB', value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
          { label: 'RGBA', value: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` },
          { label: 'HSL', value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>{item.label}</span>
              <div style={{ fontSize: '16px', color: '#f8fafc', fontFamily: 'monospace' }}>{item.value}</div>
            </div>
            <button onClick={() => copyToClipboard(item.value)} style={{ padding: '6px 12px', background: 'transparent', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '6px', color: '#94a3b8', cursor: 'pointer', fontSize: '12px' }}>复制</button>
          </div>
        ))}
      </div>
    </div>
  );
}
