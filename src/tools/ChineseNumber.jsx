import React, { useState } from 'react';

const CHINESE_NUMBERS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const CHINESE_UNITS = ['', '十', '百', '千'];
const CHINESE_BIG_UNITS = ['', '万', '亿', '万亿'];

export default function ChineseNumber() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const toChinese = (num) => {
    if (!num || isNaN(num)) return '';
    const n = parseInt(num);
    if (n === 0) return '零';
    
    let str = n.toString();
    let result = '';
    let zero = false;
    let unitIndex = 0;
    
    for (let i = str.length - 1; i >= 0; i--) {
      const digit = parseInt(str[i]);
      const unit = CHINESE_UNITS[unitIndex % 4];
      
      if (digit === 0) {
        if (!zero && result) zero = true;
      } else {
        if (zero) {
          result = '零' + result;
          zero = false;
        }
        result = CHINESE_NUMBERS[digit] + unit + result;
      }
      
      unitIndex++;
      if (unitIndex % 4 === 0 && i > 0) {
        const bigUnit = CHINESE_BIG_UNITS[unitIndex / 4];
        if (bigUnit) result = bigUnit + result;
      }
    }
    
    return result.replace(/零+/g, '零').replace(/零$/, '');
  };

  const convert = () => setResult(toChinese(number));

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>中文数字转换</h1>
      <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>阿拉伯数字转中文大写</p>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="输入阿拉伯数字"
        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', marginBottom: '16px' }}
      />

      <button
        onClick={convert}
        style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}
      >
        转换
      </button>

      {result && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>中文数字</div>
          <div style={{ fontSize: '28px', fontWeight: 600, color: '#f8fafc' }}>{result}</div>
          <div style={{ fontSize: '20px', color: '#94a3b8', marginTop: '8px' }}>大写: {result.replace(/一/g, '壹').replace(/二/g, '贰').replace(/三/g, '叁').replace(/四/g, '肆').replace(/五/g, '伍').replace(/六/g, '陆').replace(/七/g, '柒').replace(/八/g, '捌').replace(/九/g, '玖').replace(/十/g, '拾').replace(/百/g, '佰').replace(/千/g, '仟').replace(/万/g, '万').replace(/亿/g, '亿')}</div>
        </div>
      )}
    </div>
  );
}
