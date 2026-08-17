import {
  Cloud, Code, Shield, Clock, FileText, Globe,
  Image, Terminal, Palette, Lock, MoreHorizontal, HeartPulse,
  DollarSign, Dices, Calculator, Database, FileJson, RefreshCw,
  Coins, CreditCard, QrCode, Barcode, Type, Key, Activity,
  Percent, Ruler, Weight, Thermometer, Droplets, Hash, Binary,
  Cpu, Globe2, Smartphone, Car, MapPin, Mail, Link2, Calendar,
  Timer, Clock3, Briefcase, Calculator as CalcIcon,
  Shuffle, Filter, Replace, ImagePlus, ImageDown, ImageIcon,
  Code2, FileCode, Globe as WebIcon, ArrowLeftRight, Layers,
  GitBranch, FileType, FileJson as JsonIcon, AlignLeft,
  Eye, Fingerprint, ShieldCheck, Scan, QrCode as QrIcon,
  User, Users, Building2, Banknote, TrendingUp, PiggyBank,
  Receipt, Landmark, Wallet, ChartPie, LineChart, BarChart3,
  Hexagon, Triangle, Square, Circle, Pentagon, Octagon,
  Zap, Flame, Snowflake, Sun, Moon, Wind, CloudRain,
  Music, Video, Camera, Mic, Speaker, Radio, Tv,
  Gamepad2, Puzzle, ToyBrick, Plane, Train, Bus, Ship,
  Bike, CarFront, Fuel, Gauge, Wrench, Hammer,
  Paintbrush, PenTool, Pencil, Eraser, Scissors, ClipboardCopy,
  StickyNote, BookOpen, Bookmark, Library, GraduationCap,
  Award, Medal, Trophy, Star, Heart, ThumbsUp, ThumbsDown,
  MessageSquare, MessagesSquare, MailOpen, Inbox, Send,
  Paperclip, Link, Unlink, ExternalLink, Share2, Upload, Download,
  CloudUpload, CloudDownload, DatabaseBackup, Server, HardDrive,
  Monitor, Smartphone as MobileIcon, Tablet, Laptop,
  Printer, Mouse, Keyboard, Headphones, Glasses, Watch,
  AlarmClock, Bell, Volume2, VolumeX, Wifi, WifiOff, Bluetooth,
  Battery, BatteryCharging, BatteryFull, BatteryLow,
  Signal, SignalHigh, SignalLow, SignalMedium, SignalZero,
  Navigation, Compass, Map, Globe2 as GlobeIcon3, Flag, FlagTriangleRight,
  Pin, PinOff, MapPinned, Trash2, Trash, Archive, ArchiveRestore,
  Folder, FolderOpen, FolderPlus, FolderMinus, FolderTree,
  File, FilePlus, FileMinus, FileX, FileCheck, FileQuestion,
  FileWarning, FileClock, FileLock, FileHeart, FileSearch,
  FileText as FileTextIcon, FileSpreadsheet, FilePieChart,
  FileBarChart, FileCode2, FileAudio, FileVideo, FileImage,
  FileBox, FileCog, FileSignature, FileKey, FileLock2,
  FileOutput, FileInput, FileSymlink, FileTerminal, FileType2,
  Files, Copy as CopyIcon, Clipboard as ClipboardIcon,
  ClipboardCheck, ClipboardList, ClipboardX, ClipboardPaste,
  Sticker, Ticket, TicketCheck, Vibrate, Move, Move3d,
  Maximize, Minimize, Maximize2, Minimize2, Expand, Shrink,
  Fullscreen, PictureInPicture, Cast, Airplay,
  ScreenShare, Presentation, Projector, Sliders, SlidersHorizontal,
  ToggleLeft, ToggleRight, Power, PowerOff, BatteryWarning,
  Plug, PlugZap, Cable, CircuitBoard, Component, CpuIcon,
  HardDriveIcon, KeyboardIcon, MemoryStick, Mic2, MonitorSmartphone,
  MousePointer, MousePointer2, MousePointerClick, ScanLine,
  ScanFace, ScanSearch, ScanText, ScreenShareOff,
  SmartphoneCharging, TabletIcon, Touchpad, Tv2, Usb, VideoIcon,
  Videotape, View, Webcam, WifiIcon,
  Utensils, Unlock, Search, GitCompare, FileDiff
} from 'lucide-react';

export const categories = [
  { id: 'all', name: '全部工具', icon: Wrench },
  { id: 'random', name: '随机决策', icon: Dices },
  { id: 'encode', name: '编码解码', icon: Code },
  { id: 'crypto', name: '加密安全', icon: Shield },
  { id: 'time', name: '时间日期', icon: Clock },
  { id: 'text', name: '文本处理', icon: FileText },
  { id: 'network', name: '网络工具', icon: Globe },
  { id: 'image', name: '图像处理', icon: Image },
  { id: 'dev', name: '开发辅助', icon: Terminal },
  { id: 'design', name: '设计工具', icon: Palette },
  { id: 'security', name: '安全工具', icon: Lock },
  { id: 'calc', name: '计算工具', icon: Calculator },
  { id: 'convert', name: '转换工具', icon: ArrowLeftRight },
  { id: 'health', name: '健康工具', icon: HeartPulse },
  { id: 'finance', name: '金融工具', icon: DollarSign },
];

export const toolsData = [
  // 随机决策
  { id: 'random-dice', name: '随机骰子', description: '投掷虚拟骰子', categoryId: 'random', icon: Dices },
  { id: 'random-poker', name: '随机扑克牌', description: '从牌堆随机抽牌', categoryId: 'random', icon: CreditCard },
  { id: 'random-coin', name: '随机硬币', description: '抛硬币', categoryId: 'random', icon: Coins },
  { id: 'random-number', name: '随机数字生成器', description: '生成指定范围随机数', categoryId: 'random', icon: Hash },
  { id: 'random-picker', name: '随机选择器', description: '从列表随机选择', categoryId: 'random', icon: Shuffle },
  { id: 'random-food', name: '随机吃什么', description: '解决选择困难症', categoryId: 'random', isNew: true, icon: Utensils },
  { id: 'random-avatar', name: '随机头像生成', description: '生成随机头像', categoryId: 'random', isNew: true, icon: User },
  { id: 'random-color', name: '随机颜色', description: '生成随机颜色', categoryId: 'random', isNew: true, icon: Palette },
  
  // 编码解码
  { id: 'json-format', name: 'JSON格式化', description: '美化、压缩、验证JSON', categoryId: 'encode', icon: FileJson },
  { id: 'base64-encode', name: 'Base64编码', description: '文本转Base64', categoryId: 'encode', icon: Code2 },
  { id: 'base64-decode', name: 'Base64解码', description: 'Base64转文本', categoryId: 'encode', icon: Code },
  { id: 'url-encode', name: 'URL编码', description: 'URL编码', categoryId: 'encode', icon: Link },
  { id: 'url-decode', name: 'URL解码', description: 'URL解码', categoryId: 'encode', icon: Link2 },
  { id: 'html-encode', name: 'HTML编码', description: 'HTML实体编码', categoryId: 'encode', icon: FileCode },
  { id: 'html-decode', name: 'HTML解码', description: 'HTML实体解码', categoryId: 'encode', icon: FileCode2 },
  
  // 加密安全
  { id: 'md5', name: 'MD5生成器', description: '生成MD5哈希', categoryId: 'crypto', icon: Hash, isHot: true },
  { id: 'sha', name: 'SHA生成器', description: 'SHA-1/256/512哈希', categoryId: 'crypto', icon: Shield },
  { id: 'aes-encrypt', name: 'AES加密', description: '对称加密', categoryId: 'crypto', icon: Lock },
  { id: 'aes-decrypt', name: 'AES解密', description: '对称解密', categoryId: 'crypto', icon: Unlock },
  
  // 时间日期
  { id: 'timestamp', name: '时间戳转换', description: 'Unix时间戳与日期互转', categoryId: 'time', icon: Clock },
  { id: 'cron-parse', name: 'Cron解析器', description: '解析Cron表达式', categoryId: 'time', icon: Timer },
  { id: 'date-diff', name: '日期间隔', description: '计算日期差', categoryId: 'time', isNew: true, icon: Calendar },
  { id: 'countdown', name: '倒计时器', description: '倒计时工具', categoryId: 'time', isNew: true, icon: Timer },
  
  // 文本处理
  { id: 'regex-test', name: '正则表达式测试', description: '正则匹配和替换', categoryId: 'text', icon: Search },
  { id: 'text-compare', name: '文本对比', description: '对比两段文本差异', categoryId: 'text', icon: GitBranch },
  { id: 'case-convert', name: '大小写转换', description: '大小写互相转换', categoryId: 'text', icon: Type },
  { id: 'markdown', name: 'Markdown编辑器', description: '实时预览编辑器', categoryId: 'text', icon: FileTextIcon },
  { id: 'word-count', name: '字数统计', description: '统计字数、字符数', categoryId: 'text', icon: AlignLeft },
  { id: 'text-diff', name: '文本对比高级', description: '行级差异对比', categoryId: 'text', isNew: true, icon: FileDiff },
  { id: 'pinyin-convert', name: '拼音转换', description: '汉字转拼音', categoryId: 'text', isNew: true, icon: Type },
  
  // 网络工具
  { id: 'ip-lookup', name: 'IP查询', description: '查询IP地址信息', categoryId: 'network', icon: Globe },
  { id: 'whois', name: 'WHOIS查询', description: '查询域名注册信息', categoryId: 'network', icon: Globe2 },
  { id: 'dns-lookup', name: 'DNS查询', description: '查询DNS记录', categoryId: 'network', icon: GlobeIcon3 },
  { id: 'http-request', name: 'HTTP请求测试', description: '发送HTTP请求', categoryId: 'network', isNew: true, icon: Send },
  { id: 'ssl-checker', name: 'SSL证书检查', description: '检查SSL证书', categoryId: 'network', isNew: true, icon: ShieldCheck },
  
  // 图像处理
  { id: 'qrcode', name: '二维码生成器', description: '生成二维码', categoryId: 'image', icon: QrCode },
  { id: 'color-picker', name: '颜色选择器', description: '取色器和颜色转换', categoryId: 'image', icon: Eye },
  { id: 'color-palette', name: '调色板生成', description: '生成配色方案', categoryId: 'image', isNew: true, icon: Palette },
  
  // 开发辅助
  { id: 'json-compare', name: 'JSON对比', description: '对比两个JSON', categoryId: 'dev', isNew: true, icon: GitCompare },
  { id: 'csv-to-json', name: 'CSV转JSON', description: 'CSV转JSON格式', categoryId: 'dev', isNew: true, icon: FileJson },
  { id: 'json-to-csv', name: 'JSON转CSV', description: 'JSON转CSV格式', categoryId: 'dev', isNew: true, icon: FileSpreadsheet },
  
  // 计算工具
  { id: 'percentage', name: '百分比计算器', description: '百分比计算', categoryId: 'calc', icon: Percent },
  { id: 'bmi', name: 'BMI计算器', description: '身体质量指数', categoryId: 'calc', icon: Activity },
  { id: 'loan', name: '贷款计算器', description: '房贷车贷计算', categoryId: 'calc', icon: Banknote },
  { id: 'exchange-rate', name: '汇率转换器', description: '货币汇率换算', categoryId: 'calc', icon: DollarSign },
  { id: 'scientific', name: '科学计算器', description: '高级数学运算', categoryId: 'calc', icon: CalcIcon },
  { id: 'base-convert', name: '进制转换器', description: '进制互转', categoryId: 'calc', icon: Binary },
  { id: 'calculator-basic', name: '基础计算器', description: '简单计算', categoryId: 'calc', isNew: true, icon: Calculator },
  
  // 安全工具
  { id: 'password-gen', name: '密码生成器', description: '生成安全密码', categoryId: 'security', icon: Key },
  { id: 'password-strength', name: '密码强度检测', description: '检测密码强度', categoryId: 'security', icon: ShieldCheck },
  { id: 'uuid-generator', name: 'UUID生成器', description: '生成UUID', categoryId: 'security', isNew: true, icon: Fingerprint },
  
  // 转换工具
  { id: 'unit-length', name: '长度换算', description: '长度单位换算', categoryId: 'convert', isNew: true, icon: Ruler },
  { id: 'unit-weight', name: '重量换算', description: '重量单位换算', categoryId: 'convert', isNew: true, icon: Weight },
  { id: 'unit-temperature', name: '温度换算', description: '温度单位换算', categoryId: 'convert', isNew: true, icon: Thermometer },
  
  // 健康工具
  { id: 'bmi-advanced', name: 'BMI高级版', description: '详细BMI分析', categoryId: 'health', isNew: true, icon: HeartPulse },
  
  // 金融工具
  { id: 'tax-calculator', name: '个税计算器', description: '个人所得税计算', categoryId: 'finance', isNew: true, icon: Receipt },
];

export const getToolsByCategory = (categoryId) => {
  if (categoryId === 'all') return toolsData;
  return toolsData.filter(tool => tool.categoryId === categoryId);
};

export const getToolById = (id) => toolsData.find(tool => tool.id === id);
