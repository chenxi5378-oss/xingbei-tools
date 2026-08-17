import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function LoanCalc() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(4.9);
  const [years, setYears] = useState(30);
  const [type, setType] = useState('equal');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const principal = amount;
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    
    let monthlyPayment, totalPayment, totalInterest;
    
    if (type === 'equal') {
      // 等额本息
      monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
      totalPayment = monthlyPayment * months;
      totalInterest = totalPayment - principal;
    } else {
      // 等额本金
      const monthlyPrincipal = principal / months;
      const firstMonth = monthlyPrincipal + principal * monthlyRate;
      const lastMonth = monthlyPrincipal + monthlyPrincipal * monthlyRate;
      totalInterest = (principal * monthlyRate + monthlyPrincipal * monthlyRate) * months / 2;
      totalPayment = principal + totalInterest;
      monthlyPayment = { first: firstMonth, last: lastMonth };
    }
    
    setResult({ monthlyPayment, totalPayment, totalInterest, principal });
  };

  const formatMoney = (num) => '¥' + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>贷款计算器</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>计算房贷、车贷月供和总利息</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>贷款金额 (元)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>年利率 (%)</label>
          <input type="number" step="0.01" value={rate} onChange={(e) => setRate(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>贷款年限</label>
          <input type="number" value={years} onChange={(e) => setYears(parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>还款方式</label>
          <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc' }}>
            <option value="equal">等额本息</option>
            <option value="principal">等额本金</option>
          </select>
        </div>
      </div>

      <button onClick={calculate} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', marginBottom: '24px' }}>计算</button>

      {result && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>{type === 'equal' ? '月供' : '首月/末月'}</div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#3b82f6' }}>
                {type === 'equal' ? formatMoney(result.monthlyPayment) : formatMoney(result.monthlyPayment.first) + ' / ' + formatMoney(result.monthlyPayment.last)}
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>还款总额</div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#22c55e' }}>{formatMoney(result.totalPayment)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>利息总额</div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#ef4444' }}>{formatMoney(result.totalInterest)}</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>贷款本金</div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#8b5cf6' }}>{formatMoney(result.principal)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
