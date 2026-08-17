import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Wrench, Command } from 'lucide-react';

export default function Header({ onMenuToggle }) {
  return (
    <header className="header" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '56px',
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      zIndex: 50,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button 
          onClick={onMenuToggle}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(51, 65, 85, 0.6)'; e.currentTarget.style.color = '#f8fafc'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
        >
          <Menu size={20} />
        </button>
        <Link to="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: '#f8fafc', 
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '16px',
        }}>
          <Wrench size={22} style={{ color: '#3b82f6' }} />
          <span>星贝工具箱</span>
        </Link>
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        fontSize: '12px',
        color: '#64748b',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
          纯本地计算
        </span>
        <span style={{ opacity: 0.3 }}>|</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }} />
          极速响应
        </span>
        <span style={{ opacity: 0.3 }}>|</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6' }} />
          开源免费
        </span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '6px 12px',
          borderRadius: '8px',
          background: '#1e293b',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          color: '#64748b',
          fontSize: '12px',
          cursor: 'pointer',
        }}>
          <Command size={14} />
          <span>+</span>
          <span>K</span>
        </button>
      </div>
    </header>
  );
}
