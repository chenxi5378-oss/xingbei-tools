import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Sparkles, ArrowRight } from 'lucide-react';
import './ToolCard.css';

export default function ToolCard({ tool, size = 'default' }) {
  const { id, name, description, category, isHot, isNew, icon: Icon } = tool;
  
  return (
    <Link to={`/tool/${id}`} className={`tool-card ${size}`}>
      <div className="tool-card-header">
        <div className="tool-icon-wrapper">
          {Icon && <Icon size={size === 'small' ? 20 : 24} className="tool-icon" />}
        </div>
        <div className="tool-badges">
          {isHot && (
            <span className="badge hot">
              <Flame size={12} />
              HOT
            </span>
          )}
          {isNew && (
            <span className="badge new">
              <Sparkles size={12} />
              NEW
            </span>
          )}
        </div>
      </div>
      
      <div className="tool-card-body">
        <h3 className="tool-name">{name}</h3>
        <p className="tool-description">{description}</p>
      </div>
      
      <div className="tool-card-footer">
        <span className="tool-category">{category}</span>
        <ArrowRight size={14} className="tool-arrow" />
      </div>
    </Link>
  );
}
