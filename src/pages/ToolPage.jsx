import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Wrench } from 'lucide-react';
import { toolsData } from '../data/toolsData';

// 动态导入工具组件映射
const toolModules = {
  // 编码解码
  'json-format': () => import('../tools/JsonFormat'),
  'base64-encode': () => import('../tools/Base64Encode'),
  'base64-decode': () => import('../tools/Base64Decode'),
  'url-encode': () => import('../tools/UrlEncode'),
  'url-decode': () => import('../tools/UrlDecode'),
  'html-encode': () => import('../tools/HtmlEncode'),
  'html-decode': () => import('../tools/HtmlDecode'),
  
  // 加密安全
  'md5': () => import('../tools/Md5Generator'),
  'sha': () => import('../tools/ShaGenerator'),
  'aes-encrypt': () => import('../tools/AesEncrypt'),
  'aes-decrypt': () => import('../tools/AesDecrypt'),
  
  // 时间日期
  'timestamp': () => import('../tools/TimestampConvert'),
  'cron-parse': () => import('../tools/CronParser'),
  'countdown': () => import('../tools/Countdown'),
  'date-diff': () => import('../tools/DateDiff'),
  
  // 文本处理
  'regex-test': () => import('../tools/RegexTest'),
  'text-compare': () => import('../tools/TextCompare'),
  'case-convert': () => import('../tools/CaseConvert'),
  'markdown': () => import('../tools/MarkdownEditor'),
  'word-count': () => import('../tools/WordCount'),
  
  // 网络工具
  'ip-lookup': () => import('../tools/IpLookup'),
  'whois': () => import('../tools/WhoisLookup'),
  'dns-lookup': () => import('../tools/DnsLookup'),
  
  // 随机决策
  'random-dice': () => import('../tools/RandomDice'),
  'random-poker': () => import('../tools/RandomPoker'),
  'random-coin': () => import('../tools/RandomCoin'),
  'random-number': () => import('../tools/RandomNumber'),
  'random-picker': () => import('../tools/RandomPicker'),
  'random-food': () => import('../tools/RandomFood'),
  'random-avatar': () => import('../tools/RandomAvatar'),
  
  // 计算工具
  'percentage': () => import('../tools/PercentageCalc'),
  'bmi': () => import('../tools/BMICalc'),
  'loan': () => import('../tools/LoanCalc'),
  'exchange-rate': () => import('../tools/ExchangeRate'),
  'scientific': () => import('../tools/ScientificCalc'),
  'base-convert': () => import('../tools/BaseConverter'),
  'calculator-basic': () => import('../tools/CalculatorBasic'),
  
  // 设计工具
  'color-picker': () => import('../tools/ColorPicker'),
  
  // 安全工具
  'password-gen': () => import('../tools/PasswordGen'),
  'password-strength': () => import('../tools/PasswordStrength'),
  
  // 其他工具
  'qrcode': () => import('../tools/QRCode'),
};

// 缓存已加载的组件
const toolComponentCache = {};

export default function ToolPage() {
  const { toolId } = useParams();
  const tool = toolsData.find(t => t.id === toolId);
  const [ToolComponent, setToolComponent] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    setLoading(true);
    
    // 检查缓存
    if (toolComponentCache[toolId]) {
      setToolComponent(toolComponentCache[toolId]);
      setLoading(false);
      return;
    }
    
    // 动态加载
    const loader = toolModules[toolId];
    if (loader) {
      loader().then(module => {
        const Component = module.default;
        toolComponentCache[toolId] = Component;
        setToolComponent(Component);
        setLoading(false);
      }).catch(() => {
        setToolComponent(null);
        setLoading(false);
      });
    } else {
      setToolComponent(null);
      setLoading(false);
    }
  }, [toolId]);
  
  if (!tool) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 24px' }}>
        <Wrench size={48} style={{ color: '#64748b', marginBottom: '16px' }} />
        <h2 style={{ color: '#f8fafc', marginBottom: '8px' }}>工具未找到</h2>
        <p style={{ color: '#94a3b8' }}>该工具不存在</p>
      </div>
    );
  }
  
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <div style={{ width: '32px', height: '32px', border: '3px solid rgba(59, 130, 246, 0.3)', borderTopColor: '#3b82f6', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      </div>
    );
  }
  
  if (!ToolComponent) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 24px' }}>
        <Wrench size={48} style={{ color: '#64748b', marginBottom: '16px' }} />
        <h2 style={{ color: '#f8fafc', marginBottom: '8px' }}>{tool.name}</h2>
        <p style={{ color: '#94a3b8' }}>{tool.description}</p>
        <p style={{ color: '#64748b', marginTop: '16px', fontSize: '14px' }}>该工具正在开发中...</p>
      </div>
    );
  }
  
  return <ToolComponent />;
}
