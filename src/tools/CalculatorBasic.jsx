import React, { useState } from 'react';

export default function CalculatorBasic() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);

  const handleNum = (num) => {
    setDisplay(prev => prev === '0' ? String(num) : prev + num);
  };

  const handleOp = (operation) => {
    setPrev(Number(display));
    setOp(operation);
    setDisplay('0');
  };

  const calculate = () => {
    if (op === null || prev === null) return;
    const current = Number(display);
    let result;
    switch(op) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '*': result = prev * current; break;
      case '/': result = current !== 0 ? prev / current : 'Error'; break;
      default: return;
    }
    setDisplay(String(result));
    setOp(null);
    setPrev(null);
  };

  const clear = () => { setDisplay('0'); setPrev(null); setOp(null); };

  const btnStyle = { width: '60px', height: '60px', fontSize: '20px', border: 'none', borderRadius: '8px', cursor: 'pointer', background: '#334155', color: '#f8fafc' };
  const opStyle = { ...btnStyle, background: '#3b82f6' };

  return (
    <div style={{ padding: '24px', maxWidth: '300px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '16px' }}>基础计算器</h1>
      <div style={{ background: '#1e293b', padding: '16px', borderRadius: '12px', marginBottom: '16px', textAlign: 'right', fontSize: '32px', color: '#f8fafc' }}>{display}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map((btn) => (
          <button key={btn} onClick={() => btn === '=' ? calculate() : ['+','-','*','/'].includes(btn) ? handleOp(btn) : handleNum(btn)} style={['+','-','*','/','='].includes(btn) ? opStyle : btnStyle}>
            {btn}
          </button>
        ))}
        <button onClick={clear} style={{ ...btnStyle, gridColumn: 'span 4', background: '#ef4444' }}>C</button>
      </div>
    </div>
  );
}
