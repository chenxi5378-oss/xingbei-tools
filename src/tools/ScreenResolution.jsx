import React, { useState, useEffect } from 'react';

export default function ScreenResolution() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo({
      width: window.screen.width,
      height: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
      colorDepth: window.screen.colorDepth,
      pixelDepth: window.screen.pixelDepth,
      dpr: window.devicePixelRatio,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    });
  }, []);

  const items = [
    { label: '屏幕分辨率', value: `${info.width} × ${info.height}` },
    { label: '可用分辨率', value: `${info.availWidth} × ${info.availHeight}` },
    { label: '窗口大小', value: `${info.innerWidth} × ${info.innerHeight}` },
    { label: '设备像素比', value: info.dpr },
    { label: '颜色深度', value: `${info.colorDepth} bit` },
    { label: '像素深度', value: `${info.pixelDepth} bit` }
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>屏幕分辨率</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>检测设备屏幕信息</p>

      <div style={{ display: 'grid', gap: '12px' }}>
        {items.map(({ label, value }) => (
          <div key={label} style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#94a3b8' }}>{label}</span>
            <span style={{ color: '#f8fafc', fontWeight: 500, fontFamily: 'monospace' }}>{value || '-'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
