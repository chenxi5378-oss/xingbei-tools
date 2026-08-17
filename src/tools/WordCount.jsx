import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function WordCount() {
  const [text, setText] = useState('');
  const [stats, setStats] = useState(null);

  const analyze = () => {
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text ? text.split('\n').length : 0;
    const paragraphs = text ? text.split('\n\n').filter(p => p.trim()).length : 0;
    const chinese = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    
    setStats({ chars, charsNoSpace, words, lines, paragraphs, chinese });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>字数统计</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>统计字数、字符数、段落数</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="输入要统计的文本..." rows={10} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#1e293b', color: '#f8fafc', resize: 'vertical' }} />
      </div>

      <button onClick={analyze} style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', marginBottom: '24px' }}>统计</button>

      {stats && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '24px', fontWeight: 600, color: '#3b82f6' }}>{stats.chars}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>总字符</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '24px', fontWeight: 600, color: '#22c55e' }}>{stats.chinese}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>中文字符</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '24px', fontWeight: 600, color: '#8b5cf6' }}>{stats.words}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>单词数</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '24px', fontWeight: 600, color: '#f59e0b' }}>{stats.charsNoSpace}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>不含空格</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '24px', fontWeight: 600, color: '#ec4899' }}>{stats.lines}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>行数</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '24px', fontWeight: 600, color: '#06b6d4' }}>{stats.paragraphs}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>段落数</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
