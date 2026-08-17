import React, { useState } from 'react';

export default function TaxCalc() {
  const [income, setIncome] = useState('');
  const [deduction, setDeduction] = useState('5000');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const taxable = Math.max(0, parseFloat(income) - parseFloat(deduction) - 5000);
    let tax = 0;
    if (taxable <= 0) tax = 0;
    else if (taxable <= 3000) tax = taxable * 0.03;
    else if (taxable <= 12000) tax = taxable * 0.1 - 210;
    else if (taxable <= 25000) tax = taxable * 0.2 - 1410;
    else if (taxable <= 35000) tax = taxable * 0.25 - 2660;
    else if (taxable <= 55000) tax = taxable * 0.3 - 4410;
    else if (taxable <= 80000) tax = taxable * 0.35 - 7160;
    else tax = taxable * 0.45 - 15160;
    
    setResult({ taxable, tax, afterTax: parseFloat(income) - tax });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>个税计算器</h1>
      <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>计算个人所得税</p>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '14px', color: '#94a3b8' }}>税前收入</label>
        <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', marginTop: '8px' }} />
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '14px', color: '#94a3b8' }}>专项扣除</label>
        <input type="number" value={deduction} onChange={(e) => setDeduction(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', marginTop: '8px' }} />
      </div>
      
      <button onClick={calculate} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}>计算</button>
      
      {result && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: '#94a3b8' }}>应纳税所得额</span>
            <span style={{ color: '#f8fafc' }}>¥{result.taxable.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: '#94a3b8' }}>应缴个税</span>
            <span style={{ color: '#ef4444', fontWeight: 600 }}>¥{result.tax.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <span style={{ color: '#94a3b8' }}>税后收入</span>
            <span style={{ color: '#22c55e', fontWeight: 600 }}>¥{result.afterTax.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
