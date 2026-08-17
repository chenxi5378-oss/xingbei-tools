import React, { useState } from 'react';

export default function ColorPalette() {
  const [colors, setColors] = useState([]);

  const generate = () => {
    const palette = [];
    for (let i = 0; i < 5; i++) {
      const hue = Math.floor(Math.random() * 360);
      const sat = 60 + Math.floor(Math.random() * 40);
      const light = 40 + Math.floor(Math.random() * 40);
      palette.push(`hsl(${hue}, ${sat}%, ${light}%)`);
    }
    setColors(palette);
  };

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>调色板生成器</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>生成配色方案</p>

      <button onClick={generate} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}>生成配色</button>

      {colors.length > 0 && (
        <div style={{ display: 'flex', gap: '8px', height: '120px', borderRadius: '12px', overflow: 'hidden' }}>
          {colors.map((color, i) => (
            <div key={i} onClick={() => copyColor(color)} style={{ flex: 1, background: color, cursor: 'pointer', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>{color}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
