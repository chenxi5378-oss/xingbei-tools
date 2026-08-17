import React, { useState } from 'react';

export default function TaxCalculator() {
  const [income, setIncome] = useState(10000);
  const [insurance, setInsurance] = useState(2000);
  const [threshold, setThreshold] = useState(5000);

  const calculate = () => {
    const taxable = Math.max(0, income - insurance - threshold);
    let tax = 0;
    if (taxable <= 3000) tax = taxable * 0.03;
    else if (taxable <= 12000) tax = 3000 * 0.03 + (taxable - 3000) * 0.10;
    else if (taxable <= 25000) tax = 3000 * 0.03 + 9000 * 0.10 + (taxable - 12000) * 0.20;
    else if (taxable <= 35000) tax = 3000 * 0.03 + 9000 * 0.10 + 13000 * 0.20 + (taxable - 25000) * 0.25;
    else if (taxable <= 55000) tax = 3000 * 0.03 + 9000 * 0.10 + 13000 * 0.20 + 10000 * 0.25 + (taxable - 35000) * 0.30;
    else if (taxable <= 80000) tax = 3000 * 0.03 + 9000 * 0.10 + 13000 * 0.20 + 10000 * 0.25 + 20000 * 0.30 + (taxable - 55000) * 0.35;
    else tax = 3000 * 0.03 + 9000 * 0.10 + 13000 * 0.20 + 10000 * 0.25 + 20000 * 0.30 + 25000 * 0.35 + (taxable - 80000) * 0.45;

    return {
      taxable,
      tax: Math.round(tax),
      afterTax: income - insurance - Math.round(tax),
      rate: taxable > 0 ? ((tax / taxable) * 100).toFixed(1) : 0
    };
  };

  const result = calculate();

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>个税计算器</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>个人所得税计算</p>

      {[
        { label: '税前收入', value: income, set: setIncome, unit: '元/月' },
        { label: '五险一金', value: insurance, set: setInsurance, unit: '元/月' },
        { label: '起征点', value: threshold, set: setThreshold, unit: '元' }
      ].map(({ label, value, set, unit }) => (
        <div key={label} style={{ marginBottom: '16px' }}>
          <label style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>{label} ({unit})</label>
          <input type="number" value={value} onChange={(e) => set(Number(e.target.value))} style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: '#f8fafc' }} />
        </div>
      ))}

      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginTop: '24px' }}>
        {[
          { label: '应纳税所得额', value: `¥${result.taxable}` },
          { label: '适用税率', value: `${result.rate}%` },
          { label: '应缴个税', value: `¥${result.tax}`, highlight: true },
          { label: '税后收入', value: `¥${result.afterTax}`, highlight: true }
        ].map(({ label, value, highlight }) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
            <span style={{ color: '#94a3b8' }}>{label}</span>
            <span style={{ color: highlight ? '#22c55e' : '#f8fafc', fontWeight: highlight ? 600 : 400 }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
