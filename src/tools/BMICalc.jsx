import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function BMICalc() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const h = height / 100;
    const bmi = weight / (h * h);
    let category, color;
    
    if (bmi < 18.5) { category = '偏瘦'; color = '#3b82f6'; }
    else if (bmi < 24) { category = '正常'; color = '#22c55e'; }
    else if (bmi < 28) { category = '偏胖'; color = '#f59e0b'; }
    else { category = '肥胖'; color = '#ef4444'; }
    
    setResult({ bmi: bmi.toFixed(1), category, color });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>BMI计算器</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>计算身体质量指数，评估体重状况</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>身高 (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', fontSize: '16px' }} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>体重 (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', fontSize: '16px' }} />
      </div>

      <button onClick={calculate} style={{ width: '100%', padding: '14px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 500, cursor: 'pointer', marginBottom: '24px' }}>计算BMI</button>

      {result && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>您的BMI</div>
          <div style={{ fontSize: '48px', fontWeight: 700, color: result.color, marginBottom: '8px' }}>{result.bmi}</div>
          <div style={{ fontSize: '18px', color: result.color, padding: '8px 16px', background: `${result.color}20`, borderRadius: '20px', display: 'inline-block' }}>{result.category}</div>
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <div style={{ fontSize: '12px', color: '#64748b' }}>参考标准</div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>偏瘦 &lt; 18.5 | 正常 18.5-23.9 | 偏胖 24-27.9 | 肥胖 ≥ 28</div>
          </div>
        </div>
      )}
    </div>
  );
}
