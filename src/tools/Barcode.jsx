import React, { useState } from 'react';

export default function Barcode() {
  const [text, setText] = useState('');
  const [barcode, setBarcode] = useState('');

  const generate = () => {
    if (!text) return;
    setBarcode(`https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(text)}&code=Code128`);
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '16px' }}>条形码生成器</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="输入内容" style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', background: '#1e293b', color: '#f8fafc' }} />
      <button onClick={generate} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', borderRadius: '8px' }}>生成条形码</button>
      {barcode && <img src={barcode} alt="Barcode" style={{ marginTop: '16px', maxWidth: '100%' }} />}
    </div>
  );
}
