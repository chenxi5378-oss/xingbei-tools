import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wrench } from 'lucide-react';
import ToolCard from '../components/shared/ToolCard';
import { toolsData, categories } from '../data/toolsData';
import './CategoryPage.css';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const tools = toolsData.filter(t => t.categoryId === categoryId);
  
  if (!category) {
    return (
      <div className="category-page">
        <div className="category-empty">
          <Wrench size={48} className="empty-icon" />
          <h2>分类不存在</h2>
          <p>请返回首页查看所有工具</p>
        </div>
      </div>
    );
  }
  
  const CategoryIcon = category.icon;
  
  return (
    <div className="category-page">
      <div className="category-header">
        <CategoryIcon size={32} className="category-header-icon" />
        <div>
          <h1 className="category-header-title">{category.name}</h1>
          <p className="category-header-count">共 {tools.length} 个工具</p>
        </div>
      </div>
      
      <div className="tools-grid">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
