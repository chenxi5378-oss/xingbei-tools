import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

export default function RandomDice() {
  const [diceCount, setDiceCount] = useState(1);
  const [diceSides, setDiceSides] = useState(6);
  const [results, setResults] = useState([]);
  const [sum, setSum] = useState(0);

  const rollDice = () => {
    const newResults = [];
    let total = 0;
    for (let i = 0; i < diceCount; i++) {
      const roll = Math.floor(Math.random() * diceSides) + 1;
      newResults.push(roll);
      total += roll;
    }
    setResults(newResults);
    setSum(total);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>
          随机骰子
        </h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>
          投掷虚拟骰子，支持多种面数和多个骰子
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
            骰子数量
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={diceCount}
            onChange={(e) => setDiceCount(parseInt(e.target.value) || 1)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              background: '#1e293b',
              color: '#f8fafc',
              fontSize: '14px',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
            骰子面数
          </label>
          <select
            value={diceSides}
            onChange={(e) => setDiceSides(parseInt(e.target.value))}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              background: '#1e293b',
              color: '#f8fafc',
              fontSize: '14px',
            }}
          >
            <option value="4">4面 (D4)</option>
            <option value="6">6面 (D6)</option>
            <option value="8">8面 (D8)</option>
            <option value="10">10面 (D10)</option>
            <option value="12">12面 (D12)</option>
            <option value="20">20面 (D20)</option>
            <option value="100">100面 (D100)</option>
          </select>
        </div>
      </div>

      <button
        onClick={rollDice}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 24px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
          marginBottom: '24px',
        }}
      >
        <RefreshCw size={16} />
        投掷骰子
      </button>

      {results.length > 0 && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '16px' }}>
            {results.map((result, index) => (
              <div
                key={index}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '8px',
                  background: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                {result}
              </div>
            ))}
          </div>
          {results.length > 1 && (
            <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>总和: </span>
              <span style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc' }}>{sum}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
