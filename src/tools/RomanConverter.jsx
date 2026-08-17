import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ROMAN_MAP = [
  ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
  ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
  ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
];

export default function RomanConverter() {
  const [number, setNumber] = useState('');
  const [roman, setRoman] = useState('');
  const [result, setResult] = useState('');

  const toRoman = (num) => {
    let result = '';
    let n = parseInt(num);
    if (isNaN(n) || n <= 0 || n > 3999) return '';
    for (const [r, val] of ROMAN_MAP) {
      while (n >= val) { result += r; n -= val; }
    }
    return result;
  };

  const fromRoman = (r) => {
    let result = 0;
    let str = r.toUpperCase();
    for (const [roman, val] of ROMAN_MAP) {
      while (str.startsWith(roman)) { result += val; str = str.slice(roman.length); }
    }
    return str.length === 0 ? result : '';
  };

  const convertToRoman = () => setResult(toRoman(number));
  const convertFromRoman = () => setResult(fromRoman(roman));

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>罗马数字转换</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>阿拉伯数字与罗马数字互转</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>阿拉伯数字</label>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="输入1-3999" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
        <button onClick={convertToRoman} style={{ width: '100%', marginTop: '8px', padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>→ 转罗马数字</button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>罗马数字</label>
        <input type="text" value={roman} onChange={(e) => setRoman(e.target.value)} placeholder="输入罗马数字" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', textTransform: 'uppercase' }} />
        <button onClick={convertFromRoman} style={{ width: '100%', marginTop: '8px', padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>→ 转阿拉伯数字</button>
      </div>

      {result && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#f8fafc' }}>{result}</div>
        </div>
      )}
    </div>
  );
}
