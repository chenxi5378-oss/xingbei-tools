import React, { useState } from 'react';
import { Copy, Check, Calculator } from 'lucide-react';

export default function ScientificCalc() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [newNum, setNewNum] = useState(true);

  const handleNum = (num) => {
    if (newNum) { setDisplay(num); setNewNum(false); }
    else { setDisplay(display === '0' ? num : display + num); }
  };

  const handleOp = (operation) => {
    setOp(operation);
    setPrev(parseFloat(display));
    setNewNum(true);
  };

  const calculate = () => {
    if (op === null || prev === null) return;
    const current = parseFloat(display);
    let result;
    switch(op) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '*': result = prev * current; break;
      case '/': result = prev / current; break;
      case '^': result = Math.pow(prev, current); break;
      default: return;
    }
    setDisplay(String(result));
    setOp(null);
    setPrev(null);
    setNewNum(true);
  };

  const clear = () => { setDisplay('0'); setPrev(null); setOp(null); setNewNum(true); };
  const handleFunc = (func) => {
    const val = parseFloat(display);
    let result;
    switch(func) {
      case 'sin': result = Math.sin(val); break;
      case 'cos': result = Math.cos(val); break;
      case 'tan': result = Math.tan(val); break;
      case 'log': result = Math.log10(val); break;
      case 'ln': result = Math.log(val); break;
      case 'sqrt': result = Math.sqrt(val); break;
      case 'square': result = val * val; break;
      case 'pi': result = Math.PI; break;
      case 'e': result = Math.E; break;
      default: return;
    }
    setDisplay(String(result));
    setNewNum(true);
  };

  const btnStyle = { padding: '16px', fontSize: '16px', background: '#1e293b', color: '#f8fafc', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '8px', cursor: 'pointer' };
  const opStyle = { ...btnStyle, background: '#3b82f6', color: 'white' };
  const funcStyle = { ...btnStyle, background: '#334155', color: '#94a3b8', fontSize: '14px' };

  return (
    <div style={{ padding: '24px', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>科学计算器</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>高级数学运算</p>
      </div>

      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '16px' }}>
        <div style={{ fontSize: '32px', color: '#f8fafc', textAlign: 'right', fontFamily: 'monospace', wordBreak: 'break-all' }}>{display}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        {['sin', 'cos', 'tan', 'log'].map(f => <button key={f} onClick={() => handleFunc(f)} style={funcStyle}>{f}</button>)}
        {['ln', 'sqrt', 'square', '^'].map(f => <button key={f} onClick={() => f === '^' ? handleOp('^') : handleFunc(f)} style={funcStyle}>{f}</button>)}
        <button onClick={() => handleFunc('pi')} style={funcStyle}>π</button>
        <button onClick={() => handleFunc('e')} style={funcStyle}>e</button>
        <button onClick={clear} style={opStyle}>C</button>
        <button onClick={() => handleOp('/')} style={opStyle}>÷</button>
        {['7', '8', '9'].map(n => <button key={n} onClick={() => handleNum(n)} style={btnStyle}>{n}</button>)}
        <button onClick={() => handleOp('*')} style={opStyle}>×</button>
        {['4', '5', '6'].map(n => <button key={n} onClick={() => handleNum(n)} style={btnStyle}>{n}</button>)}
        <button onClick={() => handleOp('-')} style={opStyle}>-</button>
        {['1', '2', '3'].map(n => <button key={n} onClick={() => handleNum(n)} style={btnStyle}>{n}</button>)}
        <button onClick={() => handleOp('+')} style={opStyle}>+</button>
        <button onClick={() => handleNum('0')} style={btnStyle}>0</button>
        <button onClick={() => handleNum('.')} style={btnStyle}>.</button>
        <button onClick={() => setDisplay(String(parseFloat(display) * -1))} style={btnStyle}>+/-</button>
        <button onClick={calculate} style={opStyle}>=</button>
      </div>
    </div>
  );
}
