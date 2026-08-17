import React, { useState } from 'react';
import { RefreshCw, Utensils } from 'lucide-react';

const FOODS = ['火锅', '烧烤', '寿司', '拉面', '披萨', '汉堡', '炸鸡', '麻辣烫', '盖浇饭', '饺子', '面条', '炒饭', '三明治', '沙拉', '牛排', ' tacos', '咖喱', '韩式拌饭', '越南粉', '粤菜'];

export default function RandomFood() {
  const [food, setFood] = useState('');
  const [history, setHistory] = useState([]);

  const generate = () => {
    const random = FOODS[Math.floor(Math.random() * FOODS.length)];
    setFood(random);
    setHistory(prev => [random, ...prev].slice(0, 10));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#f8fafc', marginBottom: '8px' }}>随机吃什么</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>解决选择困难症</p>

      <div style={{ background: '#1e293b', borderRadius: '12px', padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{food || '?'}</div>
        <button onClick={generate} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          <RefreshCw size={16} /> 随机选择
        </button>
      </div>

      {history.length > 0 && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '16px' }}>
          <h3 style={{ color: '#f8fafc', marginBottom: '12px' }}>历史记录</h3>
          {history.map((f, i) => (
            <div key={i} style={{ color: '#94a3b8', padding: '4px 0' }}>{f}</div>
          ))}
        </div>
      )}
    </div>
  );
}
