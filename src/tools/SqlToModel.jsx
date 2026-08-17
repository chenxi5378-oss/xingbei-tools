import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';
import './ToolTemplate.css';

export default function SqlToModel() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('typescript');
  const [copied, setCopied] = useState(false);

  const languages = [
    { value: 'typescript', label: 'TypeScript' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'go', label: 'Go' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'php', label: 'PHP' },
    { value: 'rust', label: 'Rust' },
  ];

  const sqlTypeToLang = (sqlType, lang) => {
    const typeMap = {
      typescript: { 'INT': 'number', 'VARCHAR': 'string', 'TEXT': 'string', 'DATETIME': 'Date', 'BOOLEAN': 'boolean', 'FLOAT': 'number', 'DOUBLE': 'number', 'DECIMAL': 'number' },
      javascript: { 'INT': 'number', 'VARCHAR': 'string', 'TEXT': 'string', 'DATETIME': 'Date', 'BOOLEAN': 'boolean', 'FLOAT': 'number', 'DOUBLE': 'number', 'DECIMAL': 'number' },
      python: { 'INT': 'int', 'VARCHAR': 'str', 'TEXT': 'str', 'DATETIME': 'datetime', 'BOOLEAN': 'bool', 'FLOAT': 'float', 'DOUBLE': 'float', 'DECIMAL': 'Decimal' },
      go: { 'INT': 'int', 'VARCHAR': 'string', 'TEXT': 'string', 'DATETIME': 'time.Time', 'BOOLEAN': 'bool', 'FLOAT': 'float32', 'DOUBLE': 'float64', 'DECIMAL': 'float64' },
      java: { 'INT': 'Integer', 'VARCHAR': 'String', 'TEXT': 'String', 'DATETIME': 'LocalDateTime', 'BOOLEAN': 'Boolean', 'FLOAT': 'Float', 'DOUBLE': 'Double', 'DECIMAL': 'BigDecimal' },
      csharp: { 'INT': 'int', 'VARCHAR': 'string', 'TEXT': 'string', 'DATETIME': 'DateTime', 'BOOLEAN': 'bool', 'FLOAT': 'float', 'DOUBLE': 'double', 'DECIMAL': 'decimal' },
      php: { 'INT': 'int', 'VARCHAR': 'string', 'TEXT': 'string', 'DATETIME': 'DateTime', 'BOOLEAN': 'bool', 'FLOAT': 'float', 'DOUBLE': 'float', 'DECIMAL': 'float' },
      rust: { 'INT': 'i32', 'VARCHAR': 'String', 'TEXT': 'String', 'DATETIME': 'DateTime<Utc>', 'BOOLEAN': 'bool', 'FLOAT': 'f32', 'DOUBLE': 'f64', 'DECIMAL': 'Decimal' },
    };
    
    const upperType = sqlType.toUpperCase();
    for (const [key, val] of Object.entries(typeMap[lang] || typeMap.typescript)) {
      if (upperType.includes(key)) return val;
    }
    return 'string';
  };

  const convert = () => {
    if (!input.trim()) {
      setOutput('');
      return;
    }

    // Parse CREATE TABLE statement
    const tableMatch = input.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?/i);
    if (!tableMatch) {
      setOutput('无法解析SQL，请确保是有效的CREATE TABLE语句');
      return;
    }

    const tableName = tableMatch[1];
    const lines = input.match(/\(([^)]+)\)/s);
    if (!lines) {
      setOutput('无法解析字段定义');
      return;
    }

    const columns = lines[1].split(',').map(col => {
      const parts = col.trim().split(/\s+/);
      return {
        name: parts[0].replace(/[`"']/g, ''),
        type: parts[1] || 'VARCHAR',
        nullable: !col.includes('NOT NULL'),
        primary: col.includes('PRIMARY KEY'),
      };
    }).filter(col => col.name && !col.name.match(/^(FOREIGN|PRIMARY|UNIQUE|INDEX|KEY|CONSTRAINT)/i));

    let result = '';
    const className = tableName.replace(/_/g, '').replace(/^(\w)/, c => c.toUpperCase());

    switch (language) {
      case 'typescript':
        result = `interface ${className} {\n${columns.map(c => `  ${c.name}${c.nullable ? '?' : ''}: ${sqlTypeToLang(c.type, 'typescript')};${c.primary ? ' // Primary Key' : ''}`).join('\n')}\n}`;
        break;
      case 'javascript':
        result = `// ${className} Model\nconst ${className}Schema = {\n${columns.map(c => `  ${c.name}: { type: '${sqlTypeToLang(c.type, 'javascript')}'${c.primary ? ', primaryKey: true' : ''}${!c.nullable ? ', required: true' : ''} }`).join(',\n')}\n};`;
        break;
      case 'python':
        result = `from dataclasses import dataclass\nfrom datetime import datetime\nfrom typing import Optional\n\n@dataclass\nclass ${className}:\n${columns.map(c => `    ${c.name}: ${c.nullable ? 'Optional[' + sqlTypeToLang(c.type, 'python') + ']' : sqlTypeToLang(c.type, 'python')}${c.primary ? '  # Primary Key' : ''}`).join('\n')}`;
        break;
      case 'go':
        result = `type ${className} struct {\n${columns.map(c => `\t${c.name.replace(/_\w/g, m => m[1].toUpperCase()).replace(/^\w/, c => c.toUpperCase())} ${c.nullable ? '*' : ''}${sqlTypeToLang(c.type, 'go')} \`json:"${c.name}"\`${c.primary ? ' // Primary Key' : ''}`).join('\n')}\n}`;
        break;
      case 'java':
        result = `public class ${className} {\n${columns.map(c => `    private ${sqlTypeToLang(c.type, 'java')} ${c.name};${c.primary ? ' // Primary Key' : ''}`).join('\n')}\n\n    // Getters and Setters\n}`;
        break;
      case 'csharp':
        result = `public class ${className}\n{\n${columns.map(c => `    public ${sqlTypeToLang(c.type, 'csharp')}${c.nullable ? '?' : ''} ${c.name.replace(/_\w/g, m => m[1].toUpperCase()).replace(/^\w/, c => c.toUpperCase())} { get; set; }${c.primary ? ' // Primary Key' : ''}`).join('\n')}\n}`;
        break;
      case 'php':
        result = `class ${className}\n{\n${columns.map(c => `    public ${sqlTypeToLang(c.type, 'php')} $${c.name};${c.primary ? ' // Primary Key' : ''}`).join('\n')}\n}`;
        break;
      case 'rust':
        result = `pub struct ${className} {\n${columns.map(c => `    pub ${c.name}: ${c.nullable ? `Option<${sqlTypeToLang(c.type, 'rust')}>` : sqlTypeToLang(c.type, 'rust')},${c.primary ? ' // Primary Key' : ''}`).join('\n')}\n}`;
        break;
    }

    setOutput(result);
  };

  const copyOutput = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-page-container">
      <div className="tool-header">
        <div>
          <h1 className="tool-header-title">SQL转Model类</h1>
          <p className="tool-header-desc">将CREATE TABLE语句转换为各种编程语言的Model类</p>
        </div>
      </div>

      <div className="tool-config">
        <select className="tool-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
          {languages.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
        </select>
      </div>

      <div className="tool-actions">
        <button className="tool-btn primary" onClick={convert}>
          <Code size={16} />
          转换
        </button>
        <button className="tool-copy-btn" onClick={copyOutput}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? '已复制' : '复制结果'}
        </button>
      </div>

      <div className="tool-io-grid">
        <div className="tool-input-section">
          <label className="tool-label">SQL CREATE TABLE</label>
          <textarea 
            className="tool-textarea" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(255)\n);" 
          />
        </div>
        <div className="tool-output-section">
          <label className="tool-label">生成的Model类</label>
          <textarea 
            className="tool-textarea output" 
            value={output} 
            readOnly 
            placeholder="生成的代码..." 
          />
        </div>
      </div>
    </div>
  );
}
