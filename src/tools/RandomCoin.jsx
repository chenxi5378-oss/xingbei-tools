import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function RandomCoin() {
  const [flips, setFlips] = useState(1);
  const [results, setResults] = useState([]);
  const [stats, setStats] = useState({ heads: 0, tails: 0 });

  const flipCoins = () => {
    const newResults = [];
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < flips; i++) {
      const isHeads = Math.random() < 0.5;
      newResults.push(isHeads ? 'heads' : 'tails');
      if (isHeads) heads++;
      else tails++;
    }
    setResults(newResults);
    setStats({ heads, tails });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>
          随机硬币
        </h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>
          抛硬币做决定，支持多次抛掷和统计
        </p>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
            抛掷次数
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={flips}
            onChange={(e) => setFlips(parseInt(e.target.value) || 1)}
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
        <button
          onClick={flipCoins}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <RefreshCw size={16} />
          抛硬币
        </button>
      </div>

      {results.length > 0 && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}>
            {results.map((result, index) => (
              <div
                key={index}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: result === 'heads' ? '#f59e0b' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'white',
                  border: '3px solid rgba(255,255,255,0.2)',
                }}
              >
                {result === 'heads' ? '正面' : '反面'}
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '16px', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>正面: </span>
              <span style={{ fontSize: '20px', fontWeight: 600, color: '#f59e0b' }}>{stats.heads}</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>反面: </span>
              <span style={{ fontSize: '20px', fontWeight: 600, color: '#64748b' }}>{stats.tails}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
