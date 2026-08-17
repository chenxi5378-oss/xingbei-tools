import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function IdCardCheck() {
  const [idCard, setIdCard] = useState('');
  const [result, setResult] = useState(null);

  const check = () => {
    const id = idCard.trim();
    if (!/^\d{17}[\dXx]$/.test(id)) { setResult({ valid: false, message: '身份证号格式不正确' }); return; }
    
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    
    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += parseInt(id[i]) * weights[i];
    }
    const checkCode = checkCodes[sum % 11];
    const valid = checkCode.toUpperCase() === id[17].toUpperCase();
    
    if (!valid) { setResult({ valid: false, message: '校验码错误' }); return; }
    
    const year = id.substring(6, 10);
    const month = id.substring(10, 12);
    const day = id.substring(12, 14);
    const gender = parseInt(id[16]) % 2 === 1 ? '男' : '女';
    const province = id.substring(0, 2);
    
    const provinces = { '11': '北京', '12': '天津', '13': '河北', '14': '山西', '15': '内蒙古', '21': '辽宁', '22': '吉林', '23': '黑龙江', '31': '上海', '32': '江苏', '33': '浙江', '34': '安徽', '35': '福建', '36': '江西', '37': '山东', '41': '河南', '42': '湖北', '43': '湖南', '44': '广东', '45': '广西', '46': '海南', '50': '重庆', '51': '四川', '52': '贵州', '53': '云南', '54': '西藏', '61': '陕西', '62': '甘肃', '63': '青海', '64': '宁夏', '65': '新疆' };
    
    setResult({ valid: true, message: '身份证号有效', year, month, day, gender, province: provinces[province] || '未知' });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>身份证校验</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>验证身份证号合法性</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <input type="text" value={idCard} onChange={(e) => setIdCard(e.target.value)} placeholder="输入18位身份证号" maxLength={18} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', fontSize: '16px', letterSpacing: '2px' }} />
      </div>

      <button onClick={check} style={{ width: '100%', padding: '14px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 500, cursor: 'pointer', marginBottom: '24px' }}>验证</button>

      {result && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: `1px solid ${result.valid ? '#22c55e' : '#ef4444'}` }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '48px', color: result.valid ? '#22c55e' : '#ef4444' }}>{result.valid ? '✓' : '✗'}</div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: result.valid ? '#22c55e' : '#ef4444' }}>{result.message}</div>
          </div>
          {result.valid && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div><span style={{ color: '#64748b' }}>省份: </span><span style={{ color: '#f8fafc' }}>{result.province}</span></div>
              <div><span style={{ color: '#64748b' }}>出生: </span><span style={{ color: '#f8fafc' }}>{result.year}-{result.month}-{result.day}</span></div>
              <div><span style={{ color: '#64748b' }}>性别: </span><span style={{ color: '#f8fafc' }}>{result.gender}</span></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
