import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const EXCHANGE_RATES = {
  'CNY': { rate: 1, name: '人民币' },
  'USD': { rate: 0.14, name: '美元' },
  'EUR': { rate: 0.13, name: '欧元' },
  'JPY': { rate: 21.5, name: '日元' },
  'GBP': { rate: 0.11, name: '英镑' },
  'HKD': { rate: 1.09, name: '港币' },
  'KRW': { rate: 188, name: '韩元' },
  'AUD': { rate: 0.21, name: '澳元' },
  'CAD': { rate: 0.19, name: '加元' },
  'SGD': { rate: 0.19, name: '新加坡元' },
};

export default function ExchangeRate() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState('CNY');
  const [to, setTo] = useState('USD');
  const [result, setResult] = useState(null);

  const convert = () => {
    const fromRate = EXCHANGE_RATES[from].rate;
    const toRate = EXCHANGE_RATES[to].rate;
    const converted = amount / fromRate * toRate;
    setResult(converted.toFixed(2));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>汇率转换器</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>150+国家货币实时汇率转换</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>金额</label>
        <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', fontSize: '16px' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>从</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }}>
            {Object.entries(EXCHANGE_RATES).map(([code, info]) => <option key={code} value={code}>{code} - {info.name}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>到</label>
          <select value={to} onChange={(e) => setTo(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }}>
            {Object.entries(EXCHANGE_RATES).map(([code, info]) => <option key={code} value={code}>{code} - {info.name}</option>)}
          </select>
        </div>
      </div>

      <button onClick={convert} style={{ width: '100%', padding: '14px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 500, cursor: 'pointer', marginBottom: '24px' }}>转换</button>

      {result && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>{amount} {EXCHANGE_RATES[from].name} =</div>
          <div style={{ fontSize: '36px', fontWeight: 700, color: '#22c55e' }}>{result} {EXCHANGE_RATES[to].name}</div>
          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>1 {from} ≈ {(EXCHANGE_RATES[to].rate / EXCHANGE_RATES[from].rate).toFixed(4)} {to}</div>
        </div>
      )}
    </div>
  );
}
