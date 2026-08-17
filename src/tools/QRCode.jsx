import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

export default function QRCode() {
  const [text, setText] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!text) return;
    const encoded = encodeURIComponent(text);
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}`);
  };

  const copyResult = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>二维码生成器</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>生成二维码</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>内容</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="输入要生成二维码的内容，如网址、文本等" rows={4} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', resize: 'vertical' }} />
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button onClick={generate} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
          <RefreshCw size={16} /> 生成二维码
        </button>
        {text && (
          <button onClick={copyResult} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '8px', cursor: 'pointer' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        )}
      </div>

      {qrUrl && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)', textAlign: 'center' }}>
          <img src={qrUrl} alt="QR Code" style={{ width: '200px', height: '200px', borderRadius: '8px', background: 'white', padding: '8px' }} />
          <div style={{ marginTop: '16px', fontSize: '12px', color: '#64748b' }}>使用手机扫描二维码</div>
        </div>
      )}
    </div>
  );
}
