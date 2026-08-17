import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function FaviconGenerator() {
  const [text, setText] = useState('A');
  const [bgColor, setBgColor] = useState('#3b82f6');
  const [fgColor, setFgColor] = useState('#ffffff');
  const [size, setSize] = useState(64);

  const canvasToDataUrl = () => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = fgColor;
    ctx.font = `bold ${size * 0.5}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text.charAt(0).toUpperCase(), size / 2, size / 2);
    return canvas.toDataURL('image/png');;
  };

  const [dataUrl, setDataUrl] = useState('');

  const generate = () => {
    setDataUrl(canvasToDataUrl());
  };

  return (
    <div style={{ padding: '24px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>Favicon生成器</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>生成网站图标</p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>文字</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} maxLength={2} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>背景色</label>
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} style={{ width: '60px', height: '40px', border: 'none', borderRadius: '8px' }} />
        </div>
        <div>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>文字色</label>
          <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} style={{ width: '60px', height: '40px', border: 'none', borderRadius: '8px' }} />
        </div>
      </div>

      <button onClick={generate} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '16px' }}>生成</button>

      {dataUrl && (
        <div style={{ textAlign: 'center' }}>
          <img src={dataUrl} alt="favicon" style={{ width: '64px', height: '64px', borderRadius: '8px', marginBottom: '16px' }} />
          <a href={dataUrl} download="favicon.png" style={{ display: 'inline-block', padding: '12px 24px', background: '#22c55e', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>下载 PNG</a>
        </div>
      )}
    </div>
  );
}
