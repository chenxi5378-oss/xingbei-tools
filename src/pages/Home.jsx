import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Clipboard, Clock, Flame, Sparkles, ArrowRight,
  Cloud, Code, Shield, FileJson, Globe, FileText, Terminal,
  Palette, Lock, MoreHorizontal, HeartPulse, DollarSign,
  Dices, Calculator, Database, Image
} from 'lucide-react';

const hotSearches = ['Markdown编辑器', '时间戳转换', 'MD5生成器', 'Cron生成器', 'JWT解码', '图片尺寸调整'];

const recentTools = [
  { id: 'json-format', name: 'JSON格式化', icon: FileJson, color: '#3b82f6' },
  { id: 'base64-encode', name: 'Base64编码', icon: Code, color: '#10b981' },
  { id: 'md5', name: 'MD5生成器', icon: Shield, color: '#8b5cf6' },
  { id: 'timestamp', name: '时间戳转换', icon: Clock, color: '#06b6d4' },
  { id: 'regex-test', name: '正则表达式测试', icon: FileText, color: '#f59e0b' },
  { id: 'image-compress', name: '图片压缩', icon: Image, color: '#ec4899' },
];

const categories = [
  {
    id: 'random', name: '随机决策', icon: Dices, color: '#f59e0b',
    tools: [
      { id: 'random-dice', name: '随机骰子', desc: '投掷虚拟骰子，支持多种面数和多个骰子', isHot: true },
      { id: 'random-poker', name: '随机扑克牌', desc: '从牌堆中随机抽取扑克牌，支持多种玩法', isHot: true },
      { id: 'random-coin', name: '随机硬币', desc: '抛硬币做决定，支持多次抛掷和统计', isHot: true },
      { id: 'random-food', name: '随机吃什么', desc: '解决"吃什么"难题，随机推荐美食', isHot: true },
      { id: 'random-number', name: '随机数字生成器', desc: '生成随机数字，支持范围、排除、抽奖模式', isNew: true },
      { id: 'random-picker', name: '随机选择器', desc: '从列表中随机选择一个或多个选项', isHot: true },
    ]
  },
  {
    id: 'calc', name: '计算工具', icon: Calculator, color: '#3b82f6',
    tools: [
      { id: 'unit-convert', name: '单位换算器', desc: '支持长度、重量、温度、面积、体积等多种单位类型的相互转换', isHot: true },
      { id: 'percentage', name: '百分比计算器', desc: '计算百分比变化、百分比增减、占比等，支持正逆向计算', isNew: true },
      { id: 'scientific', name: '科学计算器', desc: '高级数学运算，支持三角函数、对数、指数运算等科学计算，包含内存管理和历史记录', isHot: true },
      { id: 'matrix', name: '矩阵计算器', desc: '矩阵运算工具，支持加减乘除、转置、求逆、行列式计算，适合线性代数学习', isNew: true },
      { id: 'statistics', name: '统计学计算器', desc: '数据分析工具，支持描述统计、回归分析、概率分布、假设检验等统计计算', isHot: true },
      { id: 'date-calc', name: '日期时间计算器', desc: '日期间隔计算、工作日计算、时区转换、Unix时间戳转换等时间相关计算工具', isNew: true },
    ]
  },
  {
    id: 'format', name: '数据格式化', icon: Database, color: '#10b981',
    tools: [
      { id: 'json-format', name: 'JSON格式化', desc: '美化、压缩、验证JSON数据', isHot: true },
      { id: 'json-xml', name: 'JSON转XML', desc: 'JSON数据转换为XML格式', isNew: true },
      { id: 'json-yaml', name: 'JSON转YAML', desc: 'JSON数据转换为YAML格式', isNew: true },
      { id: 'json-csv', name: 'JSON转CSV', desc: 'JSON数据转换为CSV格式', isNew: true },
      { id: 'xml-format', name: 'XML格式化', desc: '格式化、压缩XML数据', isHot: false },
      { id: 'xml-json', name: 'XML转JSON', desc: 'XML数据转换为JSON格式', isNew: true },
    ]
  },
  {
    id: 'encode', name: '编码解码', icon: Code, color: '#8b5cf6',
    tools: [
      { id: 'base64-encode', name: 'Base64编码', desc: '文本/图片Base64编码', isHot: true },
      { id: 'base64-decode', name: 'Base64解码', desc: 'Base64数据解码还原', isHot: false },
      { id: 'url-encode', name: 'URL编码', desc: '对URL进行编码', isHot: false },
      { id: 'url-decode', name: 'URL解码', desc: '解码URL编码数据', isHot: false },
      { id: 'html-encode', name: 'HTML编码', desc: 'HTML实体编码', isNew: true },
      { id: 'html-decode', name: 'HTML解码', desc: 'HTML实体解码', isNew: true },
    ]
  },
  {
    id: 'crypto', name: '加密安全', icon: Shield, color: '#ef4444',
    tools: [
      { id: 'md5', name: 'MD5生成器', desc: '生成MD5哈希值', isHot: true },
      { id: 'sha', name: 'SHA生成器', desc: 'SHA-1/256/512哈希计算', isNew: true },
      { id: 'aes-encrypt', name: 'AES加密', desc: 'AES对称加密', isNew: true },
      { id: 'aes-decrypt', name: 'AES解密', desc: 'AES对称解密', isNew: true },
      { id: 'rsa-gen', name: 'RSA密钥生成', desc: '生成RSA公私钥对', isNew: true },
      { id: 'rsa-encrypt', name: 'RSA加密', desc: 'RSA非对称加密', isNew: true },
    ]
  },
  {
    id: 'time', name: '时间日期', icon: Clock, color: '#06b6d4',
    tools: [
      { id: 'timestamp', name: '时间戳转换', desc: 'Unix时间戳与日期互转', isHot: true },
      { id: 'cron-parse', name: 'Cron解析器', desc: '解析Cron表达式', isNew: true },
      { id: 'cron-gen', name: 'Cron生成器', desc: '可视化生成Cron表达式', isNew: true },
      { id: 'timezone', name: '时区转换', desc: '不同时区时间转换', isNew: true },
      { id: 'date-calc', name: '日期计算器', desc: '日期加减计算', isNew: true },
      { id: 'date-diff', name: '日期差计算', desc: '计算两个日期差值', isNew: true },
    ]
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      width: '100%',
      overflowX: 'hidden',
    }}>
      {/* Hero */}
      <div style={{ 
        textAlign: 'center', 
        padding: '32px 16px 24px',
        width: '100%',
      }}>
        {/* 状态栏 */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px',
          marginBottom: '20px',
          fontSize: '13px',
          color: '#64748b',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontWeight: 500 }}>Hello</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            Press <kbd style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '20px',
              padding: '1px 4px',
              borderRadius: '4px',
              background: '#1e293b',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              fontSize: '11px',
              fontFamily: 'inherit',
              color: '#94a3b8',
            }}>⌘</kbd> + <kbd style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '20px',
              padding: '1px 4px',
              borderRadius: '4px',
              background: '#1e293b',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              fontSize: '11px',
              fontFamily: 'inherit',
              color: '#94a3b8',
            }}>K</kbd> to search
          </span>
        </div>
        
        {/* 标题 */}
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#f8fafc',
          marginBottom: '10px',
          lineHeight: 1.3,
          wordBreak: 'keep-all',
        }}>
          不仅是工具，更是创造力的延伸
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#94a3b8',
          marginBottom: '24px',
          lineHeight: 1.5,
          wordBreak: 'keep-all',
        }}>
          极简、高效、全能。为极客、设计师和所有探索者打造。
        </p>
        
        {/* 搜索框 */}
        <div style={{
          maxWidth: '100%',
          margin: '0 auto 12px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#1e293b',
            border: '1px solid rgba(148, 163, 184, 0.15)',
            borderRadius: '12px',
            padding: '10px 12px',
            flexWrap: 'nowrap',
            overflow: 'hidden',
          }}>
            <Search size={18} style={{ color: '#64748b', flexShrink: 0 }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索工具，如 Markdown, JSON, MD5..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#f8fafc',
                fontSize: '14px',
                fontFamily: 'inherit',
                minWidth: '0',
              }}
            />
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: '6px',
              background: 'rgba(51, 65, 85, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              <Clipboard size={12} />
              检测剪贴板
            </button>
          </div>
        </div>
        
        {/* 热门搜索 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '12px', color: '#64748b' }}>热门搜索：</span>
          {hotSearches.map(tag => (
            <button key={tag} onClick={() => setSearchQuery(tag)} style={{
              padding: '4px 8px',
              borderRadius: '6px',
              background: 'rgba(51, 65, 85, 0.4)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      {/* 最近使用 */}
      <div style={{ marginBottom: '24px', padding: '0 12px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '12px',
        }}>
          <Clock size={18} style={{ color: '#3b82f6' }} />
          <h2 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#f8fafc',
          }}>最近使用</h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}>
          {recentTools.map(tool => {
            const Icon = tool.icon;
            return (
              <Link key={tool.id} to={`/tool/${tool.id}`} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                padding: '16px 8px',
                borderRadius: '12px',
                background: '#1e293b',
                border: '1px solid rgba(148, 163, 184, 0.1)',
                textDecoration: 'none',
                color: '#f8fafc',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: `${tool.color}15`,
                  border: `1px solid ${tool.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={20} style={{ color: tool.color }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 500 }}>{tool.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* 分类 */}
      {categories.map(cat => {
        const CatIcon = cat.icon;
        return (
          <div key={cat.id} style={{ marginBottom: '32px', padding: '0 12px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '12px',
            }}>
              <CatIcon size={18} style={{ color: cat.color }} />
              <h2 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#f8fafc',
              }}>{cat.name}</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '8px',
            }}>
              {cat.tools.map(tool => (
                <Link key={tool.id} to={`/tool/${tool.id}`} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '12px',
                  borderRadius: '10px',
                  background: '#1e293b',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    {tool.isHot && (
                      <span className="badge badge-hot">
                        <Flame size={10} />
                        HOT
                      </span>
                    )}
                    {tool.isNew && (
                      <span className="badge badge-new">
                        <Sparkles size={10} />
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#f8fafc',
                  }}>{tool.name}</h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>{tool.desc}</p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '4px',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                  }}>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>{cat.name}</span>
                    <ArrowRight size={12} style={{ color: '#64748b' }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
