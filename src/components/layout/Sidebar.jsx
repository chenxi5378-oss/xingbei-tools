import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Compass, Heart, Wrench, Cloud, Code, Shield, Clock, FileText, Globe,
  Image, Terminal, Palette, Lock, MoreHorizontal, HeartPulse, DollarSign,
  Dices, Calculator, Database, X
} from 'lucide-react';

const categories = [
  { id: 'all', name: '全部工具', icon: Wrench },
  { id: 'weather', name: '气象工具', icon: Cloud },
  { id: 'encode', name: '编码解码', icon: Code },
  { id: 'crypto', name: '加密安全', icon: Shield },
  { id: 'time', name: '时间日期', icon: Clock },
  { id: 'text', name: '文本处理', icon: FileText },
  { id: 'network', name: '网络工具', icon: Globe },
  { id: 'image', name: '图像处理', icon: Image },
  { id: 'dev', name: '开发辅助', icon: Terminal },
  { id: 'design', name: '设计工具', icon: Palette },
  { id: 'security', name: '安全工具', icon: Lock },
  { id: 'other', name: '其他工具', icon: MoreHorizontal },
  { id: 'health', name: '健康工具', icon: HeartPulse },
  { id: 'finance', name: '金融工具', icon: DollarSign },
  { id: 'random', name: '随机决策', icon: Dices },
  { id: 'calc', name: '计算工具', icon: Calculator },
  { id: 'format', name: '数据格式化', icon: Database },
];

export default function Sidebar({ isOpen, onToggle }) {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <>
      {/* 遮罩 */}
      {isOpen && (
        <div 
          onClick={onToggle}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 40,
          }}
        />
      )}
      
      {/* Sidebar */}
      <aside style={{
        position: 'fixed',
        top: '56px',
        left: 0,
        width: '260px',
        height: 'calc(100vh - 56px)',
        background: '#1e293b',
        borderRight: '1px solid rgba(148, 163, 184, 0.1)',
        overflowY: 'auto',
        zIndex: 45,
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
      }}>
        {/* Logo区域 */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
        }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#f8fafc',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '16px',
          }}>
            <Wrench size={24} style={{ color: '#3b82f6' }} />
            <span>星贝工具箱</span>
          </Link>
        </div>
        
        {/* 主导航 */}
        <nav style={{ padding: '8px' }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            borderRadius: '8px',
            color: isActive('/') ? '#3b82f6' : '#94a3b8',
            background: isActive('/') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '4px',
            transition: 'all 0.2s',
          }}>
            <Home size={18} />
            <span>首页</span>
          </Link>
          
          <Link to="/explore" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            borderRadius: '8px',
            color: isActive('/explore') ? '#3b82f6' : '#94a3b8',
            background: isActive('/explore') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '4px',
          }}>
            <Compass size={18} />
            <span>探索</span>
          </Link>
          
          <Link to="/favorites" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            borderRadius: '8px',
            color: isActive('/favorites') ? '#3b82f6' : '#94a3b8',
            background: isActive('/favorites') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '4px',
          }}>
            <Heart size={18} />
            <span>我的收藏</span>
          </Link>
        </nav>
        
        {/* 分隔线 */}
        <div style={{
          height: '1px',
          background: 'rgba(148, 163, 184, 0.1)',
          margin: '8px 16px',
        }} />
        
        {/* 工具分类 */}
        <div style={{ padding: '8px' }}>
          <div style={{
            padding: '8px 12px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            工具箱
          </div>
          
          {categories.map(cat => {
            const Icon = cat.icon;
            const active = location.pathname === `/category/${cat.id}`;
            return (
              <Link 
                key={cat.id}
                to={`/category/${cat.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  color: active ? '#3b82f6' : '#94a3b8',
                  background: active ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '2px',
                  transition: 'all 0.2s',
                }}
              >
                <Icon size={18} />
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
