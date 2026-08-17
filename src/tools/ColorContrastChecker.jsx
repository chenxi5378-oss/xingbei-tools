import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function ColorContrastChecker() {
  const [fgColor, setFgColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#1e293b');

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const getLuminance = (r, g, b) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const getContrast = () => {
    const fg = hexToRgb(fgColor);
    const bg = hexToRgb(bgColor);
    if (!fg || !bg) return 0;
    const l1 = getLuminance(fg.r, fg.g, fg.b);
    const l2 = getLuminance(bg.r, bg.g, bg.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };

  const ratio = getContrast();
  const aaNormal = ratio >= 4.5;
  const aaLarge = ratio >= 3;
  const aaaNormal = ratio >= 7;

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>颜色对比度检查</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>WCAG标准对比度检测</p>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>前景色</label>
          <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} style={{ width: '60px', height: '40px', border: 'none', borderRadius: '8px' }} />
          <input type="text" value={fgColor} onChange={(e) => setFgColor(e.target.value)} style={{ marginLeft: '8px', width: '80px', padding: '8px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '6px', color: '#f8fafc' }} />
        </div>
        <div>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>背景色</label>
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} style={{ width: '60px', height: '40px', border: 'none', borderRadius: '8px' }} />
          <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} style={{ marginLeft: '8px', width: '80px', padding: '8px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '6px', color: '#f8fafc' }} />
        </div>
      </div>

      <div style={{ padding: '32px', borderRadius: '12px', marginBottom: '24px', background: bgColor, color: fgColor, fontSize: '18px', textAlign: 'center' }}>
        示例文字 - Sample Text
      </div>

      <div style={{ background: '#1e293b', padding: '16px', borderRadius: '12px' }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#f8fafc', marginBottom: '16px' }}>{ratio.toFixed(2)}:1</div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ padding: '4px 12px', borderRadius: '4px', background: aaNormal ? '#22c55e' : '#ef4444', color: 'white', fontSize: '12px' }}>AA 正常文本</span>
          <span style={{ padding: '4px 12px', borderRadius: '4px', background: aaLarge ? '#22c55e' : '#ef4444', color: 'white', fontSize: '12px' }}>AA 大文本</span>
          <span style={{ padding: '4px 12px', borderRadius: '4px', background: aaaNormal ? '#22c55e' : '#ef4444', color: 'white', fontSize: '12px' }}>AAA 正常文本</span>
        </div>
      </div>
    </div>
  );
}
